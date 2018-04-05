import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IProvider} from '../providers/provider';
import {IOrders} from '../patients/order';
import {ICategory} from './category';

@Injectable()
export class ProviderService {

  headers: Headers;
  options: RequestOptions;

  constructor(private _http: Http) {
  }

  public newCategory(category: string) {
    return this._http
      .post('http://localhost:8088/vetsis/v1/category/addCategory', category)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  public showCategories(): Observable<ICategory[]> {
    return this._http
      .get('http://localhost:8088/vetsis/v1/category/categories')
      .map((response: Response) => <ICategory[]>response.json())
      .catch(this.handleError);
  }

  public deleteCategory(id): Observable<ICategory[]> {
    this.headers = new Headers({ 'category_id': id });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .delete('http://localhost:8088/vetsis/v1/category/deleteCategory', this.options)
      .map((response: Response) => <ICategory[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
