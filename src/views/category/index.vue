<template>
  <div class="byId">
    <div class="CategoryName">
      <span style="font-family: zkxw !important;">分类:博客</span>
    </div>

    <!-- 首页文章列表显示 -->
    <div class="card" v-for="(item, index) in articleList" :key="index">
        <div class="article row no-gutters listArticle">
            <div class="col-md-4">
                <router-link :to="{name: 'articleid', params: {id: item.id}}">
                <img :src="item.articleCover" class="card-img" alt="">
            </router-link>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <router-link :to="{name: 'articleid', params: {id: item.id}}">
                        <h5 class="card-title">{{item.articleTitle}}</h5>
                    </router-link>
                    <p class="card-text">{{item.articleDescribe}}</p>
                    
                    <p class="card-text">
                        <li class=" d-flex justify-content-between align-items-center">
                            <small ><router-link :to="{name: 'category', params:{id: item.category.id}}" style="color: aliceblue; text-decoration: none;">{{item.category.categoryName}}</router-link></small>
                            <span class="badge badge-primary badge-pill end">{{item.createTime}}更新</span>
                            <span v-if="item.updateTime != null" class="badge badge-primary badge-pill end">{{item.updateTime}}编辑</span>
                        </li>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          articleList:[
                {
                    id: 1,
                    category: {
                    id: 1,
                    categoryName: "博客",
                    count: null
                    },
                    articleCover: "https://tva2.sinaimg.cn/large/006MWoJqgy1h299x0od4xj31xo1d0u0x.jpg",
                    articleTitle: "Hello World my blog",
                    articleDescribe: "我的第一个文章",
                    support: 0,
                    heat: 0,
                    articleBodyVo: null,
                    createTime: "2022-09-05 15:09",
                    updateTime: "2022-09-07 16:26",
                    tags: [
                        {
                            id: 1,
                            tagName: "java",
                            count: 3
                        },
                        {
                            id: 2,
                            tagName: "c++",
                            count: 2
                        }
                    ]
                },
                {
                    id: 1,
                    category: {
                    id: 1,
                    categoryName: "博客",
                    count: null
                    },
                    articleCover: "https://tva2.sinaimg.cn/large/006MWoJqgy1h299x0od4xj31xo1d0u0x.jpg",
                    articleTitle: "Hello World my blog",
                    articleDescribe: "我的第一个文章",
                    support: 0,
                    heat: 0,
                    articleBodyVo: null,
                    createTime: "2022-09-05 15:09",
                    updateTime: "2022-09-07 16:26",
                    tags: [
                        {
                            id: 1,
                            tagName: "java",
                            count: 3
                        },
                        {
                            id: 2,
                            tagName: "c++",
                            count: 2
                        }
                    ]
                }
            ]
        }
    },
    created(){
      this.testid = this.$route.params.id
    }
}
</script>
<style lang="less" scoped>
@import url("@/assets/scss/article.scss");
.CategoryName{

  text-align: center;
  font-size: 39.9px;
  color: rgba(43, 30, 30, 0.768);
}


</style>