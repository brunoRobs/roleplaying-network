<template>
  <div id="header">
    <img id="logo" src="" alt="Logo">
    <search id="search-bar">
      <img src="" alt="Procurar">
      <input type="search" placeholder="Procurar Campanhas...">
    </search>
    <ul id="nav">
      <li>
        <div class="container">
          <router-link class="link" :to="{ name: 'Campaigns' }">Campanhas</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  @keyframes shine {
    from {
      left: -100%;
    }

    to {
      left: 100%;
    }
  }

  #header {
    height: 92px;
    padding: 0 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgb(255, 255, 255);
    border-bottom: 4px solid rgb(0, 0, 0);
  }

  #logo {
    height: inherit;
  }

  #search-bar {
    display: flex;
    gap: 8px;
    border: 2px solid rgb(60, 60, 60);
    border-radius: 16px;
    padding: 8px;
    background-color: rgb(255, 255, 255);
  }

  #search-bar>img {
    height: 2em;
  }

  #search-bar>input {
    padding: 0;
    height: 32px;
    border: none;
    outline: none;
    font-size: 16px;
    background-color: unset;
  }

  #search-bar>input[type="search"]::-webkit-search-cancel-button {
    filter: saturate(0)
  }

  #nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 32px;
  }

  #nav>li {
    margin: 8px 0;
    list-style: none;
    cursor: pointer;
  }

  .link {
    color: inherit;
    text-decoration: none;
  }

  .container {
    position: relative;
    overflow: hidden;
  }

  .container:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg,
        transparent,
        rgba(255, 255, 255, 0.800),
        transparent);
    pointer-events: none;
  }

  .container:hover:before {
    animation: shine .65s forwards;
  }
</style>