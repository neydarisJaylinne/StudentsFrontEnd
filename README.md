# Proyecto Angular - Gestión Escolar

Este es un proyecto desarrollado en Angular que permite la gestión de relaciones entre alumnos y grados, profesores y estudiantes. El backend de este proyecto se encuentra en otro repositorio llamado `[StudentsBackEnd](https://github.com/neydarisJaylinne/StudentsBackEnd)`, se recomienda verificar que el backend esté en ejecución antes de iniciar la aplicación Angular.

## Características
- **Administración de alumnos y grados**: Asignación de alumnos a distintos grados.
- **Gestión de profesores y estudiantes**: Listado, creación y eliminación de registros.
- **Servicios HTTP**: Comunicación con el backend mediante `HttpClient`.
- **Uso de formularios en Angular**: Para capturar y enviar datos al backend.
- **Uso de directivas `*ngFor` y `[(ngModel)]`** para la manipulación dinámica de datos en el frontend.

## Instalación y Configuración

### Prerrequisitos
Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Pasos para ejecutar el proyecto
1. Clona este repositorio:
   ```sh
   git clone https://github.com/neydarisJaylinne/StudentsFrontEnd
   cd nombre-repo-angular
   ```
2. Instala las dependencias del proyecto:
   ```sh
   npm install
   ```
3. Configura la URL del backend en los servicios dentro de `src/app/services/`.
4. Inicia la aplicación:
   ```sh
   ng serve
   ```
5. Accede a la aplicación en [StudentsFrontEnd](http://localhost:4200).

## Estructura del Proyecto
```
/src
├── app
│   ├── components
│   │   ├── alumnogrades
│   │   │   ├── alumnogrades.component.html
│   │   │   ├── alumnogrades.component.ts
│   │   ├── grades
│   │   │   ├── grades.component.html
│   │   │   ├── grades.component.ts
│   │   ├── professors
│   │   │   ├── professors.component.html
│   │   │   ├── professors.component.ts
│   │   ├── students
│   │   │   ├── students.component.html
│   │   │   ├── students.component.ts
│   ├── models
│   │   ├── StudentGrade.ts
│   │   ├── Grade.ts
│   │   ├── Professor.ts
│   │   ├── Student.ts
│   ├── services
│   │   ├── alumnograde.service.ts
│   │   ├── grade.service.ts
│   │   ├── professor.service.ts
│   │   ├── student.service.ts
```

## Servicios
Cada entidad (Alumnos, Grados, Profesores, Estudiantes) tiene su propio servicio para la comunicación con el backend.

## Contribución
Si deseas contribuir, sigue estos pasos:
1. Realiza un fork del repositorio.
2. Crea una rama (`feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commit.
4. Envía un pull request.

## Licencia
Este proyecto está bajo la licencia MIT.

