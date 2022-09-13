<template>
  <div class="home">
    <!-- <img width="100%" height="100%" style="position: fixed;margin: 0 0; padding: 0 0;" src="https://tva2.sinaimg.cn/large/006MWoJqgy1h299vgzjhrj31xg0rs7w2.jpg" alt=""> -->
    <b-card title="Card Title" no-body class="nav">
      <Nav />
    </b-card>
    <b-card-body>
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <div class="row" v-if="path.includes('admin') === false">
        <div class="col-sm-1" />
        <div class="col-sm-3">
          <Sidebar />
        </div>
        <!-- router-view绑定key值，解决跳转同一页面参数不同不刷新的问题 -->
        <div class="col-sm-6">
          <router-view :key="$route.fullPath" />
        </div>
        <div class="col-sm-1" />
      </div>
    </b-card-body>
    <div class="footer">
      <div class="footer-header">
        小站已经平安度过: <span v-html="longTime"></span> ღゝ◡╹)ノ♡
      </div>

      <div class="footer-end">
        版权归<a href="https://github.com/K-No-Wei" target="_blank">@knowei</a>所有
      </div>
    </div>
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue';
import Person from '@/components/Person.vue'
import Sidebar from '@/components/Sidebar.vue';
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Nav,
    Person,
    Sidebar
},
  data() {
    return {
      longTime: '',
      path: ''
    }
  },
  methods: { //事件处理器
    runTime() {//运行倒计时
      var that = this;
      var oldTime = new Date('2022/09/09 00:00:00');
      var timer = setInterval(function () {
        var nowTime = new Date();
        var longTime = nowTime - oldTime;
        var days = parseInt(longTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
        var hours = parseInt(longTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
        var minutes = parseInt(longTime / 1000 / 60 % 60, 10);//计算剩余的分钟
        var seconds = parseInt(longTime / 1000 % 60, 10);//计算剩余的秒数
        that.longTime = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
      }, 1000)
    }
  },
  created() {
    this.runTime(),
    this.path = this.$route.path
  }
};
</script>

<style scoped lang="scss">
.home {
  .nav {
    background: #292f3c;
  }

  .row {
    position: relative;
    margin-top: 70px;
  }

  .footer {
    height: 175px;
    background: linear-gradient(#4a4c4e, #25272ca5);
  }

  .footer-header {
    padding-top: 25px;
    text-align: center;
    color: wheat;
    font-size: 10px;
    font-family: zkxw;
  }

  .footer-end {
    margin-top: 30px;
    text-align: center;
    color: rgba(255, 255, 255, 0.708);
    font-size: 10px;
    font-family: zkxw;

    a {
      color: #b3b1b2ec;
      text-decoration: none;
    }
  }
}
</style>
