import { NgAnalyzedFileWithInjectables } from '@angular/compiler';
import { Component, OnInit, Type } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  steamId: string = '';
  userRuns: NTJson = {} as NTJson;
  streamKey: string = '';
  addRunInterval: any;
  autocheck: boolean = false

  myForm = new FormGroup({
    formSteamID: new FormControl(''),
    formStreamKey: new FormControl(''),
  });

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

  updateSteamId(SteamId: string) {
    if (SteamId != this.steamId) {
      this.steamId = SteamId;
    }
  }

  updateStreamKey(StreamKey: string) {
    if (this.streamKey != StreamKey) {
      this.streamKey = StreamKey;
    }
  }

  submitForm() {
    clearInterval(this.addRunInterval)

    this.updateSteamId(this.myForm.value["formSteamID"])
    this.updateStreamKey(this.myForm.value["formStreamKey"])
    this.autocheck = this.myForm.value["formAutoCheck"]

    if (this.myForm.value["formAutoCheck"] == true ) {
      this.addRunLoop()
    } else {
      this.addRunToUser()
    }
  }

  manageAutoCheck() {
    if (this.autocheck) {
      clearInterval(this.addRunInterval)
      this.autocheck = false
    } else {
      this.addRunLoop()
      this.autocheck = true
    }
  }

  addRunLoop() {
    var c = this;
    this.addRunInterval = setInterval(function(){c.addRunToUser();}, 15000);
  }

  addRunToUser() {
    this.nuclearApi
      .callNuclearApi(this.steamId, this.streamKey)
      .then((response) => {
        if (response.previous != null && sameRun(this.userRuns.previous, response.previous) == false){
          this.userRuns = response;
          this.firestoreService
            .addRunToUser(this.steamId, this.userRuns.previous)
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
