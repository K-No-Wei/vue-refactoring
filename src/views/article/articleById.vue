<template>
  <div id="view-articlebyid">
    <div class="other">
      <div class="card">
        <div>
          <h1 class="title">{{article.articleTitle}}</h1>
          <div class="post-meta">
            <span class="post-meta-item">
              <span>发表于</span>
              <time>
                {{article.createTime}}</time>
            </span>
            <span class="post-meta-item next" v-if="article.updateTime != null">
              <span>更新于</span>
              <time>
                {{article.updateTime}}</time>
            </span>
          </div>
          <div class="post-meta-blog">
            <div class="span-left">
              <span>{{article.category.categoryName}}</span>
            </div>
            <div class="span-right">
              <span v-for="(item, index) in article.tags" :key="index">{{item.tagName}}  </span> 
            </div>
          </div>
        </div>
        <div class="post-fjx">
          <span></span>
        </div>
        <div class="post-content" v-html="article.content" v-highlight>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleBody } from "@/api/test";
import { getArticle } from "@/api/article";
// 新版marked需要按需引入,渲染markdown的数据
import { marked } from 'marked';
export default {
  data() {
    return {
      article: ''
    };
  },
  methods: {
    // 根据id获取文章详情
    getArticle(id) {
      getArticle(id).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          this.article = res.data.data;
          // md格式渲染在页面
          this.article.content = marked(res.data.data.articleBodyVo.content)
        }
      })
    }
  },
  created() {
    this.getArticle(this.$route.params.id)
  }
};
</script>

<style lang="less" scoped>
@import url("@/assets/css/markdown.css");

#view-articlebyid {

  .other {
    .card {
      border-radius: 10px;
      font-family: zkxw;
      background: rgba(0, 0, 0, 0.237);

      .post-content {
        color: aliceblue;
      }

      .title {
        color: aliceblue;
        text-align: center;
        font-family: zkwx;
      }

    }

    // code{
    //   color: rgba(252, 251, 251, 0.652) !important;
    // }

    pre {
      background: rgba(149, 149, 158, 0.516);
    }

  }

  .post-meta-item {
    span {
      color: black;
    }

    time {
      color: rgb(7, 66, 143);
    }
  }


  .post-fjx {
    border-top: 1px rgba(255, 255, 255, 0.508) solid;
    margin: 10px 0;
  }

  .next::before {
    content: '|';
    margin: 0 0.5em;
  }

  .post-meta {
    text-align: center;
    font-size: 1rem;
  }

  .post-meta-blog {
    .span-left {
      padding-left: 100px;
      float: left;
      color: black;
    }

    .span-right {
      padding-right: 100px;
      float: right;
      color: black;
    }
  }

  .post-content {
    padding: 10px 20px;
  }
}
</style>