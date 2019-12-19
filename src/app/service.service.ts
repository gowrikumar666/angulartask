import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Injectable()
export class ServiceService {

  private subject = new Subject<any>();

constructor(private http:HttpClient) { }

sendMessage(message:string){
  this.subject.next({text: message});

}

clearMessage(){
  this.subject.next()
}

getMessage(): Observable<any> {
  return this.subject.asObservable();
}







}
