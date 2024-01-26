import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from 'src/app/user/services/user-services.service';

@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css'],
})
export class UserDetailComponentComponent {
  userId!: number;
  user: any;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServicesService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.loadUserDetails();
  }

  loadUserDetails() {
    this.loading=true
    this.userService.getUserDetails(this.userId).subscribe(
      (data: any) => {
        this.user = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching users', error);
        this.loading = false;
      }
    );
  }

  moveBack() {
    this.router.navigate(['']);
  }
}
