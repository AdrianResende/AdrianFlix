// Service Worker para AdrianFlix PWA
const CACHE_NAME = 'adrianflix-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/netflix-theme.css',
  '/advanced-theme.css',
  '/enhanced-features.js',
  '/static/css/main.a4a7babc.css',
  '/static/js/main.920e74f2.js',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  console.log('🎬 AdrianFlix SW: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 AdrianFlix SW: Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ AdrianFlix SW: Installation complete');
        return self.skipWaiting();
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', event => {
  console.log('🔄 AdrianFlix SW: Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ AdrianFlix SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ AdrianFlix SW: Activation complete');
      return self.clients.claim();
    })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
  // Estratégia: Cache First para recursos estáticos
  if (event.request.destination === 'style' || 
      event.request.destination === 'script' ||
      event.request.destination === 'image') {
    
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            console.log('📦 AdrianFlix SW: Serving from cache:', event.request.url);
            return response;
          }
          
          console.log('🌐 AdrianFlix SW: Fetching from network:', event.request.url);
          return fetch(event.request).then(response => {
            // Clona a resposta antes de cachear
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          });
        })
    );
  }
  
  // Estratégia: Network First para HTML
  else if (event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          console.log('🌐 AdrianFlix SW: Serving HTML from network');
          
          // Cacheia a nova versão
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        })
        .catch(() => {
          console.log('📦 AdrianFlix SW: Network failed, serving HTML from cache');
          return caches.match(event.request);
        })
    );
  }
  
  // Para outras requisições, usa cache first
  else {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  }
});

// Background Sync para funcionalidades offline
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('🔄 AdrianFlix SW: Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Aqui você pode implementar lógica para sincronizar dados
  // quando a conexão for restaurada
  return Promise.resolve();
}

// Push notifications (para futuras implementações)
self.addEventListener('push', event => {
  console.log('📢 AdrianFlix SW: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Novo conteúdo disponível!',
    icon: '/logo192.png',
    badge: '/logo192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver agora',
        icon: '/logo192.png'
      },
      {
        action: 'close',
        title: 'Fechar',
        icon: '/logo192.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('AdrianFlix', options)
  );
});

// Clique em notificações
self.addEventListener('notificationclick', event => {
  console.log('👆 AdrianFlix SW: Notification click received');
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Mensagens do cliente
self.addEventListener('message', event => {
  console.log('💬 AdrianFlix SW: Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Error handling
self.addEventListener('error', event => {
  console.error('❌ AdrianFlix SW: Error occurred:', event.error);
});

self.addEventListener('unhandledrejection', event => {
  console.error('❌ AdrianFlix SW: Unhandled promise rejection:', event.reason);
});

console.log('🎬 AdrianFlix Service Worker loaded successfully!');