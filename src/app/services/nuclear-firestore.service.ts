import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { NTRun } from '../shared/nt-object';

@Injectable({
  providedIn: 'root',
})
export class NuclearFirestoreService {
  constructor(private firestore: AngularFirestore) {}

  async addRunToUser(userId: string, run: NTRun): Promise<any> {
    return await this.firestore
      .collection('Users')
      .doc(userId)
      .collection('Runs')
      .doc(run.timestamp.toString())
      .set(run);
  }

  getUserRuns(userId: string) {
    return this.firestore.collection<NTRun>(userId);
  }
}
