import { Consumer } from './../src/app/consumer';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumerService {
  private url: string = 'http://localhost:5000/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  getConsumers(): Observable<Consumer[]> {
    return this.http.get<Consumer[]>(this.url + '/users');
  }

  getConsumer(id): Observable<Consumer> {
    return this.http.get<Consumer>(this.url + '/users/' + id);
  }

  createConsumer(consumer) {
    this.http
      .post(this.url + '/users', JSON.stringify(consumer), this.httpOptions)
      .subscribe(
        (response) => {
          this.router.navigate(['/consumers']);
        },
        (error) => alert(error)
      );
  }

  updateConsumer(id, consumer: any) {
    console.log(consumer);
    consumer.id = id;
    this.http
      .put(this.url + '/users/' + id,JSON.stringify(consumer),this.httpOptions)
      .subscribe(
        (response) => {
          this.router.navigate(['/consumers']);
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteConsumer(id) {
    this.http.delete(this.url + '/users/' + id).subscribe(
      (response) => this.router.navigate(['/consumers']),
      (error) => alert(error)
    );
  }
}
