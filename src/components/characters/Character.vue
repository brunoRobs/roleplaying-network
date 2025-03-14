<template>
  <div :key="$route.params.cid">
    {{ cid }}
  </div>
</template>

<script>
  export default {
    props: ['cid']
  }
</script>

<style></style>