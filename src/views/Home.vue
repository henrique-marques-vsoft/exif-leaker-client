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
      <form @submit.prevent="submitForm">
        <input
          type="file"
          ref="image"
          @change="uploadImage"
          class="input-file"
          name="image-input"
          id="input-file"
        />
        <v-btn :disabled="isDisabled" type="submit">{{ textButton }}</v-btn>
      </form>
    </div>
    <v-snackbar
      v-model="snackbar"
      color="blue-darken-4"
    >
      {{ text }}
      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
  import TopBar from '@/components/TopBar.vue'
  import axios from 'axios'
  import { mapState, mapActions } from "pinia"
  import {useInfoExif} from "@/store/exifManagement"

  export default{
    data(){
      return{
        image: null,
        isDisabled: true,
        textButton: "Upload an image first",
        snackbar: false,
        text: `Loading...`,
      }
    },
    methods: {
      ...mapActions(useInfoExif, ["setExifData"]),
      uploadImage(){
        this.image = this.$refs.image.files[0]
        this.textButton = "Upload imagem!"
        this.isDisabled = false
      },
      async submitForm() {
        this.snackbar = true
        this.isDisabled = true
        this.textButton = "Wait..."
        let formData = new FormData()
        formData.append('image', this.image)
        try{
          let response = await axios.post('https://exif-reader.onrender.com/upload', formData)
          this.setExifData(response.data)
          this.$router.push('/uploaded')
        }catch(err){
          console.log(err)
          this.isDisabled = false
          this.textButton = "leak!"
          this.snackbar = false
        }
      }
    },
    components: {
      TopBar
    },
    computed: {
      ...mapState(useInfoExif, ["exifData"])
    }
  }
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
  @media(max-width:1080px){
  .body{
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .presentation-container{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2%;
    word-wrap: break-word;
    }
  .input-container{
    padding: 0 20%;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .link-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5%;
    margin-top: 1%;
  }
}
</style>
