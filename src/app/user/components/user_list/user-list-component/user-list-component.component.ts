import { Component } from '@angular/core';
import { UserServicesService } from 'src/app/user/services/user-services.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css'],
})
export class UserListComponentComponent {
  users: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  loading: boolean = false;

  constructor(private userService: UserServicesService) {}

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
}
