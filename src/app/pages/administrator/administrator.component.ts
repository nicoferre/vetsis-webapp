import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  public categoryList = [];
  public errorWithService: any;
  category: any = {};
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.showCategories();
  }

  newCategory() {
    this.categoryService.newCategory(this.category).subscribe(
      category => {
        this.showCategories();
      },
      error => this.errorWithService = error
    );
    this.clearCategoryForm();
  }

  showCategories() {
    this.categoryService.showCategories().subscribe(
      availableItems => {
        this.categoryList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  deleteCategory(id) {
    this.categoryService.deleteCategory(id)
      .subscribe(
        result => this.showCategories(),
        error => this.errorWithService = error
      );
  }

  clearCategoryForm() {
    this.category.name = null;
    $('.nav-tabs a[href="#showCategories"]').tab('show');
  }
}
