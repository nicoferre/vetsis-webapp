import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ICustomer} from './customer';
import {IOrders} from '../patients/order';

@Injectable()
export class CustomerService {
  private _registryHostname;
  headers: Headers;
  options: RequestOptions;
  constructor(private _http: Http) {
    this._registryHostname = 'http://localhost:8088/vetsis/v1/customer/customers';
  }

  public showCustomer(): Observable<ICustomer[]> {
    return this._http
      .get(this._registryHostname)
      .map((response: Response) => <ICustomer[]>response.json())
      .catch(this.handleError);
  }

  public newClient(customer: string) {
    return this._http
      .post('http://localhost:8088/vetsis/v1/customer/addCustomer', customer)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  public deleteCustomer(id): Observable<IOrders[]> {
    this.headers = new Headers({ 'customer_id': id });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .delete('http://localhost:8088/vetsis/v1/customer/deleteCustomer', this.options)
      .map((response: Response) => <IOrders[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
