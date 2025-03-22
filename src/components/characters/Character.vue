<script setup>
  const { attributes, image, ...character } = {}
</script>

<template>
  <div id="character">
    <div id="character-container">
      <div class="side" left>
        <img id="image" :src="image" alt="Personagem">
        <div class="info" v-for="(value, key) in character">
          <p class="title">{{ key }}</p>
          <p class="data">{{ value }}</p>
        </div>
      </div>
      <div class="side" right>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['cid']
  }
</script>

<style scoped>
  #character {
    height: 80%;
    width: 80%;
  }

  #character-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rgb(255, 255, 255, .5);
    border-radius: 32px;
  }

  .side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    min-height: 60%;
    width: 288px;
  }

  #image {
    height: 256px;
    border-radius: 128px;
  }

  .info {
    align-self: flex-start;
  }

  .info .title {
    font-size: .75em;
  }
</style>