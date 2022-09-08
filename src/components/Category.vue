<template>
  <div class="category">
    <div class="card-header">分类</div>
    <div class="card-body text-primary">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                博客
                <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                生活
                <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                趣事
                <span class="badge badge-primary badge-pill">1</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                博客
                <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                生活
                <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                趣事
                <span class="badge badge-primary badge-pill">1</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.category{
    background: rgba(0, 0, 0, 0.319);
    margin-top: 10px;
    border-radius: 10px;
    li{
        background: rgba(0, 0, 0, 0.319);
    }

    font-size: 20px;
    div{
        color: #FFF;
        ul{
            li{
                color: #FFF;
            }
        }
    }
}
</style>