<template>
    <div class="tag">
      <div class="card-header">标签</div>
      <div class="card-body text-primary">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                java
                <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                C++
                <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                python
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
                color: #FFF;
            }
        }
    }
  }
  </style>