import { Component } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  leaders: Leader[] = [];

  selectedLeader: Leader | undefined;
  
  constructor(private leaderService: LeaderService) {}
  
  ngOnInit(){
    this.leaders = this.leaderService.getLeaders();
  }
  
  onSelect(leader: Leader){
    this.selectedLeader = leader;
  }

}
