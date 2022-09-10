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
        <div @click="onLoad" class="loading" v-if="this.articleList.length != this.total">
            <button type="button" class="btn btn-outline-secondary">加载文章 <i
                    class="iconfont icon-shuangxianxiajiantou"></i></button>

        </div>
        <div @click="onLoad" class="loading" v-if="this.articleList.length == this.total">
            <button type="button" class="btn btn-outline-secondary">没有更多楼</button>

        </div>

    </div>
</template>

<script>
import { getAtricleList } from "@/api/article"
export default {
    data() {
        return {
            current: 1,
            pageSize: '',
            total: '',
            articleList: []

        }
    },
    methods: {
        // 获取全部文章
        getAll() {
            getAtricleList(this.current).then(res => {
                if (res.data.code === 200) {
                    this.articleList = res.data.data
                    this.current = res.data.pageVo.current
                    this.pageSize = res.data.pageVo.pageSize
                    this.total = res.data.pageVo.total
                }
            })
        },
        // 加载更多文章
        onLoad() {
            for (let i = 0; this.current < this.pageSize, i <= 0; i++) {
                getAtricleList(this.current + 1).then(res => {
                    if (res.data.code === 200) {
                        console.log(this.articleList)
                        console.log(res.data.data.length)
                        for (let i = 0; i < res.data.data.length; i++) {
                            this.articleList.push(res.data.data[i])
                        }
                        this.current = res.data.pageVo.current
                        this.pageSize = res.data.pageVo.pageSize
                        this.total = res.data.pageVo.total
                    }
                })
            }

            // 加载状态结束
            this.loading = false;

            // 数据全部加载完成
            if (this.total >= 6) {
                this.finished = true;
            }
        },

    },
    created() {
        this.getAll()
    }
};
</script>

<style lang="less" scoped>
.view-article {

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
}
</style>