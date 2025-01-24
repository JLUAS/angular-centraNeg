import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthenticateUser } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent implements OnInit{
  authenticateUser:AuthenticateUser= {email:'', authCode:''}
  isAuth: boolean | undefined;
  errMessage: string="";
  isTimeoutPassed: boolean | undefined;
  constructor(private usersService:UsersService, private router:Router){}
  ngOnInit(): void {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      this.authenticateUser.email = storedEmail;
    }
    this.usersService.isAuthenticated(this.authenticateUser.email).subscribe(
      (res: any) => {
        if (res.isAuthenticated) {
          this.isAuth = true;
          this.router.navigate(['/dashboard'])
        } else {
          this.router.navigate(['/autenticar'])
          this.isAuth = false;
        }
      },
      (err) => {
        console.error(err)
      }
    )
    setTimeout(() => {
      if(!this.isAuth)this.isTimeoutPassed = false;
    }, 2000);
  }
  authenticateUserFun(){
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      this.authenticateUser.email = storedEmail;
    }
    this.usersService.authenticateUser(this.authenticateUser).subscribe(
      (res: any) => {
        if (res.isAuthenticated) {
          this.isAuth = true;
          this.router.navigate(['/dashboard'])
        } else {
          this.isAuth = false;
        }
      },
      (err) => {
        this.errMessage="Codigo incorrecto"
        console.error(err)
      }
    )
  }
}
