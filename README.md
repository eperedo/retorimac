> Reto Rimac: https://retorimac.netlify.app/

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

# Testing

1. Instalar dependencias (no es necesario si ya se ha hecho en otro paso)

```
npm install
```

2. Iniciar el servidor de desarrollo

```
npm start
```

3. Ejecutar pruebas con cypress

```
npm run test:e2e
```

Puedes ver un [demo de la ejecución de los tests aquí](https://user-images.githubusercontent.com/461124/120838871-ed473880-c52d-11eb-822b-a55a64e0497f.mp4)

# Construir el proyecto para producción

1. Instalar las dependencias usando npm

```
npm install
```

2. Iniciar el proceso que genera los archivos estáticos

```
npm run build
```

3. Se va a generar una carpeta **build** con todos los estáticos (js, css, html, imágenes, etc) que pueden
   ser desplegados en cualquier servidor web.
