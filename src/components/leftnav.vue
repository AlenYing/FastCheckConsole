<template>
    <div>
        <div :class="[isSelected ? '':nShow,leftNavBlock]">
            <div class="navBtn" @click="showIndex(index)" v-for="(menu, index) in useMenu" :key="menu">
                <i class="iconfont">{{menu.iconName}}</i>
                {{menu.usage}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props:{
      isSelected:Boolean
    },
    name: "leftNav",
    data() {
      return {
        leftNavBlock:'leftNavBlock',
        nShow:'nShow',
        useMenu:[
          {usage:"活动列表", iconName:"\ue64a"},
          {usage:"历史活动", iconName:"\ue603"},
          {usage:"问题上报", iconName:"\ue610"}
        ]
      }
    },
    methods: {
      showIndex: function (index) {
        this.$emit("goRouter", index);
      }
    }
  }
</script>

<style scoped>
    .navBtn {
        position: relative;
        width: 100%;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        white-space: nowrap;
        padding-left: 70px;
        -webkit-transition: all .3s cubic-bezier(0,0,.2,1);
        transition: all .3s cubic-bezier(0,0,.2,1);
        cursor: pointer;
        margin: 4px 0;
        font-size: 15px;
    }
    .navBtn:hover{
        background-color: #e3e3e3;
        color: #46b5d1;
    }

    .navBtn:hover i{
        color: #46b5d1;
    }
    .leftNavBlock {
        position: absolute;
        top: 50px;
        left: 0;
        height: calc(100% - 50px);
        width: 300px;
        background-color: white;
        -webkit-transition: all .3s cubic-bezier(0,0,.2,1);
        transition: all .3s cubic-bezier(0,0,.2,1);
        z-index: 3000;
    }
    .navBtn i {
        position: absolute;
        left: 18px;
        top: 0px;
        font-size: 30px;
        line-height: 40px;
    }
    .nShow{
        width: 0px;
    }
    .nShow i{
        -webkit-transition: all .2s linear;
        transition: all .2s linear;
        transform: scaleY(0);
    }


</style>
