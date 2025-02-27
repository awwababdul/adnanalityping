
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypewriterText = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = "",
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: number;

    if (isPaused) {
      timeout = window.setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(timeout);
    }

    const currentText = texts[currentIndex];

    if (isTyping && !isDeleting) {
      // Still typing
      if (displayText.length < currentText.length) {
        timeout = window.setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause
        setIsTyping(false);
        setIsPaused(true);
      }
    } else if (isDeleting) {
      // Deleting
      if (displayText.length > 0) {
        timeout = window.setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    currentIndex,
    isTyping,
    isDeleting,
    isPaused,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  ]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1.1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};

export default TypewriterText;
