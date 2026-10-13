// CREAR LA APLICACIÓN DE VUE: 

//- Importar la aplicación del core de Vue
import { createApp } from "vue";

// - Tener un componente raíz
import App from "./App.vue";
import router from "./router/router.js";
import './style.css';


// - Tener un elemento de HTML con un id donde poder montar la app (Ya está en el index el div con id="app").

//-----------------
// Se crea la aplicación:
const app = createApp(App);

// Agregar el router a Vue:
app.use(router);

// Se monta la aplicación:
app.mount('#app');