import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  nameIsCollapsed : boolean = true;
  purposeIsCollapsed : boolean = true;
  meatingIsCollapsed : boolean = true;
  dateIsCollapsed : boolean = true;
  dateNameIsCollapsed : boolean = true;
  name : string = "";
  purpose : string = "";
  fromDate : Date;
  toDate : Date;
  fromTime: Time;
  toTime: Time;

  constructor() { }

  nameToggleCollapse() {
    this.nameIsCollapsed = !this.nameIsCollapsed;
    this.purposeIsCollapsed = true;
    this.meatingIsCollapsed = true;
    this.dateIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  purposeToggleCollapse() {
    this.purposeIsCollapsed = !this.purposeIsCollapsed;
    this.nameIsCollapsed = true;
    this.meatingIsCollapsed = true;
    this.dateIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  meatingToggleCollapse() {
    this.meatingIsCollapsed = !this.meatingIsCollapsed;
    this.purposeIsCollapsed = true;
    this.nameIsCollapsed = true;
    this.dateIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  dateToggleCollapse() {
    this.dateIsCollapsed = !this.dateIsCollapsed;
    this.purposeIsCollapsed = true;
    this.nameIsCollapsed = true;
    this.meatingIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  dateNameToggleCollapse() {
    this.dateNameIsCollapsed = !this.dateNameIsCollapsed;
    this.nameIsCollapsed = true;
    this.purposeIsCollapsed = true;
    this.meatingIsCollapsed = true;
    this.dateIsCollapsed = true;
  }

  getByVisitorName() {

  }

  getByPurpose() {

  }

  getByMeatingPersonName() {

  }

  getByDate() {

  }

  getByDateAndName() {
    
  }

  ngOnInit() {
  }

}
