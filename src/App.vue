<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script>
import "@/assets/js/yhua"
export default {
  name: "App",
  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-koharu/assets/',
        tagMode: false,
        debug: false,
        model: { jsonPath: '/static/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
        display: { position: 'right', width: 150, height: 300 },
        mobile: { show: true },
        log: false
      })
    }, 1000)
  }
};
</script>
<style lang="less" scoped>
@import url("@/assets/css/reset.css");
@import url("@/assets/css/style.css");


</style>
