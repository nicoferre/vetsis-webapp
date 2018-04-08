import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IBreed} from './breed';

@Injectable()
export class BreedService {

  headers: Headers;
  options: RequestOptions;

  constructor(private _http: Http) {
  }

  public newBreed(category: string) {
    return this._http
      .post('http://localhost:8088/vetsis/v1/breed/addBreed', category)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  public showBreed(): Observable<IBreed[]> {
    return this._http
      .get('http://localhost:8088/vetsis/v1/breed/breeds')
      .map((response: Response) => <IBreed[]>response.json())
      .catch(this.handleError);
  }

  public deleteBreed(id): Observable<IBreed[]> {
    this.headers = new Headers({ 'breed_id': id });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .delete('http://localhost:8088/vetsis/v1/breed/deleteBreed', this.options)
      .map((response: Response) => <IBreed[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
