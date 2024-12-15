import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'example-90ec7',
        appId: '1:346793995412:web:4e14235a5658caa28b5881',
        storageBucket: 'example-90ec7.firebasestorage.app',
        apiKey: 'AIzaSyCNGa-9a8PuDyZSGDfux-1rBp8cfuFw_gQ',
        authDomain: 'example-90ec7.firebaseapp.com',
        messagingSenderId: '346793995412',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
