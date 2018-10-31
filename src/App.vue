<template>
  <div id="app">
    <header>
        <b-navbar toggleable="md" type="dark" >
            <div class="container-fluid">
                <b-navbar-toggle target="nav_collapse" ></b-navbar-toggle>
                <b-navbar-brand href="/#/">Vue.js PWA</b-navbar-brand>
                <b-collapse is-nav id="nav_collapse">
                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                      <b-nav-item href="/#/foreground-detection">Verificação de Primeiro Plano</b-nav-item>
                      <b-nav-item href="/#/local-notifications">Notificações Locais</b-nav-item>
                      <b-nav-item href="/#/permissions">Permissões</b-nav-item>
                      <b-nav-item href="/#/cam-microphone">Áudio e Vídeo</b-nav-item>
                        <b-nav-item href="/#/recorder">Gravando Vídeo e Áudio</b-nav-item>
                      <b-nav-item href="/#/photo">Tirando Foto</b-nav-item>
                      <b-nav-item href="/#/real-time">Conversa</b-nav-item>

                    </b-navbar-nav>
                  </b-navbar-nav>
                </b-collapse>
            </div>
          </b-navbar>


    </header>
    <main class="text-center">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar{
    background: #41b883;
}

</style>
