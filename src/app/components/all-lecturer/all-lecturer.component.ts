import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export class Lecturer{
  id: string;
  email : string;
  name: string;
  phoneNumber : string;
  address: string;
  dateOfBirth: Date;
  gender: string;
}

export const LECTURERS = [
  {id:0, email:'lecturer1@gmail.com', name:'lecturer1', phone: '0999999999', address: 'Ha Noi', dateOfBirth: "12-02-1978", gender: "Female"},
  {id:1, email:'lecturer2@gmail.com', name:'lecturer2', phone: '0999999999', address: 'Ha Noi', dateOfBirth: "12-02-1978", gender: "Male"},
  {id:2, email:'lecturer3@gmail.com', name:'lecturer3', phone: '0999999999', address: 'Ha Noi', dateOfBirth: "12-02-1978", gender: "Male"},
  {id:3, email:'lecturer4@gmail.com', name:'lecturer4', phone: '0999999999', address: 'Ha Noi', dateOfBirth: "12-02-1978", gender: "Female"},
  {id:4, email:'lecturer5@gmail.com', name:'lecturer5', phone: '0999999999', address: 'Ha Noi', dateOfBirth: "12-02-1978", gender: "Male"},
]

@Component({
  selector: 'app-all-lecturer',
  templateUrl: './all-lecturer.component.html',
  styleUrls: ['./all-lecturer.component.css']
})
export class AllLecturerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'dateOfBirth', 'gender'];
  dataSource = new MatTableDataSource(LECTURERS);

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
