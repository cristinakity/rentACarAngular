import { Component, OnInit } from '@angular/core';
import { Carro, CarroService } from './carro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.scss'
})
export class CarroComponent implements OnInit{


  carros: Carro[] = [];
  carro: Carro | null = null;

  constructor(private servicioCarro: CarroService) {}

  ngOnInit(){
    this.obtenerCarros();
  }

  obtenerCarros(){
    this.servicioCarro.getCars().subscribe(
      (data) => {
        this.carros = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editarCarro(carro: Carro) {
    this.carro = carro;
  }

}
