import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CamadaFinalService {

  constructor(private http: Http) { }

  getInfo() {
    return this.http.get('https://raw.githubusercontent.com/pedlop/integracao2017/dev/portal-es/src/assets/led/test.json')
    .map((response: Response) => response.json());
  }
}
