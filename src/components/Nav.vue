<template>
  <div class="com-nav">
    <div class="header">
      <b-card-header header-tag="nav" class="nav">
        <b-nav card-header>
          <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
          <b-nav-item to="/" exact exact-active-class=""><img src="@/assets/logo.png" height="20px" width="20px"
              alt="" /></b-nav-item>
          <b-nav-item to="/" exact exact-active-class=""><i class="iconfont icon-shouye"></i>首页</b-nav-item>

          <b-nav-item exact exact-active-class=""><i class="iconfont icon-biji"></i>
            <el-dropdown style="display: inline">
              <span class="el-dropdown-link">
                分类<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu class="xiala">
                <el-dropdown-item v-for="(item, index) in categoryList" :key="index" class="item">
                  <router-link :to="{ name: 'category', params: { id: item.id, title: item.categoryName } }"><span>{{ item.categoryName }}</span>
                  </router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </b-nav-item>

          <b-nav-item exact exact-active-class=""><i class="iconfont icon-biaoqian"></i>
            <el-dropdown style="display: inline">
              <span class="el-dropdown-link">
                标签<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu class="xiala">
                <el-dropdown-item v-for="(item, index) in tagList" :key="index" class="item">
                  <router-link :to="{ name: 'tag', params: { id: item.id, title: item.tagName } }">
                    <span>{{ item.tagName }}</span>
                  </router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </b-nav-item>
          <b-nav-item to="/archive" exact exact-active-class=""><i class="iconfont icon-rili"></i>归档</b-nav-item>
          <b-nav-item to="/my" exact exact-active-class=""><i class="iconfont icon-shoucang"></i>个人</b-nav-item>
        </b-nav>
      </b-card-header>
    </div>
  </div>
</template>

<script>
  // 导入api发请求
import { getAllTag } from "@/api/tag"
import { getAllCategory } from '@/api/category';
export default {
  name: "Nav",
  data() {
    return {
      categoryList: [],
      tagList:[]
    };
  },
  methods: {
    getCategory() {
      getAllCategory().then(res => {
        if (res.data.code === 200) {
          this.categoryList = res.data.data
        }
      })
    },
    getTags() {
      getAllTag().then(res => {
        if (res.data.code === 200) {
          this.tagList = res.data.data
        }
      })
    }
  },
  created() {
    this.getCategory(),
      this.getTags()
  }
};
</script>

<style lang="less" scoped >
.com-nav {


  a {
    text-decoration-line: none;
  }

  .header {
    list-style-type: none;

    overflow: hidden;

    background-color: rgba(51, 51, 51, 0.271);

    position: fixed;

    top: 0;

    width: 100%;
    // background: red;
    background: #0d10159d;
    opacity: 0.9;
    border-radius: 25px;
    z-index: 999;
    // height: 60px;
  }

  .nav {
    font-size: 14px;
  }

  .nav li {
    width: 100px;
    line-height: 20px;
    margin: 0 10px;
    text-align: center;
  }

  .nav li a {
    color: rgb(205, 196, 196);
  }

  .nav li a:hover {
    color: white;
  }

  .active {
    color: white !important;
  }



  span {
    color: #ccc4c4;
  }

  .item:hover {
    background: rgba(255, 255, 255, 0.153);
  }
}

.xiala {
  background: #1b202a9d !important;

  .item {
    span {
      color: wheat;
    }
  }

  a {
    text-decoration: none;
  }

  .item:hover {
    background: rgba(255, 255, 255, 0.153);
  }
}
</style>

