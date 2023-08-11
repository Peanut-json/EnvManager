
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvironmentService } from 'src/app/Services/environment.service';
import { Environment } from 'src/app/models/environment.model';

@Component({
  selector: 'app-add-environment',
  templateUrl: './add-environment.component.html',
  styleUrls: ['./add-environment.component.scss']
})
export class AddEnvironmentComponent implements OnInit {


  addEnvironmentRequest: Environment = {
    id: '', 
    status: 0 ,
    title: '',
    name: ''
  }


  constructor(private environmentService: EnvironmentService , private router: Router) { }


  ngOnInit(): void {
    
  }

  addEnvironment() {
    this.environmentService.addEnvironment(this.addEnvironmentRequest)
    .subscribe({
      next: (environment) => {
        this.router.navigate(['Environments']) 
      }
    })
  }




}
