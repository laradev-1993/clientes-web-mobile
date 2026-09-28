// CREAR LA APLICACIÓN DE VUE: 

//- Importar la aplicación del core de Vue
import { createApp } from "vue";

// - Tener un componente raíz
import App from "./App.vue";

// - Tener un elemento de HTML con un id donde poder montar la app (Ya está en el index el div con id="app").



//-----------------
// Se crea la aplicación:

const app = createApp(App);


// Se monta la aplicación:
app.mount('#app');