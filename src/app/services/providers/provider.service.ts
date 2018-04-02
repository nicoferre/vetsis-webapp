import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IProvider} from './provider';
import {IOrders} from '../patients/order';

@Injectable()
export class ProviderService {

  constructor(private _http: Http) {
  }

  public showProviders(): Observable<IProvider[]> {
    return this._http
      .get('http://localhost:8088/vetsis/v1/provider/providers')
      .map((response: Response) => <IProvider[]>response.json())
      .catch(this.handleError);
  }

  public newProvider(provider: string) {
    return this._http
      .post('http://localhost:8088/vetsis/v1/provider/addProvider', provider)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  public newOrder(order: string) {
    return this._http
      .post('http://localhost:8088/vetsis/v1/provider/newOrder', order)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  public showOrders(): Observable<IOrders[]> {
    return this._http
      .get('http://localhost:8088/vetsis/v1/provider/orders')
      .map((response: Response) => <IProvider[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
