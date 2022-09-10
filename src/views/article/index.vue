<template>
    <div class="view-article">


        <div class="article-list">
            <!-- 首页文章列表显示 -->
            <div class="card" v-for="(item, index) in articleList" :key="index">
                <div class="article row no-gutters listArticle">
                    <div class="col-md-4">
                        <router-link :to="{name: 'articleid', params: {id: 2}}">
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
                        <div class="foot" >
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

            <nav aria-label="Page navigation example" class="pageinfo ">
                <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link" href="#">
                            <i class="iconfont icon-zuojiantou_huaban"></i>
                        </a></li>
                    <li v-for="(item, index) in pageIn" :class="{active:index==isActive}" :key="index"
                        @click="chang(index)"><a class="page-link" href="#">{{item + 1}}</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <i class="iconfont icon-youjiantou_huaban"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageIn: [0, 1, 2, 3, 4],
            isActive: 1,
            articleList: [
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
    methods: {
        chang(index) {
            this.isActive = index
            console.log(index)
        }
    },
    created() {
    }
};
</script>

<style lang="less" scoped>
.view-article {
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

    .card-body{
        height: 88%;
    }
    .end {
        color: #FFF !important;
        background: rgb(50, 147, 232) !important;
    }

    .foot{
        margin-left: 20px;
        
    }

    .card-text{
        margin: 10px 0;
    }

    .card-text-end{
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
    .card-title{
        text-align: center;
    }
}
</style>