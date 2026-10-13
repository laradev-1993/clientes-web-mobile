// ACÁ SE DEFINEN LAS RUTAS

// 1° Importar las 2 funciones de vue router:
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PublicChat from "../views/PublicChat.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

// 2° Definir la lista de ruta (un array - c/ objeto representa una ruta y sus características):

const routes = [
    {
        path: '/',
        component: Home,
    },
     {
        path: '/chat',
        component: PublicChat,
    },
     {
        path: '/ingresar',
        component: Login,
    },
     {
        path: '/crear-cuenta',
        component: Register,
    },
];

// 3° Crear el router con createRouter().

const router = createRouter({
    routes,                      // --> Pasamos la lista de las rutas
    history: createWebHistory(),   // --> Indica como Vue Router debe manejar el historial de la aplicación.

});

// 4° Exportar el router para que los otros archivos lo puedan utilizar:
export default router;