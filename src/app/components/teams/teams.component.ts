import { TeamsService } from './../../services/teams.service';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/services/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  constructor(private service: TeamsService) { }

  ngOnInit(): void {
    this.service.getTeams().subscribe(data => this.teams = data);
  }

}
