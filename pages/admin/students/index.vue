<template>
  <div>
    <PageHeader title="Students">
      <template v-slot:action>
        <t-button @click="showModal=true" type="button" class="py-3">Export</t-button>
      </template>
    </PageHeader>
    <!-- component -->
    <ag-grid-vue style="height: 680px;"
        class="ag-theme-alpine w-full p-6"
        :defaultColDef="defaultColDef"
        :columnDefs="columnDefs"
        :rowData="rowData">
    </ag-grid-vue>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            columnDefs: null,
            rowData: null,
            defaultColDef: {
              flex: 1,
              minWidth: 150,
              resizable: true,
            },
        }
    },
    beforeMount() {
        this.columnDefs = [
            { field: 'name' },
            { field: 'email' },
            { field: 'mobile' }
        ];

        this.rowData = [
            { name: 'Toyota', email: 'aelica@gmail.com', mobile: "+91 8578965420" },
            { name: 'Ford', email: 'aondeo@gmail.com', mobile: "+91 8578965420" },
            { name: 'Porsche', email: 'aoxter@gmail.com', mobile: "+91 8578965420" }
        ];
    }
  }
</script>

<style>
.ag-row-hover {
  /* putting in !important so it overrides the theme's styling as it hovers the row also */
  background-color: #dfdfff !important;
}

.ag-column-hover {
  background-color: #dfffdf;
}
</style>