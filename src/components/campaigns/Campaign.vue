<template>
  <div id="campaign">
    <div class="side" left>
      <div id="name-container">
        <p>{{ campaign.name }}</p>
      </div>
      <div id="dm-container">
        <p>{{ campaign.dm }}</p>
      </div>
      <div id="players-container">
        <ul id="players">
          <li v-for="player in campaign.players">
            <p class="player-name">{{ player.name }}</p>
            <p>{{ player.character }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="side" right>
      <img id="cover" :src="campaign.cover" alt="Foto">
      <div id="lore-container">
        <i id="lore">"{{ campaign.lore }}"</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      campaign: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  p {
    word-wrap: break-word;
  }

  #campaign {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background: rgb(180, 71, 52);
    border-radius: 8px;
    height: 90%;
    width: 90%;
  }

  .side {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 40%;
    height: 90%;
  }

  .side[left] {
    gap: 5%;
  }

  #name-container {
    font-size: 2.5em;
    background: rgb(255, 255, 255);
    padding: 8px;
    border-radius: 2px 8px 8px 2px;
    overflow-y: auto;
  }

  #dm-container {
    font-size: 1.5em;
    background: rgb(255, 255, 255);
    padding: 8px;
    border-radius: 2px 8px 8px 2px;
  }

  #players-container {
    height: 60%;
    width: 50%;
    overflow-y: auto;
    direction: rtl;
    background: rgb(255, 255, 255);
    border-radius: 2px 8px 8px 2px;
    padding: 8px;
  }

  #players {
    display: flex;
    flex-direction: column;
    gap: 12px;
    direction: ltr;
    height: fit-content;
  }

  #players li {
    list-style: none;
    width: fit-content;
  }

  .player-name {
    font-size: .75em;
  }

  .side[right] {
    align-items: center;
    gap: 10%;
  }

  #cover {
    height: 216px;
    width: 288px;
  }

  #lore-container {
    height: 25%;
    padding: 8px;
    font-size: .75em;
    text-wrap: pretty;
    overflow-y: auto;
    background: rgb(255, 255, 255);
    border-radius: 8px 2px 2px 8px;
  }

  #lore {
    margin-right: 8px;
  }
</style>