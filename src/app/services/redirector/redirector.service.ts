import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Link } from 'src/app/models/link.model';

@Injectable({
  providedIn: 'root'
})
export class RedirectorService {
  public linkData: Link;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //private endpointBackend = `${environment.linkService}/algo`



  constructor(private http: HttpClient) {

  }

  private agregarAuthorizationHeader() {
    return {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'

    }
  }


  getLink(linkId: string): Observable<Link> {
    const endpoint = `${environment.linkService}/${linkId}`;
    const options = {
      headers: this.agregarAuthorizationHeader(),
    };
    return this.http.get<Link>(endpoint, options).pipe(catchError(this.handleError));
  }




  handleError(error) {
    return throwError(error.message || "Server Error")

  }


}
