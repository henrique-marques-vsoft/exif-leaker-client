<template>
  <TopBar />
  <div class="body">
    <div class="img-container">
      <img src="1.webp" alt="Girl in a jacket">
    </div>
    <p class="prompt-desc">AI Generated Image by Stable Diffusion AI. Prompt: Slow shutter speed photo of a cyberpunk scenery, architecture, public realm, jonathan solte and zac retz style</p>
    <div class="description-container">
      <h1>About this project</h1>
      <h3>You can contribute to this project! Feel free to open a issue or a pull request on Github.</h3>
      <a href="https://github.com/all123all/exif-leaker-client" target="_blank" rel="noopener noreferrer">Frontend here.</a>
      <a href="https://github.com/all123all/exif-leaker" target="_blank" rel="noopener noreferrer">Backend here.</a>
      <a href="https://github.com/all123all" target="_blank" rel="noopener noreferrer">Other projects here.</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import HelloWorld from '@/components/HelloWorld.vue'
  import TopBar from '@/components/TopBar.vue'
</script>

<style scoped>
img {
  width: 100%;
}
h3 {
  margin-bottom: 2%;
}
a {
  color: goldenrod;
  text-decoration: none;
  transition: 500ms;
}
a:hover {
  color: white;
  font-size: 20px;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15%;
}
.img-container {
  margin-top: 2%;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  overflow: auto;
  width: 100%;
  height: 200px;
  background-size: contain;
}
.prompt-desc {
  margin-top: 0.5%;
  font-size: 12px;
  color: gray;
  opacity: 50%;
}
.description-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5% 0;
}
.link-container {
  background-color: aquamarine;
}
</style>
