import { Component, OnInit } from '@angular/core';
import { Pop } from 'src/app/class/pop';
import { PopService } from 'src/app/service/pop.service';

@Component({
  selector: 'app-pop-form',
  templateUrl: './pop-form.component.html',
  styleUrls: ['./pop-form.component.css']
})
export class PopFormComponent implements OnInit {
  
  title = "Form of Users";
  description = "Page to creat Users."; 

  pop: Pop = new Pop();
  submitted = false;
 
  constructor(private userService: PopService) { }
 
  ngOnInit() {
  }
 
  save() {
    this.userService.createPop(this.pop);
    this.pop = new Pop();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
