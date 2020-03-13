import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { map } from 'rxjs/operators';

import { UserService } from 'src/app/service/user-service';
import { User } from 'src/app/class/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = "List of Users";
  description = "Page content the list of Users.";
 
  @Input() user: User;
  users: User[];
  submitted = false;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.getUserList();
  }
 
  getUserList() {
    this.userService.getUserList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(users => {
      this.users = users;
    });
  }
  
  formUser(user: User): void {
    this.submitted = true;
    this.user = user;
  }

  updateUser(user: User) {
    this.userService
      .updateUser(this.user.id, user)
      .catch(err => console.log(err));
  }
 
  deleteUser(user: User) {
    this.userService
      .deleteUser(user.id)
      .catch(err => console.log(err));
  }

  deleteAllUser() {
    this.userService.deleteAll();
  }

}
