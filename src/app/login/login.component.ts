import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('rememberme', { static: false }) rememberCheckBox: ElementRef;
  
  invalid: boolean = false;
  value: any;
  model: any = {};
  loading = false;
  logObj: any =
    {
      "password": "admin",
      "username": "admin"
    };
  public responseStatus: any;


  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login() {
     if (this.logObj == 'admin' && this.logObj == 'admin') {
       this.router.navigateByUrl('/dashboard');
     } /* else {
       alert("Invalid credentials");
    } */
    this.router.navigateByUrl('/dashboard');
    }

}
