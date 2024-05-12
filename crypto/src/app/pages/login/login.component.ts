import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent implements OnInit, OnDestroy {

  email = new FormControl('');
  password = new FormControl('');


  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.loading = true;
    
    this.authService.login(this.email.value as string, this.password.value as string).then(cred => {
      console.log(cred);
      this.loading = false;
      setTimeout(() => 
        {
            this.router.navigate(['/main']);
        },
        20);
    }).catch(error => {
      alert(error.message);
      console.error(error);
      this.loading = false;
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void { }

}
