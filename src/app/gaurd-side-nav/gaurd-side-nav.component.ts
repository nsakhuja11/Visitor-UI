import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-gaurd-side-nav',
  templateUrl: './gaurd-side-nav.component.html',
  styleUrls: ['./gaurd-side-nav.component.css']
})
export class GaurdSideNavComponent implements OnInit {

  nameIsCollapsed : boolean = true;
  dateIsCollapsed : boolean = true;
  name : string = "";
  fromDate : Date;
  toDate : Date;
  fromTime: Time;
  toTime: Time;

  constructor() { }

  nameToggleCollapse() {
    this.nameIsCollapsed = !this.nameIsCollapsed;
    this.dateIsCollapsed = true;
  }

  dateToggleCollapse() {
    this.dateIsCollapsed = !this.dateIsCollapsed;
    this.nameIsCollapsed = true;
  }

  getByGuardName() {

  }

  getByDate() {

  }

  ngOnInit() {
  }

}
