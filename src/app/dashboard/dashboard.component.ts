import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from './../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,private service: ServiceService) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigateByUrl('/login')
  }
  
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.service.sendMessage('Message from dashboard Component to App Component!');
  }
  
  clearMessages(): void {
    // clear messages
    this.service.clearMessage();
  }

}
