
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { Clients } from '../clients';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  msg: string = "";
  clientsinfo: Clients[] = [];

  constructor(private clientServ: ClientsService, private router: Router) {
    sessionStorage.clear();
  }

  ngOnInit(): void {
    this.clientServ.showallClients().subscribe(data => {
      this.clientsinfo = data;
    });
  }

  UserCheck(frmLogin: any) {
    if (frmLogin.valid) {
      if (this.username === "Admin" && this.password === "admin@123") {
        sessionStorage.setItem('adminuser', this.username);
        this.router.navigate(['/viewall']);
      } else {
        if (!this.username || !this.password) {
          this.msg = "Please enter both username and password!.";
          return;
        }
        const client = this.clientsinfo.find(c => c.email === this.username && c.password === this.password);
        if (client) {
          sessionStorage.setItem('user', client.clientname);
          sessionStorage.setItem('cid', client.id.toString());
          this.router.navigate(['/welcome']);
        } else {
         this.msg="Invalid username or password*";
        }
      }
    }
  }
}






   