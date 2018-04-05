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
  provider: any = {};
  public role: any;
  constructor(private router: Router,
              private providerService: ProviderService) { }

  ngOnInit() {
    this.showProviders();
    this.showOrders();
  }

  newProvider() {
    this.providerService.newProvider(this.provider).subscribe(
      provider => {
        this.showProviders();
      },
      error => this.errorWithService = error
    );
    this.clearProviderForm();
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

  clearProviderForm() {
    this.provider.name = null;
    this.provider.address = null;
    this.provider.cellPhone = null;
    $('.nav-tabs a[href="#showProviders"]').tab('show');
  }

  deleteProvider(id) {
    this.providerService.deleteProvider(id)
      .subscribe(
        result => this.showProviders(),
        error => this.errorWithService = error
    );
    $('.nav-tabs a[href="#showProviders"]').tab('show');
  }

  deleteOrder(id) {
    this.providerService.deleteOrder(id)
      .subscribe(
        result => this.showOrders(),
        error => this.errorWithService = error
      );
    $('.nav-tabs a[href="#showOrders"]').tab('show');
  }
}
