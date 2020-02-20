<template>
    <div>
        <!--    顶部导航栏-->
        <div class="baseTop">
            <div class="showLeftBtn" @click="select">
                <i class="iconfont">&#xe62b;</i>
            </div>
            <div class="logo">
                <img src="../assets/pigeon.png" alt="">
            </div>
            <div class="logoText"><span style="font-weight: bold">快捷飞签</span>-后台管理</div>
            <div class="rightOperate" title="退出登录" @click="unLogin">
                <div><i class="iconfont">&#xe61d;</i></div>
            </div>
        </div>
        <leftNav :isSelected="isSelected" @goRouter="goIndex"></leftNav>
        <div :class="[routerView, isSelected ? showGrey:'']" @click="disSelect">
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  import leftNav from "../components/leftnav";

  export default {
    name: "main",
    components: {
      leftNav
    },
    data() {
      return {
        isSelected: false,
        routerView: "routerView",
        showGrey: "showGrey"
      }
    },
    methods: {
      select: function () {
        this.isSelected = !this.isSelected
      },
      disSelect: function () {
        this.isSelected = false
      },
      goIndex: function (index) {
        switch (index) {
          case 0:
            this.$router.push(`/main/function/${index}`);
            break;
        }
      },
      unLogin:function () {
        this.$router.push("/")
      }
    }
  }
</script>

<style scoped>
    .rightOperate {
        position: relative;
        float: right;
        line-height: 50px;
        margin-right: 2vh;
        cursor: pointer;
    }

    .rightOperate:hover {
        color: red;
    }

    .rightOperate i {
        font-size: 20px;
    }

    .showGrey {
        background-color: rgba(0, 0, 0, .3);
        z-index: 900;
    }

    .routerView {
        position: absolute;
        width: 100vw;
        height: 100vh;
    }

    .showLeftBtn {
        position: relative;
        float: left;
        width: 50px;
        height: 100%;
        line-height: 50px;
        cursor: pointer;
        background-color: black;
        padding: 0 0.5vh;
        text-align: center;
    }

    .showLeftBtn i {
        font-size: 30px;
        color: white;
    }

    .logoText {
        position: relative;
        float: left;
        width: auto;
        text-align: center;
        height: 100%;
        font-weight: 400;
        line-height: 50px;
    }

    .logo {
        position: relative;
        float: left;
        width: 40px;
        height: 40px;
        padding-top: 5px;
        margin-left: 2vh;
        margin-top: 0.5vh;
    }

    .logo img {
        width: 100%;
        height: 100%;
    }

    .baseTop {
        position: absolute;
        width: 100%;
        height: 50px;
        background-color: white;
        z-index: 1000;
    }
</style>
