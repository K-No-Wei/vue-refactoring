<template>
  <div>
    <div class="card">
        <div class="article row no-gutters listArticle">
            <div class="col-md-4">
                <img src="@/assets/img/person.jpg" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                    <p class="card-text">
                        <li class=" d-flex justify-content-between align-items-center">
                            <small>博客</small>
                            <span class="badge badge-primary badge-pill end">2022-08-21</span>
                        </li>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="article row no-gutters listArticle">
            <div class="col-md-4">
            <img src="@/assets/img/person.jpg" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">
                    <li class=" d-flex justify-content-between align-items-center">
                        <small>博客</small>
                        <span class="badge badge-primary badge-pill end">2022-08-21</span>
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
};
</script>

<style lang="less">



.card{
    margin-bottom: 20px;
    background: rgba(19, 18, 18, 0.319);
    .article {
    border-radius: 10px;
        img {
            border-radius: 15px;
            width: 100%;
            height: 100%;
            padding: 7px 7px;
        }
        p{
            color: rgb(243, 235, 235);
        }
        h1{
            color: #FFF;
        }
        h2{
            color: #FFF;
        }
        h3{
            color: #FFF;
        }
        h4{
            color: #FFF;
        }
        h5{
            color: rgba(255, 255, 255, 0.869);
        }
        li{
            color: #FFF;
        }
    }
}

.end{
    color: #FFF !important;
    background: rgb(50, 147, 232) !important;
}


</style>