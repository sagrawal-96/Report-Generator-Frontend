import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  content?: string;
  encounterDetail?: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.content="Welcome to Dasboard"
  }

  getEncounter() : any {
    this.userService.getEncounterDetail().subscribe({
      next: data => {
        this.encounterDetail = data;
      },
      error: err => {
        this.encounterDetail = JSON.parse(err.error).message;
      }
    });
  }
}
