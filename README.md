# Reto técnico con Serverless Framework

## Descarga e instalación de paquetes
```sh
npm install
```

## Despliegue de la arquitectura
Ejecute el siguiente comando, reemplazando sus credenciales IAM
```sh
serverless config credentials --provider aws --key YOUKEY --secret YOUSECRET
```
Luego ejecutar:
```sh
serverless deploy
```
Este comando además, generará la documentación con el uso de Swagger


## Despliegue local
Para la ejecución en un entorno local
```sh
npm start
```

## Pruebas Unitarias
```sh
npm test
```