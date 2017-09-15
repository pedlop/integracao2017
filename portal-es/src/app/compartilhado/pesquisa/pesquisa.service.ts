import { Injectable } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PesquisaService {
  devUrl: string = 'http://rawgit.com/pedlop/integracao2017/dev/portal-es/src/assets/led/ppc-initial.json';
  queryUrl: string = '?callback=JSONP-CALLBACK';

  wikipediaUrl: string  = 'http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK';

  constructor(private http: Http, private jsonp: Jsonp) { }

  pesquisa(termos: Observable<string>) {
    return termos.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(termo => this.pesquisaEntrada(termo));
  }

  pesquisaEntrada(termo: string) {
    return this.http.get(this.devUrl + this.queryUrl + termo)
      .map(res => res.json());

  }

  search(term: string) {
    let search = new URLSearchParams();
    search.set('callback', 'JSONP_CALLBACK');
    search.set('action', 'openSearch');
    search.set('search', term);
    search.set('dataType', 'jsonp');
    search.set('format', 'json');

    return this.jsonp.get(this.devUrl, {search})
    .map(response => response.json()[1]);

  }
}
