import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = '001';
  nombre : string = 'Alejandro';
  edad : number = 10;
  fumador : boolean = true;
  sueldos : number[] = [1200,1500,1800];

  esFumador() : string {
    return this.fumador ? 'Eres fumador' : 'No eres fumador';
  }

  provincias = [
    {id: 0, nombre: 'Sevilla'},
    {id: 1, nombre: 'Huelva'},
    {id: 2, nombre: 'Cádiz'},
    {id: 3, nombre: 'Córdoba'},
    {id: 4, nombre: 'Málaga'},
    {id: 5, nombre: 'Granada'},
    {id: 6, nombre: 'Jaén'},
    {id: 7, nombre: 'Almería'},
    {id: 8, nombre: 'Madrid'},
    {id: 9, nombre: 'Barcelona'},
    {id: 10, nombre: 'Valencia'},
    {id: 11, nombre: 'Alicante'},
    {id: 12, nombre: 'Castellón'},
    {id: 13, nombre: 'Murcia'},
    {id: 14, nombre: 'Zaragoza'},
    {id: 15, nombre: 'Tarragona'},
    {id: 16, nombre: 'Lleida'},
    {id: 17, nombre: 'Girona'},
    {id: 18, nombre: 'Badajoz'},
    {id: 19, nombre: 'Cáceres'},
    {id: 20, nombre: 'La Coruña'},
    {id: 21, nombre: 'Lugo'},
    {id: 22, nombre: 'Orense'},
    {id: 23, nombre: 'Pontevedra'},
    {id: 24, nombre: 'Asturias'},
    {id: 25, nombre: 'Cantabria'},
    {id: 26, nombre: 'Vizcaya'},
    {id: 27, nombre: 'Guipúzcoa'},
    {id: 28, nombre: 'Álava'},
    {id: 29, nombre: 'Navarra'},
    {id: 30, nombre: 'La Rioja'},
    {id: 31, nombre: 'Palencia'},
    {id: 32, nombre: 'Burgos'},
    {id: 33, nombre: 'León'},
    {id: 34, nombre: 'Salamanca'},
    {id: 35, nombre: 'Zamora'},
    {id: 36, nombre: 'Valladolid'},
    {id: 37, nombre: 'Segovia'},
    {id: 38, nombre: 'Soria'},
    {id: 39, nombre: 'Ávila'},
    {id: 40, nombre: 'Toledo'},
    {id: 41, nombre: 'Ciudad Real'},
    {id: 42, nombre: 'Cuenca'},
    {id: 43, nombre: 'Guadalajara'},
    {id: 44, nombre: 'Albacete'},
    {id: 45, nombre: 'Las Palmas'},
    {id: 46, nombre: 'Santa Cruz de Tenerife'},
    {id: 47, nombre: 'Baleares'},
    {id: 48, nombre: 'Ceuta'},
    {id: 49, nombre: 'Melilla'}
  ]

  diHola() {
    alert('Hola');
  }


  cont : number = 0
  incrementar() {
    this.cont++;
  }

  disminuir() {
    this.cont--;
  }
}
