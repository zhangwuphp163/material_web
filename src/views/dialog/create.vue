<template>
    <div v-if="dialogVisible">
    <form class="layui-form" @submit.prevent="submitForm">
      <div class="layui-form-item">
        <label class="layui-form-label">姓名</label>
        <div class="layui-input-block">
          <input type="text" v-model="form.name" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">年龄</label>
        <div class="layui-input-block">
          <input type="text" v-model="form.age" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit lay-filter="formSubmit">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>

</script>