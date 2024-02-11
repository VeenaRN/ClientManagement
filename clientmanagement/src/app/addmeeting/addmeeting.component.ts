import { Component, OnInit } from '@angular/core';
import { ClientmeetingsService } from '../clientmeetings.service';
import { Clientmeetings } from '../clientmeetings';
import { Router } from '@angular/router';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.css']
})
export class AddmeetingComponent implements OnInit {
  clients:any[]=[];
  msg:string="";
  clientmeeting:Clientmeetings= new Clientmeetings();


  constructor(private meetingServ:ClientmeetingsService,private router:Router,private clientServ:ClientsService){}

ngOnInit(): void {
    this.getClientNames();
}

getClientNames(): void {
  this.clientServ.getClients()
    .subscribe(clients => {
      this.clients = clients;
    });
  }
  
Meetadd()
{
  this.meetingServ. addMeeting(this.clientmeeting).subscribe(data=>{
    console.log(data);
    
    this.msg="Meeting added Successfully...."
    // this.router.navigate(['/home']);
  });
}
}
