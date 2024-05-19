import { Component, inject} from '@angular/core';
import { UserDAOService } from '../../shared/services/user-dao.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  private crud = inject(UserDAOService);
  userName: string = ''
  firstName: string = ''
  lastName: string = ''
  email: string = ''


  constructor(private authService: AuthService, private router: Router) {

    const userId = this.authService.loggedInId()
    const loggedUser = this.crud.getById(userId)

    loggedUser.subscribe(user => {
      this.userName = user[0].Username
      this.firstName = user[0].Name.Firstname
      this.lastName = user[0].Name.Lastname
      this.email = user[0].Email
    })

    //this.crud.getAll().subscribe(user =>{console.log(user)})

  }


  onDelete() {this.authService.del().catch(error => {
    console.error(error);
    alert(error.message);
  });
  this.router.navigate(['/login']);}


  ngOnInit(): void{}

}
