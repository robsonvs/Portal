import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/User';
import { UserService } from '../user-service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
  }
 
  updateActive(isActive: boolean) {
    this.userService
      .updateUser(this.user.id, { active: isActive })
      .catch(err => console.log(err));
  }
 
  deleteCustomer() {
    this.userService
      .deleteUser(this.user.id)
      .catch(err => console.log(err));
  }

}
