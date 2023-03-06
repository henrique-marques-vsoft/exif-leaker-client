<template>
  <TopBar />
  <div class="body">
    <div class="table-container">
      <v-data-table :headers="headers" :items="items" :items-per-page="10" class="elevation-1">
        <template v-slot:item.value="{ item }">
          {{ item.value }}
        </template>
        <template v-slot:item.description="{ item }">
          {{ item.description }}
        </template>
      </v-data-table>
    </div>
    <v-btn type="submit">Download full EXIF</v-btn>
  </div>
</template>

<script lang="ts">
  import TopBar from '@/components/TopBar.vue';
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
          },
          {
            property: 'Image Height',
            value: 2333,
            description: '2333px',
          },
          {
            property: 'Image Width',
            value: 4147,
            description: '4147px',
          },
          {
            property: 'Color Components',
            value: 3,
            description: '3',
          },
          {
            property: 'Subsampling',
            value: 'YCbCr4:4:4 (1 1)',
            description: '[[1,17,0],[2,17,1],[3,17,1]]',
          },
          {
            property: 'JFIF Version',
            value: 257,
            description: '1.1',
          },
          {
            property: 'Resolution Unit',
            value: 0,
            description: 'None',
          },
          {
            property: 'XResolution',
            value: 1,
            description: '1',
          },
          {
            property: 'YResolution',
            value: 1,
            description: '1',
          },
          {
            property: 'JFIF Thumbnail Width',
            value: 0,
            description: '0px',
          },
          {
            property: 'JFIF Thumbnail Height',
            value: 0,
            description: '0px',
          },
        ],
      }
    },
    methods: {
      showInfo(){
        console.log('exifData: ', this.exifData)
      }
    },
    computed: {
      ...mapState(useInfoExif, ["exifData"])
    },
    components: {
      TopBar
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
  width: 100%;
  border-width: 1px;
  border-color: black;
  border-style: solid;
}
button {
  margin-top: 2%;
  width: 100%;
  border-width: 1px;
  border-color: #191b1c;
  border-style: solid;
}
</style>