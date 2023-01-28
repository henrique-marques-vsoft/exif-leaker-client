<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>
      <router-link to="/">
        <div class="link-container">
          <p>EXIF Leaker</p>
        </div>
      </router-link>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts">
  export default {
    data () {
      return {}
    },
  }
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
}
.link-container {
  display: flex;
  justify-content: space-between;
  padding-right: 1%;
  align-items: center;
  transition: 500ms;
  width: 12%;
  height: 100vh;
  color: goldenrod;
}
.link-container:hover {
  color: black;
}
</style>