<template>
  <div class="header">
      <b-card-header header-tag="nav" class="nav">
        <b-nav card-header >
          <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
          <b-nav-item to="/" exact exact-active-class="active"
            ><img src="@/assets/logo.png" height="20px" width="20px" alt=""></b-nav-item
          >
          <b-nav-item to="/test" exact exact-active-class="active"
            ><i class="iconfont icon-shouye"></i>首页</b-nav-item
          >
          <b-nav-item to="/category" exact exact-active-class="active"
            ><i class="iconfont icon-biji"></i>分类</b-nav-item
          >
          <b-nav-item to="/tag" exact exact-active-class="active"
            ><i class="iconfont icon-biaoqian"></i>标签</b-nav-item
          >
          <b-nav-item to="/archives" exact exact-active-class="active"
            ><i class="iconfont icon-rili"></i>归档</b-nav-item
          >
          <b-nav-item to="/my" exact exact-active-class="active"
            ><i class="iconfont icon-shoucang"></i>个人</b-nav-item
          >
        </b-nav>
      </b-card-header>

  </div>
</template>

<script>
export default {
  name: 'Nav'
};
</script>

<style scoped lang="less">
  .header{
    // background: red;
    background: #0d1015;
    opacity: 0.9;
    border-radius: 25px;
    // height: 60px;
  }

  .nav {
    font-size: 14px;
    
  }

  .nav li{
    width: 100px;
    line-height: 20px;
    margin: 0 10px;
    text-align: center;
    
  }

  .nav li a{
    color: rgb(205, 196, 196);
    
  }

  .nav li a:hover{
    color: white;
  }
  
  .active{
    color: white !important;
  }
</style>

