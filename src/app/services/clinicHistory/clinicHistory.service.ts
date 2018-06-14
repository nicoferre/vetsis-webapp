import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IClinicHistory} from './clinicHistory';

@Injectable()
export class ClinicHistoryService {

  headers: Headers;
  options: RequestOptions;

  constructor(private _http: Http) {
  }

  public newClinicHistory(clinicHistory: string) {
    return this._http
      .post('http://localhost:8088/vetsis/v1/clinicHistory/addClinicHistory', clinicHistory)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  public showClinicHistories(): Observable<IClinicHistory[]> {
    return this._http
      .get('http://localhost:8088/vetsis/v1/clinicHistory/clinicHistories')
      .map((response: Response) => <IClinicHistory[]>response.json())
      .catch(this.handleError);
  }

  public deleteClinicHistory(id): Observable<IClinicHistory[]> {
    this.headers = new Headers({ 'history_id': id });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .delete('http://localhost:8088/vetsis/v1/clinicHistory/deleteClinicHistory', this.options)
      .map((response: Response) => <IClinicHistory[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
