VOLTGO ARGENTINA - INSTRUCCIONES PARA PUBLICAR

ARCHIVOS DEL PROYECTO
- index.html: página web con registro del vehículo, mapa nacional, estaciones y capas de rutas nacionales/provinciales.
- api/stations.js: función de Vercel que consulta Open Charge Map sin exponer la clave API en el navegador.

ANTES DE PUBLICAR
1. Crear una cuenta en https://openchargemap.org/
2. Iniciar sesión y entrar en My Profile > My Apps > Register an Application.
3. Copiar la API Key.

PUBLICAR EN VERCEL CON GITHUB
1. Descomprimir VoltGo_Argentina.zip.
2. Crear una cuenta en https://github.com/ e iniciar sesión.
3. Crear un repositorio nuevo llamado voltgo-argentina.
4. Subir el contenido de la carpeta descomprimida. Es importante conservar la carpeta api y el archivo api/stations.js. El archivo index.html debe quedar en la raíz del repositorio.
5. Entrar en https://vercel.com/ y registrarse o iniciar sesión con GitHub.
6. Elegir Add New > Project y seleccionar el repositorio voltgo-argentina.
7. Antes de publicar, agregar en Environment Variables:
   Name: OPENCHARGEMAP_API_KEY
   Value: pegar la clave API de Open Charge Map
   Seleccionar Production, Preview y Development.
8. Presionar Deploy. Vercel generará una dirección web para VoltGo.
9. Si agregás la clave después de publicar, entrá en Deployments y hacé Redeploy.

PUBLICAR CON VERCEL CLI (ALTERNATIVA)
1. Instalar Node.js desde https://nodejs.org/
2. Abrir PowerShell o Terminal dentro de la carpeta del proyecto.
3. Ejecutar: npm install -g vercel
4. Ejecutar: vercel
5. Seguir los pasos para vincular el proyecto.
6. Ejecutar: vercel env add OPENCHARGEMAP_API_KEY y pegar la clave cuando la solicite.
7. Ejecutar: vercel --prod

FUNCIONES INCLUIDAS
- Registro local del auto: marca, modelo, año, batería, autonomía y conector.
- Mapa de Argentina con estaciones registradas en Open Charge Map.
- Filtros de búsqueda por localidad/estación y conector.
- Capas de rutas nacionales y provinciales a partir de OpenStreetMap/Overpass. Acercar el mapa (zoom 6 o superior) para solicitar las rutas del área visible.
- Enlaces para abrir la ubicación de una estación en Google Maps.

IMPORTANTE SOBRE LOS DATOS
- La ficha del auto se guarda en el navegador del dispositivo (localStorage); no es una cuenta en la nube.
- Se mantiene la ficha guardada anteriormente con la clave electroruta_car y se migra a voltgo_car al guardar.
- La autonomía debe ingresarse según la versión exacta del vehículo y puede variar en el uso real.
- La consulta de estaciones depende de Open Charge Map y puede no incluir todos los cargadores del país ni confirmar disponibilidad en tiempo real.
- Las rutas se consultan por sector visible usando Overpass/OpenStreetMap. No se descarga toda la red vial argentina en una sola consulta. Algunas rutas pueden no aparecer si faltan etiquetas en OpenStreetMap o el servicio está temporalmente ocupado.
- No se informa estado de cortes ni transitabilidad oficial. Confirmar el estado de rutas, estaciones, horarios, precios y conectores con los operadores antes de viajar.
- Respetar los límites de uso de Open Charge Map, Overpass y OpenStreetMap.

FUENTES Y ATRIBUCIONES
- Estaciones de carga: Open Charge Map (https://openchargemap.org/)
- Cartografía: © OpenStreetMap contributors (https://www.openstreetmap.org/copyright)
- Rutas: datos colaborativos de OpenStreetMap consultados mediante Overpass API.
