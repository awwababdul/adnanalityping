
// Service Worker for Adnan Ali Typing PWA
const CACHE_NAME = 'adnan-typing-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  // Add CSS, JS, and other essential assets
  '/src/index.css'
];

// Install event - cache basic assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // Force waiting service worker to become active
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control of clients right away
  );
});

// Fetch event - serve from cache if available, otherwise fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                // Don't cache API requests or dynamic data
                if (!event.request.url.includes('/api/')) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          })
          .catch(error => {
            // Return fallback content for offline experience
            console.log('Fetch failed; returning offline fallback', error);
            
            // Here you could return a specific offline page
            // return caches.match('/offline.html');
          });
      })
  );
});

// Listen for push notifications
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/android-chrome-192x192.png',
      badge: '/favicon-32x32.png',
      data: {
        url: data.actionUrl || '/'
      },
      actions: [
        {
          action: 'view',
          title: 'View'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title || 'Adnan Ali Typing', options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'view' || !event.action) {
    const targetUrl = event.notification.data?.url || '/';
    
    event.waitUntil(
      clients.matchAll({type: 'window'})
        .then(windowClients => {
          // Check if a window is already open
          for (const client of windowClients) {
            if (client.url === targetUrl && 'focus' in client) {
              return client.focus();
            }
          }
          // If not, open a new window
          if (clients.openWindow) {
            return clients.openWindow(targetUrl);
          }
        })
    );
  }
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(
      // Process queued messages when back online
      // This could be used for form submissions, etc.
      sendQueuedMessages()
    );
  }
});

// Example function to process queued messages
function sendQueuedMessages() {
  // Implementation would depend on the app's specific needs
  return Promise.resolve();
}
