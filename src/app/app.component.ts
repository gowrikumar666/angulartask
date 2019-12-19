import { Component, OnInit,OnDestroy } from '@angular/core';
import { ServiceService } from './service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements OnDestroy {

  public myInput: any;
  public filteredItem: any = {};
  public items: any; 
  subscription:Subscription;
  messages:any[] = [];

  constructor( private service:ServiceService){

    this.subscription = this.service.getMessage().subscribe(message => {
      if(message){
        this.messages.push(message);
      }else {
        this.messages=[];
      }
    })
  }
  
  ngOnDestroy(){

  this.subscription.unsubscribe();
  }

 
  }
