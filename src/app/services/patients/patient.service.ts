import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IPatient} from './patient';
import {ITurn} from '../turns/turns';

@Injectable()
export class PatientService {
  headers: Headers;
  options: RequestOptions;

  constructor(private _http: Http) {
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

  public showPets(id): Observable<IPatient[]> {
    if (id) {
      this.headers = new Headers({ 'pet_id': id });
      this.options = new RequestOptions({ headers: this.headers });
      return this._http
        .get('http://localhost:8088/vetsis/v1/pet/pets', this.options)
        .map((response: Response) => <ITurn[]>response.json())
        .catch(this.handleError);
    } else {
      return this._http
        .get('http://localhost:8088/vetsis/v1/pet/pets')
        .map((response: Response) => <IPatient[]>response.json())
        .catch(this.handleError);
    }
  }

  public deletePet(id): Observable<IPatient[]> {
    this.headers = new Headers({ 'pet_id': id });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .delete('http://localhost:8088/vetsis/v1/pet/deletePet', this.options)
      .map((response: Response) => <IPatient[]>response.json())
      .catch(this.handleError);
  }

  public newPet(pet) {
    return this._http
      .post('http://localhost:8088/vetsis/v1/pet/addPet', pet)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }
}
