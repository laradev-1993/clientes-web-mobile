<!-- <script>

</script> -->


<template>
    <nav>
             <!-- Reemplazar la etiqueta <a></a> por <RouterLink> -->

         <RouterLink to="/">TradeRIG</RouterLink>  

        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/chat">Chat Público</RouterLink></li>
            <li><RouterLink to="/ingresar">Ingresar</RouterLink></li>
            <li><RouterLink to="/crear-cuenta">Crear Cuenta</RouterLink></li>
        </ul>
    </nav>

    <main>
         <!-- RouterView es el componente de Vue Router que va a mostrar el componente que corresponde 
          a la ruta que se está ingresando -->

          <RouterView />
        
    </main>

    <footer>
        <p>Lara Esteva | DWN4AV | Clientes Web Mobile</p>
    </footer>
</template>

<!-- <style>

</style> -->