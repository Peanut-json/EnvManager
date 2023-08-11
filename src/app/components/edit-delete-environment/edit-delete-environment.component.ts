import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EnvironmentService } from 'src/app/Services/environment.service';
import { Environment } from 'src/app/models/environment.model';

@Component({
  selector: 'app-edit-delete-environment',
  templateUrl: './edit-delete-environment.component.html',
  styleUrls: ['./edit-delete-environment.component.scss']
})
export class EditDeleteEnvironmentComponent implements OnInit{

  environmentDetails: Environment = {
    id: '', 
    status: 1 ,
    title: '',
    name: ''
  }


 constructor (private route: ActivatedRoute , private  environmentService: EnvironmentService ,private router: Router ) {}





  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.environmentService.getEnvironment(id)
          .subscribe({
            next: (responce) => {
              this.environmentDetails = responce;

            }
          })
        }
      }
    })
  }


  updateEnvironment() {
    this.environmentService.updateEnvironment(this.environmentDetails.id , this.environmentDetails)
    .subscribe({
      next: (responce) => {
        this.router.navigate(['Environments']);
      }
    })
  }


  deleteEnvironment(id: string) {
    this.environmentService.deleteEnvironment(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['Environments'])
      }
    });
  }
}
