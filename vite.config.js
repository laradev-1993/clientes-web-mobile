import vue from '@vitejs/plugin-vue';
import tailwind from '@tailwindcss/vite';


// Se invocan los Plugins en el array de plugins
export default{
    plugins : [vue(), tailwind()],
}