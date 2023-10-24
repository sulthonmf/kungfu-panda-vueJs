<template>
    <li
      :class="{ selected: selected }"
      @click="$emit('clicked', movie)"
    >
      {{ movie.title }}
    </li>
  </template>
  
  <script>
  export default {
    props: ['movie', 'selected']
  };
  </script>
  
  <style scoped>
  li {
    display: flex;
    padding: 5px 0 5px 50px;
    height: 100%;
    width: 100%
  }
  
  .selected {
    background-color: gray;
    cursor: pointer;
  }
  
  li:hover {
    cursor: pointer;
  }
  </style>
  