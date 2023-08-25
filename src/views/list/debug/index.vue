<template>
  <div>
    <button @click="openDialog">打开弹框</button>
    <div v-if="dialogVisible" class="dialog">
      <div v-html="htmlContent"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      htmlContent: ''
    };
  },
  methods: {
    openDialog() {
      // 异步加载文件的 HTML 内容
      this.loadFileContent().then(content => {
        this.htmlContent = content;
        this.dialogVisible = true;
      });
    },
    loadFileContent() {
      // 使用异步请求或其他方式加载文件的 HTML 内容
      return new Promise(resolve => {
        // 模拟异步加载
        setTimeout(() => {
          const content = '<h1>这是文件的 HTML 内容</h1>';
          resolve(content);
        }, 1000);
      });
    }
  }
};
</script>

<style>
.dialog {
  width: 400px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
