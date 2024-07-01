# Pasos para iniciar el proyecto

## 1. Configurar el archivo .env con las variables de entorno necesarias.

## 2. Configurar e iniciar el proyecto del backend relacionado.

## 3. Se deben instalar las dependencias necesarias.

```
npm i
npx expo install --check
```

## para iniciar la aplicación:

```
npx expo start --clear
```

## Para próximas ocasiones, no es necesario agregar "--clear"

```
npx expo start
```

## Consideraciones

- El proyecto se debe ejecutar con Android
- Si anteriormente se ha utilizado el emulador, entonces este iniciará donde se haya dejado por última vez
- Es recomendable cerrar todas las aplicaciones abiertas y solamente abrir la app "Expo"

## En caso de error

En caso de un error durante el arranque o el uso de la aplicación, se puede detener el proceso presionando "CTRL + C" repetidamente en la consola donde se haya iniciado la aplicación. Luego, se debe cerrar las ventanas de la emulación y la línea de comandos generada. Con esto realizado, se puede volver a iniciar con `npx expo start`.
