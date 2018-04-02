import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../../services/providers/provider.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  public providersList = [];
  public errorWithService: any;
  provider: any = {};
  order: any = {};
  public role: any;
  constructor(private router: Router,
              private providerService: ProviderService) { }

  ngOnInit() {
    this.role = JSON.parse(localStorage.getItem('currentUser'))[0]['role'];
    this.providerService.showProviders().subscribe(
      availableItems => {
        this.providersList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  newOrder(id) {
    console.info(id);
    this.providerService.newOrder(this.order).subscribe(
      client => {
        console.log(client);
      },
      error => this.errorWithService = error
    );
  }
}
