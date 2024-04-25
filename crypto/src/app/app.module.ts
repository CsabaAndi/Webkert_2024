import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';


const firebaseConfig = {

  apiKey: "AIzaSyCtjwj8P27rT7tSRk03FzvuazdwCLFvcWw",

  authDomain: "cryptokert.firebaseapp.com",

  projectId: "cryptokert",

  storageBucket: "cryptokert.appspot.com",

  messagingSenderId: "905908001588",

  appId: "1:905908001588:web:1ea56456eeb37151d62361"

};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
