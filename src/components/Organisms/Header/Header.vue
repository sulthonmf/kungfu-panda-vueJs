<template>
  <div class="header">
    <h1>
      <font-awesome-icon class="icon-camera" icon="video" />
      <strong>{{ title }}</strong>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Movie Catalog",
    };
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #000000;
  width: 100%;
  height: 20%;
}
.icon-camera {
    padding-right: 10px;
}
</style>
