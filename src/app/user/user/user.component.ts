import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();
  submitted = false;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
  }
 
  newCustomer(): void {
    this.submitted = false;
    this.user = new User();
  }
 
  save() {
    this.userService.createUser(this.user);
    this.user = new User();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
