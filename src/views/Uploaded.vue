<template>
  <TopBar />
  <div class="body">
    <div class="table-container">
      <ExifContentTable :object="exifData"/>
    </div>
    <v-btn
      type="submit"
      disabled
      color="gray"
    >
      Discover the location
    </v-btn>
    <v-btn
      type="submit"
      color="yellow"
      @click="downloadExif"
    >
      Download full EXIF
    </v-btn>
  </div>
</template>

<script lang="ts">
  import TopBar from '@/components/TopBar.vue';
  import ExifContentTable from "@/components/ExifContentTable.vue"
  import {mapState} from "pinia"
  import {useInfoExif} from "@/store/exifManagement"
  export default{
    data(){
      return {
        headers: [
          { text: 'Property', value: 'property' },
          { text: 'Value', value: 'value' },
          { text: 'Description', value: 'description' },
        ],
        items: [
          {
            property: 'Bits Per Sample',
            value: 8,
            description: '8',
          }
        ],
      }
    },
    methods: {
      showInfo(){
        console.log('exifData: ', this.exifData)
      },
      downloadExif(){
        const filename = "exif-info.txt"
        const text = JSON.stringify(this.exifData, null, 2)
        const element = document.createElement("a");
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }
    },
    computed: {
      ...mapState(useInfoExif, ["exifData"])
    },
    components: {
      TopBar,
      ExifContentTable
    }
  }
</script>

<style scoped>
v-table{
  color: red;
}
.body{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
}
.table-container{
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: auto;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  border-radius: 8px;
}
button {
  margin-top: 2%;
  width: 100%;
  border-width: 1px;
  border-color: #191b1c;
  border-style: solid;
}
@media(max-width:1080px){
  .body{
    padding: 5%;
  }
}
</style>