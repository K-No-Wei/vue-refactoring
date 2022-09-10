<template>
  <div class="byId">
    <div class="CategoryName">
      <span style="font-family: zkxw !important;">标签:{{tagName}}</span>
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


                        </div>
                        <div class="foot">
                            <div class="foo">
                                <li class=" d-flex justify-content-between align-items-center">
                                    <small>
                                        <router-link :to="{name: 'category', params:{id: item.category.id}}"
                                            style="color: aliceblue; text-decoration: none;">
                                            {{item.category.categoryName}}</router-link>
                                    </small>
                                    <span class="badge badge-primary badge-pill end">{{item.createTime}}更新</span>
                                    <span v-if="item.updateTime != null"
                                        class="badge badge-primary badge-pill end">{{item.updateTime}}编辑</span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
import {getArticlesById} from "@/api/tag"
export default {
    data(){
        return{
          articleList:"",
          tagName: ""
        }
    },
    methods:{
        getArticle(){
            getArticlesById(this.$route.params.id).then(res => {
                if(res.data.code === 200){
                    this.articleList = res.data.data
                }
            })
        }
    },
    created(){
        this.getArticle(),
        this.tagName = this.$route.params.title
    }
}
</script>
<style lang="less" scoped>

.loading {
        width: auto;
        // color: rgba(39, 39, 30, 0.55);
        margin-left: 100px;
        margin-right: 100px;
        // background: rgba(16, 15, 15, 0.238);
        text-align: center;
        font-size: 20px;

        span {
            // margin: 10px 0px;
            width: auto;
        }
    }

    .card {

        margin-bottom: 20px;
        background: rgba(19, 18, 18, 0.319);

        .article {
            border-radius: 10px;

            img {
                border-radius: 15px;
                width: 100%;
                height: 100%;
                padding: 7px 7px !important;
            }

            p {
                color: rgb(243, 235, 235);
            }

            h1 {
                color: #FFF;
            }

            h2 {
                color: #FFF;
            }

            h3 {
                color: #FFF;
            }

            h4 {
                color: #FFF;
            }

            h5 {
                color: rgba(255, 255, 255, 0.869);
            }

            li {
                color: #FFF;
            }
        }

    }

    .card-body {
        height: 82%;
    }

    .end {
        color: #FFF !important;
        background: rgb(50, 147, 232) !important;
    }

    .foot {
        margin-left: 20px;

    }

    .card-text {
        margin: 10px 0;
    }

    .card-text-end {
        padding-bottom: 5px;
    }



    .pagination {
        background: rgba(255, 255, 255, 0) !important;

    }

    .pagination .page-link {
        background: rgba(19, 18, 18, 0);
        color: rgb(8, 19, 24);
    }

    .active {
        background-image: radial-gradient(circle, #15d5c874, #14a1edcc 66%, transparent 66%);
        color: #FFF;
        // background: aquamarine;
    }

    .article-list {
        font-family: zkxw;
    }

    .card-title {
        text-align: center;
    }
.CategoryName{

  text-align: center;
  font-size: 39.9px;
  color: rgba(43, 30, 30, 0.768);
}


</style>