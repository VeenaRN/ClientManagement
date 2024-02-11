import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'clientmanagement';
navbar1:boolean=true;
navbar2:boolean=false;

  constructor(private router:Router){}


  ngDoCheck(): void {
    let url=this.router.url;
      console.log(url);
      // if(url=="/login")
      if (url === "/login" || url=== "/" || url==="/welcome")
      {
        this.navbar1=false;
        this.navbar2=true;
      }
      else{
        this.navbar1=true;
        this.navbar2=false;
      }
  }
}
