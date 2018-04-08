import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customers/customer.service';
import {PatientService} from '../../services/patients/patient.service';
import {SpeciesService} from '../../services/species/species.service';
import {BreedService} from '../../services/breed/breed.service';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  public role: any;
  public customerList = [];
  public petList = [];
  public errorWithService: any;
  public numberPet;
  pet: any = {};
  breed: any = {};
  public speciesList = [];
  public breedList = [];

  constructor(private router: Router,
              private customerService: CustomerService,
              private speciesService: SpeciesService,
              private  patientService: PatientService,
              private breedService: BreedService) { }

  ngOnInit() {
    this.showCustomer();
    this.showSpecies();
    this.showPets();
    this.numberPet = this.petList.length + 1;
  }

  newPet() {
    this.pet.idSpecies = parseInt($("#speciesList").val());
    this.pet.idBreed = parseInt($("#breedList").val());
    this.pet.id = this.numberPet;
    this.pet.idCustomer = parseInt($("#customerList").val());
    this.pet.gender = parseInt($("#gender").val());
    console.info(this.pet);

    this.patientService.newPet(this.pet).subscribe(
      pet => {
        this.showPets();
      },
      error => this.errorWithService = error
    );
    this.clearPetForm();
  }

  showSpecies() {
    this.speciesService.showSpecies().subscribe(
      availableItems => {
        this.speciesList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  onSelectedSpecies() {
    this.showBreed($("#speciesList").val());
  }

  showBreed(id) {
    this.breedService.showBreed(id).subscribe(
      availableItems => {
        this.breedList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  showPets() {
    this.patientService.showPets().subscribe(
      availableItems => {
        this.petList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  showCustomer() {
    this.customerService.showCustomer().subscribe(
      availableItems => {
        this.customerList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  clearPetForm() {
    this.pet.name = null;
    this.pet.birthdayDate = null;
    $('.nav-tabs a[href="#showPets"]').tab('show');
  }
}
