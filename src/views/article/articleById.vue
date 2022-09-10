<template>
  <div id="view-articlebyid">
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
  </div>
</template>

<script>
import { getArticleBody } from "@/api/test";
// 新版marked需要按需引入,渲染markdown的数据
import { marked } from 'marked';
export default {
  data() {
    return {
      /**
       * 需要渲染的md格式
       *  {
          // 例如这种
          "articleBodyVo": {
            "content": "# 1.电影\r\n[链接](https://www.acwing.com/problem/content/description/105/)\r\n### 题目描述\r\n有n个科学家，编号从1~10^9，我们要为他们准备电影，如果能听懂电影的语音最开心，能看懂电影的字幕比较开心，听不懂以及看不懂的不开心，我们要找出最开心的观看电影编号，没有则任意输出即可。\r\n第一行输入一个整数 n，代表科学家的数量。\r\n第二行输入 n 个整数 a1,a2…an，其中 ai 表示第 i个科学家懂得的语言的编号。\r\n第三行输入一个整数 m，代表电影的数量。\r\n第四行输入 m个整数 b1,b2…bm，其中 bi 表示第 i部电影的语音采用的语言的编号。\r\n第五行输入 m 个整数 c1,c2…cm，其中 ci 表示第 i 部电影的字幕采用的语言的编号。\r\n\r\n### 数据范围\r\n1≤n,m≤200000,\r\n1≤ai,bi,ci≤109\r\n\r\n#### 样例\r\n\r\n```\r\n3\r\n2 3 2\r\n2\r\n3 2\r\n2 3\r\n```\r\n```\r\n2\r\n```\r\n----------\r\n\r\n### 算法\r\n##### (离散化+排序)  $O(n^2)$\r\n由于给定的数据范围很大，而我们使用的却知识一小部分，所以我们需要离散化将所有的电影进行重新编号即可。\r\n\r\n1. 我们先将所有的电影使用的语言找出来，排序去重。\r\n2. 我们统计科学家的使用语言，将每一种的语言使用者的人数计数，使用离散化即可完成，将稀疏数组变为稠密数组，即可统计。\r\n3. 进行比较，先比较能够听懂的，在比较能看懂的，更新最大即可。如果在遍历完所有的电影还没有，随便输出一种电影即可。\r\n\r\n#### 时间复杂度\r\n\r\n#### 参考文献\r\n\r\n#### C++ 代码\r\n```cpp\r\n#include<iostream>\r\n#include<vector>\r\n#include<queue>\r\n#include<stack>\r\n#include<algorithm>\r\n#include<cstring>\r\nusing namespace std;\r\n\r\n#define endl \"\\n\"\r\n#define x first\r\n#define y second\r\n#define int long long\r\n#define FAST ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);\r\nconst int INF = 0x3f3f3f3f;\r\nconst int N = 2e5 + 10;\r\nint n, m, k;\r\n\r\nvector<int> lon;\r\nint a[N], b[N], c[N];\r\nint ans[3*N];\r\n\r\n//离散化\r\nint find(int x)\r\n{\r\n    int l = 0, r = lon.size();\r\n    while(l < r)\r\n    {\r\n        int mid = l + r >> 1;\r\n        if(lon[mid] >= x) r = mid;\r\n        else    l = mid + 1;\r\n    }\r\n    return r + 1;\r\n}\r\n\r\nsigned main()\r\n{\r\n    FAST\r\n    cin >> n;\r\n    for(int i = 0; i < n; i++)\r\n    {\r\n        cin >> a[i];\r\n        lon.push_back(a[i]);\r\n    }\r\n    cin >> m;\r\n    for(int i = 0; i < m; i++)\r\n    {\r\n        cin >>  b[i];\r\n        lon.push_back(b[i]);\r\n    }\r\n    for(int i = 0; i < m; i++)\r\n    {\r\n        cin >> c[i];\r\n        lon.push_back(c[i]);\r\n    }\r\n    //排序去重，统计所有的语中\r\n    sort(lon.begin(), lon.end());\r\n    lon.erase(unique(lon.begin(), lon.end()), lon.end());\r\n\r\n    for(int i = 0; i < n; i++)\r\n    {\r\n        ans[find(a[i])]++;\r\n    }\r\n    //ans0存放最佳的电影，ans1存放能听懂的，ans2存放能看懂的。\r\n    int ans1 = 0, ans2 = 0, ans0= 0;\r\n    for(int i = 0; i < m; i++)\r\n    {\r\n        int bx = ans[find(b[i])];\r\n        int cx = ans[find(c[i])];\r\n        //先比较能挺懂的，后比较能看懂的\r\n        if(bx > ans1 || (bx == ans1 && cx > ans2))\r\n            ans0 = i + 1, ans1 = bx, ans2 = cx;\r\n    }\r\n    //如果未更新，那么就随便输出即可\r\n    if(ans0 == 0)\r\n        cout << 1;\r\n    else\r\n        cout << ans0;\r\n    return 0;\r\n}\r\n```\r\n\r\n----------\r\n"
          },

      */
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
    time{
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