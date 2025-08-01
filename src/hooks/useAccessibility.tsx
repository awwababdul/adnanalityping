import { useState, useEffect, useCallback } from 'react';

interface AccessibilitySettings {
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
}

export const useAccessibility = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    keyboardNavigation: false,
    screenReader: false,
  });

  const [isKeyboardUser, setIsKeyboardUser] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const checkPreferences = () => {
      // Reduced motion preference
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // High contrast preference
      const highContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      // Large text preference (approximated by checking if user has zoomed)
      const largeText = window.devicePixelRatio > 1.25;
      
      // Screen reader detection (basic check)
      const screenReader = window.navigator.userAgent.includes('NVDA') || 
                          window.navigator.userAgent.includes('JAWS') ||
                          !!document.querySelector('[aria-hidden="true"]');

      setSettings(prev => ({
        ...prev,
        reducedMotion,
        highContrast,
        largeText,
        screenReader,
      }));
    };

    checkPreferences();

    // Listen for preference changes
    const reducedMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
    const highContrastMQ = window.matchMedia('(prefers-contrast: high)');
    
    const handleReducedMotionChange = () => setSettings(prev => ({ 
      ...prev, 
      reducedMotion: reducedMotionMQ.matches 
    }));
    
    const handleHighContrastChange = () => setSettings(prev => ({ 
      ...prev, 
      highContrast: highContrastMQ.matches 
    }));

    reducedMotionMQ.addEventListener('change', handleReducedMotionChange);
    highContrastMQ.addEventListener('change', handleHighContrastChange);

    return () => {
      reducedMotionMQ.removeEventListener('change', handleReducedMotionChange);
      highContrastMQ.removeEventListener('change', handleHighContrastChange);
    };
  }, []);

  useEffect(() => {
    // Keyboard navigation detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true);
        setFocusVisible(true);
        setSettings(prev => ({ ...prev, keyboardNavigation: true }));
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
      setFocusVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Apply accessibility classes to document
  useEffect(() => {
    const classes = [];
    
    if (settings.reducedMotion) classes.push('reduced-motion');
    if (settings.highContrast) classes.push('high-contrast');
    if (settings.largeText) classes.push('large-text');
    if (isKeyboardUser) classes.push('keyboard-user');
    if (focusVisible) classes.push('focus-visible-enabled');

    // Apply classes to document
    document.documentElement.className = document.documentElement.className
      .replace(/(reduced-motion|high-contrast|large-text|keyboard-user|focus-visible-enabled)/g, '')
      .trim();
    
    if (classes.length > 0) {
      document.documentElement.className += ' ' + classes.join(' ');
    }
  }, [settings, isKeyboardUser, focusVisible]);

  // Skip link functionality
  const createSkipLink = useCallback((targetId: string, text: string = 'Skip to main content') => {
    return {
      href: `#${targetId}`,
      className: 'skip-link',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
          target.focus();
          target.scrollIntoView({ behavior: settings.reducedMotion ? 'auto' : 'smooth' });
        }
      },
      children: text,
    };
  }, [settings.reducedMotion]);

  // Announce to screen readers
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Focus management
  const manageFocus = useCallback((element: HTMLElement | null) => {
    if (element && isKeyboardUser) {
      element.focus();
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '-1');
      }
    }
  }, [isKeyboardUser]);

  // Trap focus within a container (useful for modals)
  const trapFocus = useCallback((container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }, []);

  return {
    settings,
    isKeyboardUser,
    focusVisible,
    createSkipLink,
    announceToScreenReader,
    manageFocus,
    trapFocus,
  };
};

// Custom hook for accessible animations
export const useAccessibleAnimation = (shouldAnimate: boolean = true) => {
  const { settings } = useAccessibility();
  
  return {
    shouldAnimate: shouldAnimate && !settings.reducedMotion,
    duration: settings.reducedMotion ? 0 : undefined,
    transition: settings.reducedMotion ? { duration: 0 } : undefined,
  };
};

// Custom hook for accessible colors
export const useAccessibleColors = () => {
  const { settings } = useAccessibility();
  
  return {
    highContrast: settings.highContrast,
    getContrastClass: (baseClass: string) => 
      settings.highContrast ? `${baseClass} high-contrast` : baseClass,
  };
};

export default useAccessibility;