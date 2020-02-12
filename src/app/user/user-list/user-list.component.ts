import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
 
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
 
  deleteUser() {
    this.userService.deleteAll();
  }

}
