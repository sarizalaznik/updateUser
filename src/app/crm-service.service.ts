import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class CrmServiceService {

  private apiUrl = 'https://orgd47d8762.api.crm4.dynamics.com/api/data/v9.2';//'https://orgd47d8762.api.crm4.dynamics.com/api/data/v9.2'; 
  private body: string = "";
  constructor(private http: HttpClient) {}

  patch(params: any): Promise<any> {
    this.body = JSON.stringify(params);
    return this.http
      .patch(
        "https://localhost:44329/api/Contact",
        this.body,
        {
          headers: { 'Content-Type': 'application/json'
          },
        }
      )
      .toPromise()
      .catch(error => {
        console.log(error);
        return error;
      })

  }
  postData(data: any) {
    debugger;
    return this.http.patch('https://localhost:44329/api/Contact', data);
  }
  updateRecord(recordId: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/Contacts(${recordId})`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer <your-access-token>' // Replace with your OAuth access token
    });

    return this.http.patch<any>(url, data, { headers });
  }
}
