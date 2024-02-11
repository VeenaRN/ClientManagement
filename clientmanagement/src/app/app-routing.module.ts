import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { ViewallempComponent } from './viewallemp/viewallemp.component';
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

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"addemp",component:AddempComponent},
  {path:"viewall",component:ViewallempComponent},
  {path:"oneclient/:id",component:OneclientComponent},
  {path:"modclient/:id",component:ModifyClientComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"tasks",component:TasksComponent},
  {path:"addproject",component:AddprojectComponent},
  {path:"oneproject/:id",component:OneprojectComponent},
  {path:"viewalltasks",component:ViewalltasksComponent},
  {path:"clientmeetings",component:ClientmeetingsComponent},
  {path:"addmeet",component:AddmeetingComponent},
  {path:"login",component:LoginComponent},
  { path:"projects/:projectId/viewalltasks",component:ViewalltasksComponent},
  {path:"welcome",component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
