> Reto Rimac: https://retorimac.netlify.app/

# Tecnologías usadas

1. React router para el manejo de las vistas y dar un mejor UX al usuario en caso recargue la página
   en cualquier momento del flujo.

2. Cypress para end to end testing.

3. El proyecto usa create-react-app para no tener que dedicarle tiempo a configuración de herramientas
   como webpack, babel, etc.

# Tareas a realizar

### Identificación del sistema de diseño

- Identificar los colores utilizados y configurarlos en el proyecto como variables de css
- Identificar fuente y configurarla en el proyecto
- Exportar assets como imágenes, iconos, etc.

### Crear componentes base:

- Button
- Input
- Checkbox
- Radio button
- Select
- Switch
- Text // TODO

### Crear componentes únicos

- Header para mostrar el logo e información de contacto

### Crear componentes de UI

- **Barra de progreso** para el paso 2 y 3 del flujo
- **Rango de montos** para seleccionar el monto a asegurar
- **Tab** para mostrar los tipos de coberturas
- **Product Item** para mostrar el detalle de cada cobertura
- **Price Detail** para mostrar el total a pagar por el seguro

### Crear paginas

Todas las páginas se dividen en dos componentes. El primero con el sufijo Screen que
es el componente que no contien ninguna lógica de negocio, solo se encarga de recibir props
y de acuerdo a esos valores renderizar la interfaz.
El segundo componente con el sufijo Container es el que contiene la logica de negocio y todo lo relacionado a la implementación de la funcionalidad. Genera y envía state al Screen.
Uno de los beneficios de esta separación es que se puede hacer más sencilla la implementación
de testing unitario o de integración sin recurrir a patrones como stubs o mocks.

- **Home**: incluye validación de formularios y consumo de servicio web vía http.
- **Paso 1 de seguro**: Verificar que la información del carro es guardada correctamente
- **Paso 2 de seguro**: Verificar que el total del seguro se refleje cada vez que se agrega o elimina una cobertura
- **Pagina de agradecimiento**: Obtener información del paso inicial y mostrar el correo del usuario.
