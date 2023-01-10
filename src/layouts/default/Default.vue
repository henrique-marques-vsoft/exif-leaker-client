<template>
  <v-app>
    <default-view />
    <v-footer class="bg-transparent" absolute>
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Henrique Marques</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultView from './View.vue'
</script>
