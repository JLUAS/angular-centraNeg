import { Component, OnInit } from '@angular/core';
import { AuthenticateUser } from '../../../models/User';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponentUser implements OnInit{
  constructor(private usersService: UsersService, private router:Router){ }
  authenticateUser:AuthenticateUser= {email:'', authCode:''}
  isAuth:boolean=false
  isTimeoutPassed:boolean=false
  errMessage:string=""
  ngOnInit(): void {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      this.authenticateUser.email = storedEmail;
    }
    this.usersService.isAuthenticated(this.authenticateUser.email).subscribe(
      (res: any) => {
        if (res.isAuthenticated) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      },
      (err) => {
        console.error(err)
      }
    )
    setTimeout(() => {
      if(!this.isAuth){
        this.isTimeoutPassed = false;
        this.router.navigate(['/autenticar'])
      }
      if(this.isAuth){
        this.isTimeoutPassed=true
      }
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
