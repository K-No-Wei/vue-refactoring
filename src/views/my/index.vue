<template>
  <div class="my-crad">
    <div class="my  card">
      <div class=" mb-3">
        <img class="card-img-top" src="@/assets/img/person.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">一个大三苦逼学生，啥也不会(全栈目标)</h5>
          <p class="card-text">
            练习时长两年半的小ikun，喜欢唱，跳，rap，篮球！
          </p>
          <p class="card-text">
          <div class="jineng">java:</div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="75"
              aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
          </div>
          </p>
          <p class="card-text">
          <div class="jineng">springboot:</div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
              aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 50%"></div>
          </div>
          </p>
          <p class="card-text">
          <div class="jineng">vue</div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
              aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 25%"></div>
          </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.my-crad {
  .my {
    .card-title {
      font-family: zkxw;
      font-size: 30px;
    }

    background: rgba(135, 130, 130, 0.25);


  }

  .jineng {
    margin: 10px;
    color: rgba(28, 29, 25, 0.761);
  }

}
</style>