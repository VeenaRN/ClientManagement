import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { AddempComponent } from './addemp/addemp.component';
import { ViewallempComponent } from './viewallemp/viewallemp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OneclientComponent } from './oneclient/oneclient.component';
import { ModifyClientComponent } from './modify-client/modify-client.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { OneprojectComponent } from './oneproject/oneproject.component';
import { ViewalltasksComponent } from './viewalltasks/viewalltasks.component';
import { ClientmeetingsComponent } from './clientmeetings/clientmeetings.component';
import { AddmeetingComponent } from './addmeeting/addmeeting.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    ViewallempComponent,
    OneclientComponent,
    ModifyClientComponent,
    ProjectsComponent,
    TasksComponent,
    AddprojectComponent,
    OneprojectComponent,
    ViewalltasksComponent,
    ClientmeetingsComponent,
    AddmeetingComponent,
    HomeComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
