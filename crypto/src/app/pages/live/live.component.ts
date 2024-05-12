import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmpData, Employee } from '../../shared/models/EmployeeTest';
import { UserData, User } from '../../shared/models/UserTest';
import { keksz } from '../../scripts/api-test';


@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss',
  
})


export class LiveComponent implements OnInit {

  displayedColumns: string[] = ["Id", "FirstName", "LastName", "Email", "Gender", "JobTitle"];
  dataSource: MatTableDataSource<Employee>

  displayedColumns2: string[] = ["Id", "Firstname", "Lastname", "Email", "Level"];
  dataSource2: MatTableDataSource<User>

  constructor() { 
    this.dataSource = new MatTableDataSource<Employee>(EmpData);
    this.dataSource2 = new MatTableDataSource<User>(UserData);
  }

  ngOnInit(): void {
    console.log(keksz())
  }

}

