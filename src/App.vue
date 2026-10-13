<!-- <script>

</script> -->


<template>
    <nav class="flex items-center gap-8 p-6 bg-indigo-950 text-white shadow-md">

             <!-- Reemplazar la etiqueta <a></a> por <RouterLink> -->

         <RouterLink class="text-lg" to="/">TradeRIG</RouterLink>  

        <ul class="flex gap-4">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/chat">Chat Público</RouterLink></li>
            <li><RouterLink to="/ingresar">Ingresar</RouterLink></li>
            <li><RouterLink to="/crear-cuenta">Crear Cuenta</RouterLink></li>
        </ul>
    </nav>

    <main class="container mx-auto py-4">

         <!-- RouterView es el componente de Vue Router que va a mostrar el componente que corresponde 
          a la ruta que se está ingresando -->

        <RouterView />
        
    </main>

    <footer class="bg-slate-950 text-white h-25 flex justify-center items-center">
        <p>Lara Esteva | DWN4AV | Clientes Web Mobile</p>
    </footer>
</template>

<!-- <style>

</style> -->