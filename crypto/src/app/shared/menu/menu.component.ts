import { Component, OnInit, AfterViewInit, EventEmitter, Output, Input} from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})


export class MenuComponent implements OnInit, AfterViewInit {

  @Input() currentPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
  }

  close(logout?: boolean) {
    this.onCloseSidenav.emit(true);
    /* 
    if (logout === true) {
      this.onLogout.emit(logout);
    }
    */
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login');
    }).catch(error => {
      console.error(error);
    });
  }
}
