# React + Vite
# Aplicación de Login con React.js

Este proyecto es una aplicación web de inicio de sesión construida utilizando la biblioteca de JavaScript React. Permite a los usuarios crear una cuenta y acceder a la aplicación utilizando sus credenciales.

## Tabla de Contenidos

- [Características Principales](#características-principales)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Preview](#Preview)

## Características Principales

* **Registro de Usuarios:** Permite a nuevos usuarios crear una cuenta proporcionando un correo electrónico y una contraseña.
* **Inicio de Sesión:** Los usuarios registrados pueden acceder a la aplicación ingresando su correo electrónico y contraseña.
* **Validación de Formularios:** Se implementan validaciones en el cliente para asegurar que los datos ingresados por el usuario sean correctos.
* **Manejo de Errores:** Se muestran mensajes de error claros en caso de credenciales incorrectas o problemas de conexión.
* **Redirección (Opcional):** Redirección a rutas del usuario protegidas mandando a llamar a los componentes del Private Router .

## Tecnologías Utilizadas

* **React Router DOM:** Para definir las rutas hacia los componentes.
* **Context API:** Para la gestión del estado global de la aplicación.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

* **Node.js:** (Asegúrate de tener una versión LTS - Long Term Support) Puedes descargarlo desde [https://nodejs.org/](https://nodejs.org/).
* **Vite:** Herramienta de construcción de próxima generación que proporciona un entorno de desarrollo extremadamente rápido y optimizado para producción.
* **npm** (se instala con Node.js) o **yarn** (puedes instalarlo con `npm install -g yarn`).
* **Un editor de código:** Como VS Code, Sublime Text, Atom, etc.

## Instalación

1.  Clona este repositorio a tu máquina local:
    ```bash
    git clone  [repostitorio git]
    cd [nombre del repositorio]
    ```

2.  Instala las dependencias del proyecto. Utiliza `npm` o `yarn` según tu preferencia:

    **Con npm:**
    ```bash
    npm install
    ```

## Ejecución

Para ejecutar la aplicación en modo de desarrollo:

**Con npm:**
```bash
npm run dev


3.  Probar funcionalidad de la aplicación:
    - Abre tu navegador y ve a `http://localhost:5173/` para ver la aplicación en acción.
    - Ingresa las  credenciales de usuario predeterminadas  Usuario : ernest_almazan@outlook.com  Contraseña : Xag20596
    - Si intentas iniciar sesión con credenciales incorrectas, recibirás un mensaje de error.


## Preview : https://dev-almazan-app-login-react.netlify.app/