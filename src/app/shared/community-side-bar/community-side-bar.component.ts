import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/community/community.service';
import { CommunityModel } from 'src/app/community/community-response';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-community-side-bar',
  templateUrl: './community-side-bar.component.html',
  styleUrls: ['./community-side-bar.component.css']
})
export class CommunitySideBarComponent implements OnInit {
  communities: Array<CommunityModel> = [];
  displayViewAll: boolean;

constructor(private communityService: CommunityService) { 

    this.communityService.getAllCommunities().subscribe(data => {
      if (data.length > 3) {
        this.communities = data;//.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.communities = data;
      }
    });

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // constructor(private communityService: CommunityService) {
   
  // }


}
