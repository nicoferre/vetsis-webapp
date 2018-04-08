import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IProduct} from './product';

@Injectable()
export class ProductService {
  headers: Headers;
  options: RequestOptions;

  constructor(private _http: Http) {
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

  public showProducts(): Observable<IProduct[]> {
    return this._http
      .get('http://localhost:8088/vetsis/v1/product/products')
      .map((response: Response) => <IProduct[]>response.json())
      .catch(this.handleError);
  }

  public deleteProduct(id): Observable<IProduct[]> {
    this.headers = new Headers({ 'product_id': id });
    this.options = new RequestOptions({ headers: this.headers });
    return this._http
      .delete('http://localhost:8088/vetsis/v1/product/deleteProduct', this.options)
      .map((response: Response) => <IProduct[]>response.json())
      .catch(this.handleError);
  }

  public newProduct(product: string) {
    return this._http
      .post('http://localhost:8088/vetsis/v1/product/addProduct', product)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }
}
