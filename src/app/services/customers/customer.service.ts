import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ICustomer} from './customer';


@Injectable()
export class CustomerService {
  private _registryHostname;

  constructor(private _http: Http) {
    this._registryHostname = 'http://localhost:8088/vetsis/v1/customer/customers';
  }

  public showCustomer(): Observable<ICustomer[]> {
    return this._http
      .get(this._registryHostname)
      .map((response: Response) => <ICustomer[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
