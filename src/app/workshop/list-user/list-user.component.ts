import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  category: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.category = this.activatedRoute.snapshot.params['category'];

    this.users = this.userService.getAllUsers();

    this.activatedRoute.params.subscribe((p) => {
      this.category = p['category'];
    });
  }

  getFiltredUsers = () =>
    this.users.filter((user) => user.accountCategory == this.category);

  deleteUser = (idCustomer: number) => {
    this.users = this.users.filter((user) => user.idCustomer != idCustomer);
  };

  showListNb() {
    console.log(
      this.userService.fetchNbInList(this.users, 'accountCategory', 'Customer')
    );
  }
}
