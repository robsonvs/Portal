import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/class/User';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  title = "Form of Users";
  description = "Page to creat Users.";

  user: User = new User();
  submitted = false;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
  }
 
  // newUser(): void {
  //   this.submitted = false;
  //   this.user = new User();
  // }
 
  save() {
    this.userService.createUser(this.user);
    this.user = new User();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
