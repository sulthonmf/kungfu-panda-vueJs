<template>
  <img class="poster" :src="poster" />
</template>

<script>
export default {
  props: ["poster"],
};
</script>

<style scoped>
.poster {
  border-radius: 5px;
  width: 100%;
}
</style>
