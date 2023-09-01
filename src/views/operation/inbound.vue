<template>
  <lay-container style="margin: 10px">
    <lay-row space="10">
      <lay-col md="8">
        <lay-card>
          <lay-form :model="formData" ref="inboundFef">
            <lay-form-item label="入库单号" prop="asn_number" required>
              <lay-input v-model="formData.asn_number" autofocus ref="asn_number" @keyup.enter="validatorForm" ></lay-input>
            </lay-form-item>
            <lay-form-item label="物料条码" prop="material_barcode" required>
              <lay-input v-model="formData.material_barcode" ref="material_barcode" @keyup.enter="validatorForm"></lay-input>
            </lay-form-item>
            <lay-form-item label="单价" prop="unit_price">
              <lay-input-number v-model="formData.unit_price" setup="0.01" min="0.00" ref="unit_price" @keyup.enter="validatorForm"></lay-input-number>
            </lay-form-item>
            <lay-form-item label="数量" prop="qty" required ref="qty" @keyup.enter="validatorForm">
              <lay-input-number v-model="formData.qty"></lay-input-number>
            </lay-form-item>
          </lay-form>
        </lay-card>
        
      </lay-col>
      <lay-col md="16">

      </lay-col>
    
    </lay-row>
  </lay-container>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const asn_number = ref()
    const qty = ref()
    const material_barcode = ref()
    const formData = {
      asn_number:'',
      material_barcode:'',
      unit_price:'0.00',
      qty:"1"
    }
    function validatorForm(event){
      setInputFocus()
    }

    function setInputFocus(){
      if(formData.asn_number == ''){
        asn_number.focus();
        return
      }
      if(formData.material_barcode == ''){
        qty.focus();
        return
      }
      if(formData.qty == ''){
        qty.focus();
        return
      }
      if(formData.unit_price == ''){
        unit_price.focus();
        return
      }
    }
    
    return {
      formData,
      validatorForm,
      asn_number,
      qty,
      material_barcode
    }
  },
  mounted(){

  }
    
}
</script>