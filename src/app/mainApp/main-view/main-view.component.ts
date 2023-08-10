import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from 'src/app/Services/environment.service';
import { EnvStatusChange, Environment } from 'src/app/models/environment.model';
import { CdkDragDrop,moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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





 constructor(private environmentService: EnvironmentService) { }


  ngOnInit(): void {
    this.environmentService.getAllEnvironments()
    .subscribe({
      next: (environments) => {

        splitEnvironments(environments , this.environments);
      }
    })
  }

  drop(event: CdkDragDrop<EnvStatusChange,EnvStatusChange, Environment>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.environments, event.previousIndex, event.currentIndex);
    } else {

      // Here is how you get the employee
      let environmentId = event.item.data.id;

      // And the Status ID
      let statusId = event.container.data.statusId;

      this.environmentService. // impliment later changeStatus // (employeeId, statusId)
        .subscribe();

      transferArrayItem(
        event.previousContainer.data.employees,
        event.container.data.employees,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  
}
