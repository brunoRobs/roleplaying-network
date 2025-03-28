<template>
  <div id="campaigns" v-if="campaigns.length">
    <div id="list-container">
      <ul id="list">
        <li v-for="(campaign, index) in campaigns.map(campaign => ({ name: campaign.name, id: campaign.id }))"
          @click="select($event, campaign.id)" :class="!index ? 'selected' : ''">
          {{ `${campaign.name.length > 12 ? campaign.name.substring(0, 12) + '...' : campaign.name}` }}
        </li>
      </ul>
    </div>
    <div id="campaign-container">
      <Campaign :campaign="campaign" />
    </div>
  </div>
  <div v-else>
    {{ 'Nenhuma campanha encontrada ' }}
  </div>
</template>

<script>
  import Campaign from './Campaign.vue';

  export default {
    components: { Campaign },
    data() {
      return {
        target: undefined,
        campaignId: undefined,
        campaigns: [
          {
            id: 0,
            name: "Aetheria",
            cover: "...",
            lore: "...",
            dm: "Otávio",
            players: [
              {
                name: "Bruno",
                character: "Phara Dymer"
              },
              {
                name: "Isis",
                character: "Oriana Sardorthien"
              },
              {
                name: "Artur",
                character: "Kyoshi"
              },
              {
                name: "Lucas",
                character: "Dekarios Majestic"
              },
              {
                name: "Ygor",
                character: "Klaus Frostwalker"
              },
              {
                name: "Pedro",
                character: "Randalf"
              },
              {
                name: "Leo",
                character: "Ludwig Von Benhardt"
              },
              {
                name: "Caio",
                character: "Dvarg, o Traidor"
              },
              {
                name: "Caio",
                character: "Dvarg, o Traidor"
              },
              {
                name: "Caio",
                character: "Dvarg, o Traidor"
              },
              {
                name: "Caio",
                character: "Dvarg, o Traidor"
              },
              {
                name: "Caio",
                character: "Dvarg, o Traidor"
              },
              {
                name: "Caio",
                character: "Dvarg, o Traidor"
              },
              {
                name: "Caio",
                character: "Dvarg, o Traidor"
              }
            ]
          }
        ]
      }
    },
    computed: {
      campaign() {
        return this.campaigns.find(campaign => campaign.id === this.campaignId);
      }
    },
    methods: {
      select(event, id) {
        if (this.target) this.target.classList.remove('selected');
        this.target = event.target;
        this.campaignId = id;
        this.target.classList.add('selected');
      }
    },
    beforeMount() {
      if (this.campaigns.length) this.campaignId = this.campaigns[0].id;
    },
    mounted() {
      if (this.campaigns.length) {
        const array = Array.from(document.getElementById('list').children)
        this.target = array.find(item => item.classList.contains('selected'));
      }
    }
  }
</script>

<style scoped>
  #campaigns {
    display: flex;
    width: 100%;
    height: 100%;
  }

  #list-container {
    background: rgb(78, 78, 78);
    width: 17%;
    height: 100%;
    overflow-y: auto;
  }

  #list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 10% 0 10% 10%;
  }

  #list li {
    list-style: none;
    cursor: pointer;
    width: 80%;
    padding: 5% 0 5% 5%;
    border-radius: 8px;
    font-size: 1.5em;
  }

  #list li.selected {
    background-color: rgb(222, 222, 222);
  }

  #list li:hover {
    background-color: rgb(222, 222, 222);
  }

  #campaign-container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 83%;
  }
</style>