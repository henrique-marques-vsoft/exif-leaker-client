<template>
  <TopBar />
  <div class="body">
    <div class="presentation-container">
      <h1>Online EXIF Reader</h1>
      <p>Exif data, or metadata, is information embedded in a photo file that includes details about the device used to take the photo, such as the make and model of the camera or phone, as well as other information like the date the photo was taken and the camera's settings.</p>
      <div class="link-container">
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="input-container">
      <input class="input-file" type="file" name="input-file" id="input-file">
      <v-btn>
        Button
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import TopBar from '@/components/TopBar.vue'
</script>

<style scoped>
  a {
    color: goldenrod;
    text-decoration: none;
    transition: 300ms;
  }
  a:hover {
    color: white;
  }
  .body{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 10%;
    gap: 50px;
  }
  .presentation-container {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20%;
    word-wrap: break-word;
  }
  .input-container{
    padding-right: 20%;
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .input-file {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    border-width: 1px;
    padding: 10px;
    border-color: #191b1c;
    border-style: solid;
  }
  button {
    margin-top: 2%;
    width: 100%;
    border-width: 1px;
    border-color: #191b1c;
    border-style: solid;
  }
  .link-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 5%;
    margin-top: 1%;
  }
</style>