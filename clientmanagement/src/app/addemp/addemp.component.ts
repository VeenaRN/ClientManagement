import { Component } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Clients } from '../clients';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

  constructor(private clientServ:ClientsService, private router:Router){}
    clients:Clients=new Clients(0,"","","","");
    msg:string="";



    ClientSaving()
    {
      this.clientServ.addNewClient(this.clients).subscribe(data=>{
        console.log(data);
        // this.msg="Clients added";
        this.router.navigate(['/viewall']);
      });
    }
  }

