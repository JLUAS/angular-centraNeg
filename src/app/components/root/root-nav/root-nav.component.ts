import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrl: './root-nav.component.css'
})
export class RootNavComponent {
constructor(private usersService: UsersService){}
  logout(){
    this.usersService.logout()
  }
}
