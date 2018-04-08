import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ISpecies} from './species';

@Injectable()
export class SpeciesService {

  headers: Headers;
  options: RequestOptions;

  constructor(private _http: Http) {
  }

  public newSpecies(category: string) {
    return this._http
      .post('http://localhost:8088/vetsis/v1/species/addSpecies', category)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  public showSpecies(): Observable<ISpecies[]> {
    return this._http
      .get('http://localhost:8088/vetsis/v1/species/species')
      .map((response: Response) => <ISpecies[]>response.json())
      .catch(this.handleError);
  }

  public deleteSpecies(id): Observable<ISpecies[]> {
    this.headers = new Headers({ 'species_id': id });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .delete('http://localhost:8088/vetsis/v1/species/deleteSpecies', this.options)
      .map((response: Response) => <ISpecies[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
