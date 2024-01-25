import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from 'src/app/user/services/user-services.service';

@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css'],
})
export class UserDetailComponentComponent {
  userId!: number;
  user: any;

  constructor(
    private route: ActivatedRoute,private http: HttpClient,private userService: UserServicesService) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.loadUserDetails();
  }

  loadUserDetails() {
    this.userService.getUserDetails(this.userId).subscribe(
      (data: any) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}
