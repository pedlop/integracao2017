import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { environment } from './../../../../environments/environment';

@Injectable()
export class CamadaFinalService {

  private readonly url = environment.api.url;

  private ppcEstado: ReplaySubject<any>;
  estadoDoPpc: Observable<any>;

  constructor(private http: HttpClient) {
    this.ppcEstado = new ReplaySubject(1);
    this.estadoDoPpc = this.ppcEstado.asObservable();

    this.getPPC().subscribe();
  }

  getInfo() {
    return this.http.get(this.url)
    .map((response: Response) => response.json());
  }

  getPPC() {
    return this.http.get(this.url)
    .map((response) => {
      this.ppcEstado.next(response);
      return response;
    }
   );
  }

}
