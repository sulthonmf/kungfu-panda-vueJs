<template>
    <div class="text-detail">
      <h4>
        <strong>{{ title }}</strong>
      </h4>
      <p><strong>Director: </strong>{{ director }}</p>
      <p><strong>Casts: </strong>{{ casts }}</p>
      <p><strong>Genre: </strong>{{ genre }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      director: String,
      casts: String,
      genre: String
    }
  };
  </script>
  
  <style scoped>
  .text-detail {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  </style>
  