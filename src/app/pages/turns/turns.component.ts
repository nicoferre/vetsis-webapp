import {Component, OnInit} from '@angular/core';
import {TurnsService} from '../../services/turns/turns.service';
import {CustomerService} from '../../services/customers/customer.service';
import {PatientService} from '../../services/patients/patient.service';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.scss']
})
export class TurnsComponent implements OnInit {

  public turnList = [];
  public customerList = [];
  public petList = [];
  public errorWithService: any;
  turn: any = {};

  constructor(private customerService: CustomerService,
              private  patientService: PatientService,
              private turnsService: TurnsService) {}

  ngOnInit() {
    this.showTurns();
    this.showCustomer();
  }

  showTurns() {
    this.turnsService.showTurns().subscribe(
      availableItems => {
        this.turnList = availableItems;
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

  showPets(id) {
    this.patientService.showPets(id).subscribe(
      availableItems => {
        this.petList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  onSelectedCustomer() {
    this.showPets($("#customerList").val());
  }

  newTurn() {
    this.turn.idCustomer = parseInt($("#customerList").val());
    this.turn.idPet = parseInt($("#petList").val());
    this.turnsService.newTurn(this.turn).subscribe(
      order => {
        this.showTurns();
      },
      error => this.errorWithService = error
    );
    this.clearForm();
  }

  deleteTurn(id) {
    this.turnsService.deleteTurn(id)
      .subscribe(
        result => this.showTurns(),
        error => this.errorWithService = error
      );
    $('.nav-tabs a[href="#showPets"]').tab('show');
  }

  clearForm() {
    this.turn.date = null;
    $('.nav-tabs a[href="#showTurns"]').tab('show');
  }
}
