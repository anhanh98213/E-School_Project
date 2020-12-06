import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export class Manager{
  id: string;
  email : string;
  name: string;
  phoneNumber : string;
  address: string;
  dateOfBirth: Date;
  gender: string;
}

export const MANAGERS = [
  {id:0, email:'manager1@gmail.com', name:'manager1', phone: '0988888888', address: 'Ha Noi', dateOfBirth: "12-02-1985", gender: "Female"},
  {id:1, email:'manager2@gmail.com',name:'manager2', phone: '0988888888', address: 'Ha Noi', dateOfBirth: "12-02-1985", gender: "Male"},
  {id:2, email:'manager3@gmail.com', name:'manager3', phone: '0988888888', address: 'Ha Noi', dateOfBirth: "12-02-1985", gender: "Male"},
  {id:3, email:'manager4@gmail.com', name:'manager4', phone: '0988888888', address: 'Ha Noi', dateOfBirth: "12-02-1985", gender: "Female"},
  {id:4, email:'manager5@gmail.com', name:'manager5', phone: '0988888888', address: 'Ha Noi', dateOfBirth: "12-02-1985", gender: "Male"},
]

@Component({
  selector: 'app-all-manager',
  templateUrl: './all-manager.component.html',
  styleUrls: ['./all-manager.component.css']
})
export class AllManagerComponent implements OnInit {

  displayedColumns = ['id', 'name', 'email', 'phone', 'address', 'dateOfBirth', 'gender', 'option'];
  dataSource = new MatTableDataSource(MANAGERS);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
