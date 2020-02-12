import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from './user/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/users';
 
  usersRef: AngularFirestoreCollection<User> = null;
 
  constructor(private db: AngularFirestore) {
    this.usersRef = db.collection(this.dbPath);
  }
 
  createUser(user: User): void {
    this.usersRef.add({...user});
  }
 
  updateUser(id: string, value: any): Promise<void> {
    return this.usersRef.doc(id).update(value);
  }
 
  deleteUser(id: string): Promise<void> {
    return this.usersRef.doc(id).delete();
  }
 
  getUserList(): AngularFirestoreCollection<User> {
    return this.usersRef;
  }
 
  deleteAll() {
    this.usersRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}
