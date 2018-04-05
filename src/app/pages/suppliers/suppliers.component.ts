import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  order: any = {};
  public role: any;
  constructor(private router: Router,
              private providerService: ProviderService) { }

  ngOnInit() {
    this.role = JSON.parse(localStorage.getItem('currentUser'))[0]['role'];
    this.showProviders();
    this.showOrders();
  }

  newOrder() {
    const id = $("#providerList").val();
    this.order.idProvider = id;
    this.order.amount = this.order.amount.toString();
    this.providerService.newOrder(this.order).subscribe(
      order => {
        this.showOrders();
      },
      error => this.errorWithService = error
    );
    this.clearOrderForm();
  }

  showProviders() {
    this.providerService.showProviders().subscribe(
      availableItems => {
        this.providersList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  showOrders() {
    this.providerService.showOrders().subscribe(
      availableItems => {
        this.orderList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  clearOrderForm() {
    this.order.amount = null;
    this.order.observations = null;
    $('.nav-tabs a[href="#showOrders"]').tab('show');
  }
}
