<template>
  <div class="other">
    <div class="card">
      <div>
        <h1 class="title">Hello World my blog</h1>
        <div class="post-meta">
          <span class="post-meta-item">
            <span>发表于</span>
            <time title="创建时间：2022-03-29 11:39:38" itemprop="dateCreated datePublished"
              datetime="2022-03-29T11:39:38+08:00">
              2022-03-29</time>
          </span>
          <span class="post-meta-item next">
            <span>更新于</span>
            <time title="创建时间：2022-03-29 11:39:38" itemprop="dateCreated datePublished"
              datetime="2022-03-29T11:39:38+08:00">
              2022-03-29</time>
          </span>
        </div>
        <div class="post-meta-blog">
          <div class="span-left">
            <span>博客</span>
          </div>
          <div class="span-right">
            <span>博客</span>
          </div>
        </div>
      </div>
      <div class="post-fjx">
        <span></span>
      </div>
      <div class="post-content" v-html="blog" v-highlight>
        
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleBody } from "@/api/test";
// 新版marked需要按需引入
import {marked} from 'marked';
export default {
  data() {
    return {
      blog: ""
    };
  },
  methods: {
    getArticle(id) {
      getArticleBody(id).then(res => {
        console.log(res)
        this.blog = marked(res.data.data.articleBodyVo.content)
        console.log(this.blog)
      })
    }
  },
  created() {
    this.getArticle(this.$route.params.id)
  }
};
</script>

<style lang="less">
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
    }

  }
  // code{
  //   color: rgba(252, 251, 251, 0.652) !important;
  // }

  pre{
    background: rgba(149, 149, 158, 0.516);
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
  }

  .span-right {
    padding-right: 100px;
    float: right;
  }
}

.post-content{
  padding: 10px 10px;
}
@import url("@/assets/css/markdown.css");
</style>