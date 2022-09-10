<template>
    <div class="com-category">
        <div class="category">
            <div class="card-header">分类</div>
            <div class="card-body text-primary">
                <ul class="list-group">
                    <li v-for="(item, index) in categoryList" :key="index"
                        class="list-group-item d-flex justify-content-between align-items-center">
                        <router-link :to="{name: 'category', params:{id: item.id,title: item.categoryName}}">
                            {{item.categoryName}}
                        </router-link>
                        <span class="badge badge-primary badge-pill">{{item.count}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllCategory } from '@/api/category';
export default {
    data() {
        return {
            // 分类列表获取
            categoryList: [
                {
                    id: 1,
                    categoryName: '博客',
                    count: 1
                },
                {
                    id: 2,
                    categoryName: '生活',
                    count: 1
                },
                {
                    id: 3,
                    categoryName: '趣事',
                    count: 1
                }
            ]
        }
    },
    methods:{
        getAll(){
            getAllCategory().then(res => {
                if(res.data.code === 200){
                    this.categoryList = res.data.data
                }
            })
        }
    },
    created(){
        this.getAll()
    }
}
</script>

<style lang="less" scoped>
.com-category {
    .category {
        background: rgba(0, 0, 0, 0.319);
        margin-top: 10px;
        border-radius: 10px;

        li {
            background: rgba(0, 0, 0, 0.319);
        }

        font-size: 20px;

        div {
            color: #FFF;

            ul {
                li {
                    a {
                        color: #FFF;
                    }

                    color: #FFF;
                }
            }
        }
    }
}
</style>
