import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Carro {
  _id: string;
  codigo: string;
  placa: string;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private apiUrl = 'http://localhost:3000/carro';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.apiUrl);
  }

  deleteCar(carId: string): Observable<void> {
    const url = `${this.apiUrl}/${carId}`;
    return this.http.delete<void>(url);
  }

  updateCar(carId: string, updatedCar: Carro): Observable<Carro> {
    const url = `${this.apiUrl}/${carId}`;
    return this.http.put<Carro>(url, updatedCar);
  }
}
