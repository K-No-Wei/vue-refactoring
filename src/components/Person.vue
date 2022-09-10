<template>
  <div class="person-crad"> 

  
  <div class="card" >
    <img class="card-img-top" src="@/assets/img/person.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">knowei</h5>
      <button type="button" class="btn btn-secondary" v-tip="msg.QQ">
        <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=2994172661">
          <i class="iconfont icon-QQ"></i>
        </a>
      </button>
      <button type="button" class="btn btn-secondary" v-tip="msg.github">
        <a href="https://github.com/K-No-Wei" target="_blank">
          <i class="iconfont icon-github-fill"></i>
        </a>
      </button>
      
      <button type="button" class="btn btn-secondary" v-tip="msg.blbl">
        <a href="https://space.bilibili.com/225564141" target="_blank">
          <i class="iconfont icon-bilibili-line"></i>
        </a>
      </button>
  
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      msg: {
        QQ: "QQ",
        github: "欢迎关注star",
        blbl: "欢迎关注"
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .person-crad{
    .card{
      background: rgba(0, 0, 0, 0.327);
      border-radius: 15px;
      
        img{
            border-radius: 15px;
            padding: 5px 5px;
        }
    }

    h5{
      text-align: center;
      color: #FFFFFF;
    }

    i{
      color: white;
    }
    button{
      margin: 0 20px;
      border-radius: 100px;
    }

    button:hover{
      background: rgba(230, 238, 233, 0.499);
    }
  }
    

</style>