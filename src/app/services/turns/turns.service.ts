import {Injectable} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ITurn} from './turns';

@Injectable()
export class TurnsService {

  headers: Headers;
  options: RequestOptions;
  constructor(private _http: Http) {
  }

  public showTurns(): Observable<ITurn[]> {
    return this._http
      .get('http://localhost:8088/vetsis/v1/turn/turns')
      .map((response: Response) => <ITurn[]>response.json())
      .catch(this.handleError);
  }

  public newTurn(turn: string) {
    return this._http
      .post('http://localhost:8088/vetsis/v1/turn/addTurn', turn)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  public deleteTurn(id): Observable<ITurn[]> {
    this.headers = new Headers({ 'turn_id': id });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .delete('http://localhost:8088/vetsis/v1/turn/deleteTurn', this.options)
      .map((response: Response) => <ITurn[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
