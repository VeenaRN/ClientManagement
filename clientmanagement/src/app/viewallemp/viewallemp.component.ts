import { Component, OnInit } from '@angular/core';
import { Clients } from '../clients';
import { ClientsService } from '../clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallemp',
  templateUrl: './viewallemp.component.html',
  styleUrls: ['./viewallemp.component.css']
})
export class ViewallempComponent implements OnInit{

  constructor(private clientServ:ClientsService,private router:Router){}

  allClients:Clients[]=[];

  ngOnInit(): void {

    this.ShowallClients();
    
  }
   getOneClientPage(cno:number)
   {
   
    this.router.navigate(['/oneclient',cno]);
   }

   getModClientPage(cno:number)
   {
   
    this.router.navigate(['/modclient',cno]);
   }

  ShowallClients()
  {
    this.clientServ.showallClients().subscribe(data=>{
    this.allClients=data;
    console.log(data);
    });
  }

  delClient(cno:number)
  {
    if(confirm("Are you sure to delete!")==true)
    {
    this.clientServ.deleteClientBasedOnClientId(cno).subscribe(data=>{
    this.ShowallClients();
  });

  }
  }
}
