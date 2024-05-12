import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/UserTest';
import { UserDAOService } from '../../shared/services/user-dao.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private authService: AuthService, private userDAOService: UserDAOService, private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then(cred => {
      console.log(cred);
      const user: User = {
        Id: cred.user?.uid as string,
        Email: this.signUpForm.get('email')?.value as string,
        Username: (this.signUpForm.get('email')?.value as string).split('@')[0],
        Name: {
          Firstname: this.signUpForm.get('name.firstname')?.value as string,
          Lastname: this.signUpForm.get('name.lastname')?.value as string
        }
      };
      this.userDAOService.create(user).then(_ => {
        console.log('User added successfully.');
        alert("Sikeres regisztráció");
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
      alert(error.message);
    });
  }

  goBack() {
    this.location.back();
  }

}