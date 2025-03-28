<template>
  <div id="character">
    <div id="character-container">
      <div class="side" left>
        <img id="image" :src="image" alt="Personagem">
        <div class="info" v-for="(value, key) in character">
          <p class="title">{{ key[0].toUpperCase() + key.substring(1) }}</p>
          <p class="data">{{ value }}</p>
        </div>
      </div>
      <div class="side" right>
        <div id="chart-container">
          <canvas id="chart" />
        </div>
        <div id="buttons">
          <button @click="showSheet">Show sheet</button>
          <button @click="downloadSheet">Download sheet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import chart from '@/plugins/chart';
  import api from '@/plugins/axios';

  export default {
    props: ['cid'],
    data() {
      return {
        attributes: undefined,
        image: undefined,
        character: undefined
      }
    },
    methods: {
      async showSheet() {
        const name = this.character.name.split(' ')
          .map(word => word[0].toLowerCase() + word.substring(1))
          .join('_');
        const response = await api.get(`/sheets/show/${name}`, { responseType: 'blob' });
        const url = URL.createObjectURL(response.data)
        window.open(url, '_blank');
      },
      async downloadSheet() {
        const name = this.character.name.split(' ')
          .map(word => word[0].toLowerCase() + word.substring(1))
          .join('_');
        const response = await api.get(`/sheets/download/${name}`, { responseType: 'blob' });
        const url = URL.createObjectURL(response.data);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${name}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    },
    beforeMount() {
      const { attributes, image, ...character } = {
        attributes: {
          strength: 10,
          dexterity: 12,
          constitution: 14,
          intellingence: 15,
          wisdom: 16,
          charisma: 18
        },
        image: '',
        name: 'Phara Dymer',
        class: 'Warlock',
        level: 7,
        race: 'Tiefling',
      };
      this.attributes = attributes;
      this.image = image;
      this.character = character;
    },
    mounted() {
      chart(document.getElementById('chart').getContext('2d'), this.attributes)
    }
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

  .side[right] {
    width: fit-content;
    align-items: flex-end;
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

  canvas {
    width: 360px !important;
    height: auto !important;
  }

  #buttons {
    display: flex;
    gap: 12px;
  }
</style>