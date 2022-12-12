import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/service/resources.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private resourcesService: ResourcesService, private router: Router) {
  }

  ngOnInit() {
    this.resourcesService.getData().subscribe(response => {
      
      let potterhead = localStorage.getItem("potterhead");
      if(!potterhead) {
        localStorage.setItem("potterhead", JSON.stringify(response));
      }

    })
    setTimeout(() => {
      this.router.navigate(['movies']);
    }, 1500);
  }
  

}
