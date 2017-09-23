import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class CamadaFinalService {

  private ppcEstado: ReplaySubject<any>;
  estadoDoPpc: Observable<any>;

  constructor(private http: Http) {
    this.ppcEstado = new ReplaySubject(1);
    this.estadoDoPpc = this.ppcEstado.asObservable();

    this.getPPC().subscribe();
  }

  getInfo() {
    return this.http.get('https://raw.githubusercontent.com/pedlop/integracao2017/dev/portal-es/src/assets/led/test.json')
    .map((response: Response) => response.json());
  }

  getPPC() {
    return this.http.get('http://rawgit.com/pedlop/integracao2017/dev/portal-es/src/assets/led/ppc-initial.json')
    .map((response: Response) => {
      // const res = response.json();
      this.ppcEstado.next(response.json());
      return response.json();
    }
   );
  }

  getById(id: number) {
    return this.http.get('http://rawgit.com/pedlop/integracao2017/dev/portal-es/src/assets/led/ppc-initial.json/' + id)
    .map((response: Response) => {

    });
  }
}
