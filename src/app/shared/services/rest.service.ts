import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, ResponseContentType, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpEvent } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';

@Injectable()
export class RestService {
  private headers: HttpHeaders;
  private options: RequestOptions;

  constructor(private http: HttpClient) {
    this.headers = this.getHeaders();
  }

  getHeaders() {
    return new HttpHeaders()
       .set('Accept', 'application/json');
  }

  getByUrl(url: string, headers?: HttpHeaders) {
    return this.http.get(url, { headers: headers || this.getHeaders() }).catch(this.handleError);
  }
  private handleError(error: Response | any) {
    console.log(error.status);
    return Observable.throw(error);
  }

  removeRootElement(obj, removeEmpty: boolean) {
    let numKeys = 0,
      rootKey;

    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) { continue; }
      rootKey = key;
      numKeys++;
      if (numKeys === 2) { break; }
    }

    if (numKeys === 1) {
      const newObj = {},
        rootObj = obj[rootKey];

      if (typeof rootObj === 'object') {
        for (const key in rootObj) {
          if (rootObj.hasOwnProperty(key)) {
            if (removeEmpty && rootObj[key] !== undefined && rootObj[key] !== '') {
              if (typeof rootObj[key] === 'object') {
                newObj[key] = this.removeRootElement(rootObj[key], false);
              } else {
                newObj[key] = rootObj[key];
              }

            } else if (!removeEmpty) {
              newObj[key] = rootObj[key];
            }
          }
        }
        return newObj;
      }
    }
    return obj;
  }
}
