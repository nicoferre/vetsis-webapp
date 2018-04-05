import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
import {AuthenticationService} from '../../services/login/login.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  public categoryList = [];
  public errorWithService: any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.showCategories();
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

}
