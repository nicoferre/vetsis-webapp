import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {CategoryService} from '../../services/category/category.service';

declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public productList = [];
  public categoryList = [];
  public errorWithService: any;
  product: any = {};

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {}

  ngOnInit() {
    this.showProducts();
    this.showCategories();
  }

  showProducts() {
    this.productService.showProducts().subscribe(
      availableItems => {
        this.productList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id)
      .subscribe(
        result => this.showProducts(),
        error => this.errorWithService = error
      );
  }

  newProduct() {
    const id = $("#categoryList").val();
    this.product.idCategory = parseInt(id);
    this.productService.newProduct(this.product).subscribe(
      product => {
        this.showProducts();
      },
      error => this.errorWithService = error
    );
    this.clearProductForm();
  }

  clearProductForm() {
    this.product.id = null;
    this.product.name = null;
    this.product.idCategory = null;
    this.product.quantity = null;
    this.product.price_one = null;
    this.product.price_two = null;
    this.product.price_three = null;
    this.product.price_four = null;
    this.product.minimum_quantity = null;
    $('.nav-tabs a[href="#showProducts"]').tab('show');
  }

  showCategories() {
    this.categoryService.showCategories().subscribe(
      availableItems => {
        this.categoryList = availableItems;
      },
      error => this.errorWithService = error
    );
  }
}
