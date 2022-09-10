<template>
    <div class="com-tag">


        <div class="tag">
            <div class="card-header">标签</div>
            <div class="card-body text-primary">
                <ul class="list-group">
                    <li v-for="(item ,index) in tagList" :key="index"
                        class="list-group-item d-flex justify-content-between align-items-center">
                        <router-link :to="{name: 'tag', params:{id: item.id,title: item.tagName}}">
                            {{item.tagName}}
                        </router-link>
                        <span class="badge badge-primary badge-pill">{{item.count}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>
import { getAllTag } from "@/api/tag"
export default {
    data() {
        return {
            // 标签数据
            tagList:''
        }
    },
    methods:{
        getTags(){
            getAllTag().then(res => {
                if(res.data.code === 200){
                    this.tagList = res.data.data
                }
            })
        }
    },
    created(){
        this.getTags()
    }
}
</script>
  
<style lang="less" scoped>
.com-tag {
    .tag {
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
                        color: #FFF
                    }

                    color: #FFF;
                }
            }
        }
    }
}
</style>