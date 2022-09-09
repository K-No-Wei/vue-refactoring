<template>
    <div class="tag">
      <div class="card-header">标签</div>
      <div class="card-body text-primary">
        <ul class="list-group">
            <li v-for="(item ,index) in tagList" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
                <router-link :to="{name: 'tag', params:{id: item.id}}">
                {{item.tagName}}
                </router-link>
                <span class="badge badge-primary badge-pill">{{item.count}}</span>
            </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
        data(){
            return{
                // 标签数据
                tagList:[
                    {
                        id: 1,
                        tagName: 'java',
                        count: 3
                    },
                    {
                        id: 2,
                        tagName: 'C++',
                        count: 3
                    },
                    {
                        id: 3,
                        tagName: 'python',
                        count: 3
                    },
                    {
                        id: 4,
                        tagName: 'C#',
                        count: 3
                    }
                ]
            }
        }
  }
  </script>
  
  <style lang="less">
  .tag{
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
                a{
                    color: #FFF
                }
                color: #FFF;
            }
        }
    }
  }
  </style>