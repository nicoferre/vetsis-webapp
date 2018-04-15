import {Injectable} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IProvider} from './provider';
import {IOrders} from '../patients/order';

@Injectable()
export class ProviderService {

  headers: Headers;
  options: RequestOptions;
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
      .map((response: Response) => <IOrders[]>response.json())
      .catch(this.handleError);
  }

  public deleteProvider(id): Observable<IProvider[]> {
    this.headers = new Headers({ 'provider_id': id });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .delete('http://localhost:8088/vetsis/v1/provider/deleteProvider', this.options)
      .map((response: Response) => <IProvider[]>response.json())
      .catch(this.handleError);
  }

  public deleteOrder(id): Observable<IOrders[]> {
    this.headers = new Headers({ 'order_id': id });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .delete('http://localhost:8088/vetsis/v1/provider/deleteOrder', this.options)
      .map((response: Response) => <IOrders[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
