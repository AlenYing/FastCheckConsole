<template>
<div :class="{default:true,block:isLog ,failed:loginFail}">
 <div class="blockText">
     <i class="iconfont">{{iconText}}</i>
     {{blockText}}</div>
</div>
</template>

<script>
  export default {
    props: {
      loginFail: Boolean,
        isLog: Boolean
    },
    name: "staWindow", 
      computed:{
        blockText:function () {
            return this.loginFail?"登录失败":"登录成功";
        },
          iconText:function () {
              return this.loginFail?"\ue646":"\ue607";
          }
      }


  }
</script>

<style scoped>
    .default{
        position: absolute;
        opacity: 0;
        top:-3vh;
        height: 5vh;
        width: 20vh;
        left:50%;
        margin-left: -10vh;
        background: #50d890;
    }
.block{
    /*transition: all 1s;*/
    position: absolute;
    top:-3vh;
    transition: transform .3s ease-in-out .2s, opacity .35s ease .25s;
    transform: translate(0,3vh);
    opacity: 1;
    background: #50d890;
    left:50%;
    margin-left: -10vh;
}
.failed{
    background-color: red;
}
.blockText{
    padding-left: 7vh;
    line-height: 4.5vh;
    color: white;
    font-size: 2.2vh;
}
    .blockText i{
        font-size: 2.2vh;
        position: absolute;
        left: 3vh;
        width: 6.3vh;
        line-height: 4.9vh;
        color: white;
    }

</style>
