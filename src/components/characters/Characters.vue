<template>
  <div id="characters" v-if="characters.length">
    <div id="characters-container">
      <div class="character" v-for="character in characters" :key="character.cid">
        <CharacterPreview :character="character" />
      </div>
    </div>
  </div>
  <div v-else>
    {{ 'Nenhum personagem encontrado' }}
  </div>
</template>

<script>
  import CharacterPreview from './CharacterPreview.vue';

  export default {
    components: { CharacterPreview },
    data() {
      return {
        characters: [
          {
            cid: 0,
            name: 'Phara Dymer',
            characterClass: 'Warlock',
            level: 7,
            image: ''
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #characters {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  #characters-container {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(auto-fit, auto);
    max-height: 80%;
    width: 80%;
    overflow-y: auto;
    border-radius: 32px;
    background-color: rgb(255, 255, 255, .75);

  }

  .character {
    height: fit-content;
  }

  #characters-container::-webkit-scrollbar {
    display: none;
  }
</style>