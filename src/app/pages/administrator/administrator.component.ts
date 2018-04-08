import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
import {SpeciesService} from '../../services/species/species.service';
import {BreedService} from '../../services/breed/breed.service';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  public categoryList = [];
  public speciesList = [];
  public breedList = [];
  public errorWithService: any;
  category: any = {};
  species: any = {};
  breed: any = {};
  constructor(private categoryService: CategoryService,
              private speciesService: SpeciesService,
              private breedService: BreedService) { }

  ngOnInit() {
    this.showCategories();
    this.showSpecies();
    this.showBreed();
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

  newSpecies() {
    this.speciesService.newSpecies(this.species).subscribe(
      category => {
        this.showSpecies();
      },
      error => this.errorWithService = error
    );
    this.clearSpeciesForm();
  }

  showSpecies() {
    this.speciesService.showSpecies().subscribe(
      availableItems => {
        this.speciesList = availableItems;
      },
      error => this.errorWithService = error
    );
  }
  deleteSpecies(id) {
    this.speciesService.deleteSpecies(id)
      .subscribe(
        result => this.showSpecies(),
        error => this.errorWithService = error
      );
  }

  clearSpeciesForm() {
    this.species.name = null;
    $('.nav-tabs a[href="#species"]').tab('show');
  }

  clearCategoryForm() {
    this.category.name = null;
    $('.nav-tabs a[href="#categories"]').tab('show');
  }

  newBreed() {
    const id = $("#speciesList").val();
    this.breed.idSpecies = parseInt(id);
    this.breedService.newBreed(this.breed).subscribe(
      breed => {
        this.showBreed();
      },
      error => this.errorWithService = error
    );
    this.clearBreedForm();
  }

  showBreed() {
    this.breedService.showBreed().subscribe(
      availableItems => {
        this.breedList = availableItems;
      },
      error => this.errorWithService = error
    );
  }
  deleteBreed(id) {
    this.breedService.deleteBreed(id)
      .subscribe(
        result => this.showBreed(),
        error => this.errorWithService = error
      );
  }

  clearBreedForm() {
    this.breed.name = null;
    $('.nav-tabs a[href="#breed"]').tab('show');
  }
}
