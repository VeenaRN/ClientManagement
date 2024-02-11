import { Component, OnInit } from '@angular/core';
import { ClientmeetingsService } from '../clientmeetings.service';
import { Router } from '@angular/router';
import { Clientmeetings } from '../clientmeetings';

@Component({
  selector: 'app-clientmeetings',
  templateUrl: './clientmeetings.component.html',
  styleUrls: ['./clientmeetings.component.css']
})
export class ClientmeetingsComponent implements OnInit{

  constructor(private meetingServ:ClientmeetingsService,private router:Router){}

  allClientmeetings:Clientmeetings[]=[];

  ngOnInit(): void {
      
    this.ShowallMeetings();
  }

  ShowallMeetings()
  {
    this.meetingServ.showallMeetings().subscribe(data=>{
      this.allClientmeetings=data;
      console.log(data);
    });
  }

}
