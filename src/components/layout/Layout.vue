<template>
  <div id="layout">
    <header>
      <Header />
    </header>
    <main>
      <Content />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Content from './Content.vue';
  import Footer from './Footer.vue';

  export default {
    components: { Header, Content, Footer }
  }
</script>

<style scoped>
  #layout {
    display: grid;
    grid-template-areas:
      "header header header"
      "main main main"
      "footer footer footer";
    grid-template-rows: 96px 1fr 96px;
    min-height: 100vh;
  }

  #layout>header {
    position: sticky;
    top: 0;
    grid-area: header;
  }

  #layout>main {
    grid-area: main;
  }

  #layout>footer {
    grid-area: footer;
  }
</style>