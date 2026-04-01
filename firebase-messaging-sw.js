// minted — firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCR5LgXM2qJn1TbDU0AsAbq7hAtZWO06o8",
  authDomain: "minted-56e9e.firebaseapp.com",
  projectId: "minted-56e9e",
  storageBucket: "minted-56e9e.firebasestorage.app",
  messagingSenderId: "823612860001",
  appId: "1:823612860001:web:88be68cb1e17d992e2ec20"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification || {};
  if (title) {
    self.registration.showNotification(title, {
      body: body || '',
      icon: '/minted/icon.png',
      badge: '/minted/icon.png',
    });
  }
});
