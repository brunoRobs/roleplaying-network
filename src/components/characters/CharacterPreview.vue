<template>
  <div class="character-preview">
    <img class="image" :src="character.image" alt="Personagem" @click="show">
    <div class="infos" @click="show">
      <p class="name">{{ character.name }}</p>
      <p class="class-level">{{ `${character.class} ${character.level}` }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      character: {
        type: Object,
        required: true
      }
    },
    methods: {
      show() {
        this.$emit('show', this.character.cid);
      }
    },
    emits: ['show']
  }
</script>

<style scoped>
  .character-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin: 16px;
  }

  .character-preview * {
    cursor: pointer;
  }

  p {
    width: fit-content;
  }

  .image {
    height: 64px;
    border-radius: 32px;
  }

  .infos {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-direction: column;
  }

  .name {
    font-size: 1em;
  }

  .class-level {
    font-size: .75em;
  }
</style>