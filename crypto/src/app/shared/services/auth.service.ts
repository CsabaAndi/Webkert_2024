import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userState: any;


  constructor(private auth: AngularFireAuth) {
    this.userState = localStorage.getItem('user'); 
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
      } else {
        localStorage.setItem('user', JSON.stringify(null));
      }
    });
  }


  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  del() {return this.auth.currentUser.then(user => user?.delete())}

  isUserLoggedIn() {
    return this.auth.user
  }
  
  loggedInId() {
    const userId = JSON.parse(localStorage.getItem('user') as string).uid;
    return userId
  }
    


  async logout() {
    try {
        await this.auth.signOut();
        return true;
    } catch (error) {
        console.log('Sign out failed', error);
        return false;
    }
  }

}
