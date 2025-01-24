import { Component, inject, OnDestroy, signal } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent{
  constructor(private usersService: UsersService){}
  logout(){
    this.usersService.logout()
  }
}
