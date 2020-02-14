<template>
<div class="block">
 <div class="blockText">
     <i class="iconfont">&#xe607;</i>
     登录成功</div>
</div>
</template>

<script>
  export default {
    name: "staWindow"
  }
</script>

<style scoped>
.block{
    position: absolute;
    height: 6vh;
    width: 20vh;
    background: #50d890;
    left:50%;
    margin-left: -10vh;
}
.blockText{
    padding-left: 6vh;
    line-height: 5.8vh;
    color: white;
    margin-right: 2vh;
    font-size: 2.5vh;
}
    .blockText i{

        position: absolute;
        left: 3vh;
        line-height: 6vh;
        color: white;
    }

</style>
