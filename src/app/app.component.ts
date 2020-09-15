import { Component, OnInit } from '@angular/core';
import { HelloService } from './services/helloservice'

@Component({
  selector: 'app-root',
  template: `<div>Hello {{message}}</div>`,
})
export class AppComponent implements OnInit {
  message: string;

  constructor(private helloService: HelloService){}
  ngOnInit(): void {
    this.helloService.getMessage().subscribe(msg => this.message = msg);    
  }
  

  
}
