import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { UserServicesService } from 'src/app/user/services/user-services.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css'],
})
export class UserListComponentComponent {
 users: any[] = [];
  currentPage: number = 1;
  totalPages!: number;
  loading: boolean = false;
  searchText: string = '';
  user_search?: user;

  constructor(private userService: UserServicesService, private route: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers(this.currentPage).subscribe(
      (data: any) => {
        this.users = data.data;
        this.totalPages = data.total_pages;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching users', error);
        this.loading = false;
      }
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  fromChildSearch(event: string) {
    this.searchText = event;
    this.userService.getUserDetails(Number(this.searchText)).subscribe(
      (data: any) => {
        this.user_search = data;
      },
      (error) => {
        this.user_search = undefined;
        console.error('Error fetching users', error);
      }
    );
    console.log(event);
  }

  navigateToDetail(id: string) {
    this.route.navigate([`user/${id}`]);
    console.log(id);
  }
}
