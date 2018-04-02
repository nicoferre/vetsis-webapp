import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../../services/providers/provider.service';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  public providersList = [];
  public orderList = [];
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

    this.providerService.showOrders().subscribe(
      availableItems => {
        this.orderList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  newOrder() {
    const id = $("#providerList").val();
    this.order.idProvider = id;
    this.providerService.newOrder(this.order).subscribe(
      order => {
        console.log(order);
      },
      error => this.errorWithService = error
    );
  }
}
