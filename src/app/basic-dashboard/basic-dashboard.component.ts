import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-dashboard',
  templateUrl: './basic-dashboard.component.html',
  styleUrls: ['./basic-dashboard.component.scss']
})
export class BasicDashboardComponent implements OnInit {

  status = false;
  constructor() { }

  ngOnInit(): void {
  }
addToggle()
{
  this.status = !this.status;       
}

}
