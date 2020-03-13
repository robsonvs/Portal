import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pop } from '../class/Pop';

@Injectable({
  providedIn: 'root'
})
export class PopService {
  
  private dbPath = '/pops';
 
  popsRef: AngularFirestoreCollection<Pop> = null;
 
  constructor(private db: AngularFirestore) {
    this.popsRef = db.collection(this.dbPath);
  }
 
  createPop(pop: Pop): void {
    this.popsRef.add({...pop});
  }
 
  updatePop(id: string, value: Pop): Promise<void> {
    return this.popsRef.doc(id).update(value);
  }
 
  deletePop(id: string): Promise<void> {
    return this.popsRef.doc(id).delete();
  }

  listPops(): AngularFirestoreCollection<Pop> {
    return this.popsRef;
  }
}