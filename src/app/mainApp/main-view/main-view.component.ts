import { Component, OnInit } from '@angular/core';
import { EnvStatusChange } from 'src/app/models/environment.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  environments:EnvStatusChange [] = [{
    statusId: 0,
    description: "Avalible Enviroments",
    environments: []
  },
  {
    statusId: 1,
    description: "Currently In-Use",
    environments: []
  },
  {
    statusId: 2,
    description: "Unavalible",
    environments: []
  }]





 constructor() {

 }


  ngOnInit(): void {

    this.environments.push()


  }

}
