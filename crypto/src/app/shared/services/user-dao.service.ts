import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserDAOService {
  collectionName = 'Users';

  constructor(private afs: AngularFirestore) { }

  // CRUD (Create, Read, Update, Delete)

  create(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.Id).set(user);
  }

  getAll() {
    return this.afs.collection<User>('Users', ref => ref.where('Id', '!=', -1)).valueChanges();
    
  }

  getById(id: string) {
    return this.afs.collection<User>('Users', ref => ref.where('Id', '==', id)).valueChanges();
  }

  update(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.Id).set(user);
  }

  delete(id: string) {
    return this.afs.collection<User>(this.collectionName).doc(id).delete();
  }
}
