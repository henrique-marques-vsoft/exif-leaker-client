<template>
      <v-table
        fixed-header
        height="400px"
      >
        <thead>
        <tr>
          <th class="text-left">
            Property
          </th>
          <th class="text-left">
            Value
          </th>
          <th class="text-left">
            Description
          </th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in object" :key="key">
            <td>{{ key }}</td>
            <td>{{ value.value }}</td>
            <td>{{ value.description }}</td>
          </tr>
        </tbody>
      </v-table>
</template>
  
<script lang="ts">  
  export default{
    props: {
      object: {
        type: null,
        required: true,
      },
    },
  }
</script>

<style scoped>
.table {
  width: 100%;
}

.table th {
  font-weight: bold;
  text-align: left;
}

.table td {
  padding: 8px;
  border-bottom: 1px solid gray;
  width: 33%;
}
</style>