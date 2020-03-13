import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
// import { AngularFireAnalyticsModule } from '@angular/fire/analytics/public_api';
// import { AngularFirestoreModule } from '@angular/fire/firestore/public_api';
// import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import 'firebase/firestore';

const FirebaseComponet = [
  AngularFireModule.initializeApp(environment.firebase, 'portal')
  // AngularFireAnalyticsModule,
  // AngularFirestoreDocument
  // AngularFirestoreModule
]

@NgModule({
  declarations: [],
  imports: [FirebaseComponet],
  exports: [FirebaseComponet]
})
export class FirebaseModule { }
