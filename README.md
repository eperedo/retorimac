# Iniciar el proyecto en desarrollo

1. Instalar las dependencias usando npm

```
npm install
```

2. Iniciar el servidor de desarrollo

```
npm start
```

3. Se abrirá automáticamente el browser con la url http://localhost:3000

# Construir el proyecto para producción

1. Instalar las dependencias usando npm

```
npm install
```

2. Iniciar el proceso que genera los archivos estáticos

```
npm run build
```

3. Ahora ya se puede copiar la carpeta **build** a cualquier servidor web.

# Librerias usadas

1. React router para el manejo de las vistas y dar un mejor UX al usuario en caso recargue la página
   en cualquier momento del flujo.

2. Cypress para end to end testing.

# Tareas a realizar

### Crear componentes base:

- Button
- Input
- Checkbox
- Radio button
- Select

### Crear componentes únicos

- Header para mostrar el logo e información de contacto

### Crear componentes de UI

- **Barra de progreso** para el paso 2 y 3 del flujo
- **Rango de montos** para seleccionar el monto a asegurar
- **Tab** para mostrar los tipos de coberturas
- **Product Item** para mostrar el detalle de cada cobertura
- **Price Detail** para mostrar el total a pagar por el seguro

### Crear paginas

- **Home**: incluye validación de formularios y consumo de servicio web vía http.
- **Paso 1 de seguro**: Verificar que la información del carro es guardada correctamente
- **Paso 2 de seguro**: Verificar que el total del seguro se refleje cada vez que se agrega o elimina una cobertura
- **Pagina de agradecimiento**: Obtener información del paso inicial y mostrar el correo del usuario.
