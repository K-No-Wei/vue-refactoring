<template>
  <div class="view-archive">
    <div class="post-content">
      <div class="collection-year">
        <span class="collection-header animated fadeInLeft">2022</span>
      </div>

      <article itemscope="" itemtype="http://schema.org/Article">
        <header class="post-header animated fadeInDown">
          <div class="post-meta-container">
            <time itemprop="dateCreated" datetime="2022-09-09T14:57:55+08:00" content="2022-09-09">
              09-09
            </time>
          </div>

          <div class="post-title">
            <a class="post-title-link" href="" itemprop="url">
              <span itemprop="name">
                <router-link :to="{name: 'articleid',params:{id: 1}}">嘻嘻嘻</router-link>
              </span>
            </a>
          </div>
        </header>
      </article>


    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.view-archive {
  .post-content::before {
    background: #231a1a2c;
    content: " ";
    height: 100%;
    margin-left: -2px;
    position: absolute;
    top: 1.25em;
    width: 4px;
  }

  .post-content {
    margin-bottom: 35px;
    margin-left: 35px;
    position: relative;
  }

  .posts-collapse .post-content .post-header {
    border-bottom-color: rgb(62, 68, 70);
  }

  .collection-header {
    display: block;
    margin-left: 20px;
  }

  .post-header {
    border-bottom: 1px dashed rgb(122, 114, 114);
    margin: 30px 2px 0;
    padding-left: 15px;
    position: relative;
    transition: border 0.2s ease-in-out;
  }

  .post-header::before {
    background: #bbb;
    border: 1px solid #fff;
    left: -6px;
    position: absolute;
    top: 0.75em;
    transition: background 0.2s ease-in-out;
    border-radius: 50%;
    content: " ";
    height: 6px;
    width: 6px;
  }

  .collection-title {
    font-size: 1.125em;
    position: relative;
  }



  .collection-year {
    font-size: 25px;
  }

  .collection-year::before {
    background: #bbb;
    margin-left: -4px;
    margin-top: -4px;
    position: absolute;
    top: 20px;
    border-radius: 50%;
    content: ' ';
    height: 8px;
    width: 8px;
  }

  .post-content .collection-header {
    display: block;
    margin-left: 20px;
  }

  .post-content {
    a {
      text-decoration: none;
      color: #0e0c0c;
    }
  }
  span{
    color: #211c1cd0;
  }

  time{
    color: rgba(0, 0, 0, 0.824);
  }
}
</style>

