import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export class Student{
  id: number;
  email : string;
  name: string;
  phone : string;
  address: string;
  dateOfBirth: string;
  gender: string;
}


export const STUDENTS : Student[] = [
  {id:0, email:'anh@gmail.com', name:'Nguyen Thi Anh Anh', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Female"},
  {id:1, email:'hieu@gmail.com',name:'Tran Trung Hieu', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Male"},
  {id:2, email:'duy@gmail.com', name:'Trinh Van Duy', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Male"},
  {id:3, email:'thu@gmail.com', name:'Le Hong Thu', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Female"},
  {id:4, email:'ha@gmail.com', name:'Nguyen Thanh Ha', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Male"},
  {id:5, email:'hai@gmail.com', name:'Vu Thanh Hai', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Male"},
  {id:6, email:'linh@gmail.com', name:'Luyen Thi Thuy Linh', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Female"},
  {id:7, email:'hoa@gmail.com', name:'Nguyen Thi Hoa', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Female"},
  {id:8, email:'hao@gmail.com', name:'Ngo Thuy Hao', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Female"},
  {id:9, email:'ngoc@gmail.com', name:'Do Hong Ngoc', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Female"},
  {id:10, email:'an@gmail.com', name:'Do Thi Anh', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Female"},
  {id:11, email:'huong@gmail.com', name:'Hoang Thi Huong', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Female"},
  {id:12, email:'duc@gmail.com', name:'Nguyen Anh Duc', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Male"},
  {id:13, email:'phuc@gmail.com', name:'Nguyen Van Phuc', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Male"},
  {id:14, email:'lan@gmail.com', name:'Pham Thi Lan', phone: '0985858585', address: 'Ha Noi', dateOfBirth: "12-02-1998", gender: "Female"}, 
];



@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {
  displayedColumns = ['id', 'name', 'email', 'phone', 'address', 'dateOfBirth', 'gender', 'option'];
  dataSource = new MatTableDataSource(STUDENTS);


  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource);
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
