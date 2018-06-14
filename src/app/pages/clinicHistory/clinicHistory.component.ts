import {Component, OnInit} from '@angular/core';
import {ClinicHistoryService} from '../../services/clinicHistory/clinicHistory.service';
import {PatientService} from '../../services/patients/patient.service';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-clinic-history',
  templateUrl: './clinicHistory.component.html',
  styleUrls: ['./clinicHistory.component.scss']
})
export class ClinicHistoryComponent implements OnInit {

  clinicHistory: any = {};
  public clinicHistoryList = [];
  public numberClinicHistory;
  public errorWithService: any;
  public petList = [];

  constructor(private clinicHistoryService: ClinicHistoryService,
              private  patientService: PatientService) { }

  ngOnInit() {
    this.showClinicHistories();
    this.showPets('');
  }

  newClinicHistory() {
    this.clinicHistory.idPet = parseInt($("#petList").val());
    this.clinicHistory.date = Date.now();
    // this.patientService.newPet(this.pet).subscribe(
    //   pet => {
    //     this.showPets();
    //   },
    //   error => this.errorWithService = error
    // );
    // this.clearPetForm();
  }

  showPets(id) {
    this.patientService.showPets(id).subscribe(
      availableItems => {
        this.petList = availableItems;
      },
      error => this.errorWithService = error
    );
  }

  showClinicHistories() {
    this.clinicHistoryService.showClinicHistories().subscribe(
      availableItems => {
        this.clinicHistoryList = availableItems;
        this.numberClinicHistory = this.clinicHistoryList.length + 1;
      },
      error => this.errorWithService = error
    );
  }
  deleteClinicHistory(id) {
    this.clinicHistoryService.deleteClinicHistory(id)
      .subscribe(
        result => this.showClinicHistories(),
        error => this.errorWithService = error
      );
    $('.nav-tabs a[href="#showPets"]').tab('show');
  }

}
