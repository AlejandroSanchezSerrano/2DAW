# Chuleta Angular

## Introducción a Angular
Angular es un framework de desarrollo para construir aplicaciones web dinámicas y de una sola página (SPA). Utiliza TypeScript como lenguaje principal y sigue el patrón de diseño MVC (Modelo-Vista-Controlador).

## Instalación
Para instalar Angular CLI, usa el siguiente comando:
```bash
npm install -g @angular/cli
```

Para crear un nuevo proyecto Angular:
```bash
ng new nombre-proyecto
cd nombre-proyecto
ng serve
```

## Estructura de un Proyecto Angular
- `src/`: Contiene el código fuente de la aplicación.
    - `app/`: Contiene los componentes, servicios y módulos de la aplicación.
    - `assets/`: Archivos estáticos como imágenes y estilos.
    - `environments/`: Configuraciones para diferentes entornos (desarrollo, producción).

## Componentes
Los componentes son la base de cualquier aplicación Angular. Un componente consta de:
- Un archivo TypeScript (`.ts`) que define la lógica.
- Un archivo HTML (`.html`) que define la vista.
- Un archivo CSS (`.css`) que define los estilos.

### Crear un Componente
Para generar un nuevo componente, usa el comando:
```bash
ng generate component nombre-componente
```

### Ejemplo de Componente
```typescript
// app/nombre-componente/nombre-componente.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-nombre-componente',
    templateUrl: './nombre-componente.component.html',
    styleUrls: ['./nombre-componente.component.css']
})
export class NombreComponenteComponent {
    titulo = 'Hola Mundo';
}
```

```html
<!-- app/nombre-componente/nombre-componente.component.html -->
<h1>{{ titulo }}</h1>
```

## Módulos
Los módulos son contenedores que agrupan componentes, directivas, servicios y otros módulos. El módulo principal es `AppModule`.

### Crear un Módulo
Para generar un nuevo módulo, usa el comando:
```bash
ng generate module nombre-modulo
```

### Ejemplo de Módulo
```typescript
// app/nombre-modulo/nombre-modulo.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';

@NgModule({
    declarations: [NombreComponenteComponent],
    imports: [CommonModule],
    exports: [NombreComponenteComponent]
})
export class NombreModuloModule { }
```

## Servicios
Los servicios en Angular se utilizan para compartir datos y lógica entre diferentes componentes.

### Crear un Servicio
Para generar un nuevo servicio, usa el comando:
```bash
ng generate service nombre-servicio
```

### Ejemplo de Servicio
```typescript
// app/nombre-servicio.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NombreServicioService {
    constructor() { }

    obtenerDatos() {
        return ['dato1', 'dato2', 'dato3'];
    }
}
```

## Enrutamiento
El enrutamiento permite navegar entre diferentes vistas o componentes.

### Configurar Enrutamiento
```typescript
// app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';

const routes: Routes = [
    { path: 'ruta', component: NombreComponenteComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Directivas
Las directivas son instrucciones en el DOM que le dicen a Angular cómo comportarse.

### Ejemplo de Directiva
```typescript
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appResaltar]'
})
export class ResaltarDirective {
    constructor(el: ElementRef, renderer: Renderer2) {
        renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}
```

## Pipes
Los pipes transforman datos en plantillas.

### Ejemplo de Pipe
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    transform(value: string): string {
        return value.toUpperCase();
    }
}
```

## Formularios
Angular soporta formularios reactivos y basados en plantillas.

### Ejemplo de Formulario Reactivo
```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-formulario',
    template: `
        <form [formGroup]="formulario">
            <label for="nombre">Nombre:</label>
            <input id="nombre" formControlName="nombre">
        </form>
    `
})
export class FormularioComponent {
    formulario = new FormGroup({
        nombre: new FormControl('')
    });
}
```

## HTTP Client
Para realizar peticiones HTTP, Angular proporciona el módulo `HttpClientModule`.

### Ejemplo de Petición HTTP
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DatosService {
    constructor(private http: HttpClient) { }

    obtenerDatos() {
        return this.http.get('https://api.example.com/datos');
    }
}
```

## Conclusión
Esta chuleta cubre los conceptos básicos y avanzados de Angular, incluyendo componentes, módulos, servicios, enrutamiento, directivas, pipes, formularios y peticiones HTTP. Para más información, consulta la [documentación oficial de Angular](https://angular.io/docs).
