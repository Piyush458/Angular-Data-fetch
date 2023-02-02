import { Component, OnInit } from '@angular/core';
// import { serve } from './server.service';
import { ServerService } from './server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang_test';
  users: any;
  // protected users$: Observable<IUser[]>;
//  users$!: IUser[];
   constructor(public userservice: ServerService) {}
 
   ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users = res;
      console.log(res)
     });
   }
}

