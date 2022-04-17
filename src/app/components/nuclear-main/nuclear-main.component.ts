import { NgAnalyzedFileWithInjectables } from '@angular/compiler';
import { Component, OnInit, Type } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { NuclearFirestoreService } from 'src/app/services/nuclear-firestore.service';
import { NuclearService } from 'src/app/services/nuclear.service';
import { NTJson, NTRun, sameRun } from 'src/app/shared/nt-object';

@Component({
  selector: 'app-nuclear-main',
  templateUrl: './nuclear-main.component.html',
  styleUrls: ['./nuclear-main.component.css'],
})
export class NuclearMainComponent implements OnInit {
  userRunsHistory: NTRun[] = [];
  userId: string = '';
  userRuns: NTJson = {} as NTJson;
  streamKey: string = '';
  addRunInterval: any;

  constructor(
    private firestoreService: NuclearFirestoreService,
    private nuclearApi: NuclearService
  ) {}

  ngOnInit(): void {}

  getUserRunsHistory(data: { SteamId: string }) {
    if (data.SteamId != this.userId) {
      this.userId = data.SteamId;
      this.getRuns();
    }
  }

  updateStreamKey(data: { StreamKey: string }) {
    if (this.streamKey != data.StreamKey) {
      this.streamKey = data.StreamKey;
    }
  }

  addRunLoop() {
    var c = this;
    this.addRunInterval = setInterval(function(){c.addRunToUser();}, 15000);
  }

  addRunToUser() {
    this.nuclearApi
      .callNuclearApi(this.userId, this.streamKey)
      .then((response) => {
        if (response.previous != null && sameRun(this.userRuns.previous, response.previous) == false){
          this.userRuns = response;
          console.log(`User runs 1: ${this.userRuns}`);
          this.userRuns.previous.steamid = this.userId;
          console.log(`User runs 2: ${this.userRuns}`);
          this.firestoreService
            .addRunToUser(this.userId, this.userRuns.previous)
            .then((res) => {
              console.log(res);
            });
        };
      });
  }

  getRuns() {
    this.firestoreService
      .getUserRuns(this.userId)
      .valueChanges()
      .subscribe((data) => {
        this.userRunsHistory = data;
      });
  }
}
