import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-emp-side-nav',
  templateUrl: './emp-side-nav.component.html',
  styleUrls: ['./emp-side-nav.component.css']
})
export class EmpSideNavComponent implements OnInit {

  nameIsCollapsed : boolean = true;
  idIsCollapsed : boolean = true;
  dateIsCollapsed : boolean = true;
  dateNameIsCollapsed : boolean = true;
  name : string = "";
  id : number;
  fromDate : Date;
  toDate : Date;
  fromTime: Time;
  toTime: Time;

  constructor() { }

  nameToggleCollapse() {
    this.nameIsCollapsed = !this.nameIsCollapsed;
    this.idIsCollapsed = true;
    this.dateIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  idToggleCollapse() {
    this.idIsCollapsed = !this.idIsCollapsed;
    this.nameIsCollapsed = true;
    this.dateIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  dateToggleCollapse() {
    this.dateIsCollapsed = !this.dateIsCollapsed;
    this.nameIsCollapsed = true;
    this.idIsCollapsed = true;
    this.dateNameIsCollapsed = true;
  }

  dateNameToggleCollapse() {
    this.dateNameIsCollapsed = !this.dateNameIsCollapsed;
    this.nameIsCollapsed = true;
    this.idIsCollapsed = true;
    this.dateIsCollapsed = true;
  }

  getByEmployeeName() {

  }

  getById() {

  }

  getByDate() {

  }

  getByDateAndName() {
    
  }

  ngOnInit() {
  }

}
