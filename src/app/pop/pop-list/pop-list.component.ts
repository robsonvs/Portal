import { Component, OnInit, Input } from '@angular/core';
import { Pop } from 'src/app/class/Pop';
import { PopService } from 'src/app/service/pop.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pop-list',
  templateUrl: './pop-list.component.html',
  styleUrls: ['./pop-list.component.css']
})
export class PopListComponent implements OnInit {

  title = "List of Users";
  description = "Page to list Users."; 
  
  @Input() pop: Pop;
  pops: Pop[];
  submitted = false;
 
  constructor(private popService: PopService) { }
 
  ngOnInit() {
    this.listPops();
  }
 
  listPops() {
    this.popService.listPops().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(pops => {
      this.pops = pops;
    });
  }
  
  formPop(pop: Pop): void {
    this.submitted = true;
    this.pop = pop;
  }

  updatePop(pop: Pop) {
    this.popService
      .updatePop(this.pop.id, pop)
      .catch(err => console.log(err));
  }
 
  deletePop(pop: Pop) {
    this.popService
      .deletePop(pop.id)
      .catch(err => console.log(err));
  }

}
