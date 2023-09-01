<template>
  <lay-layer v-model="visible" :shade="false" :area="['500px', '450px']" :btn="action" :title="operationType">
    <div style="padding: 20px;">
      <lay-form :model="model">
        <lay-form-item label="条码" prop="barcode" required >
          <lay-input v-model="model.barcode"></lay-input>
        </lay-form-item>
        <lay-form-item label="名称" prop="name" required>
          <lay-input v-model="model.name"></lay-input>
        </lay-form-item>
          <lay-form-item label="描述" prop="description" required>
        <lay-input v-model="model.description"></lay-input>
        </lay-form-item>
        <lay-form-item label="单价" prop="unit_price">
          <lay-input v-model="model.unit_price"></lay-input>
        </lay-form-item>
      </lay-form>              
    </div>
  </lay-layer>    
</template>
<script lang="ts">
export default {
  props: {
    
  }
}
</script>
