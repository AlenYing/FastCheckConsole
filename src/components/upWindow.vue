<template>
    <div class="upWindow">
        <div class="header"></div>
        <div class="mainBlock">
            <div class="main" v-if="typeWindow==='addWindow'">
                <div class="inputinfo" v-for="(info,index) in Inputmenu" :key="info">
                    <div class="inputTitle"><p class="inBottom">{{info.Title}}</p></div>
                    <input type="text" class="infoInput" :placeholder=info.point v-model="activityInfo[index]">
                </div>
                <div class="closeBtn" @click="closeWindow">关闭</div>
                <div class="closeBtn" @click="closeWindow(),addActivity()">提交</div>
            </div>
            <div class="main" v-else-if="typeWindow==='showWindow'">
                <div class="inputinfo" v-for="(info,index) in Inputmenu" :key="info">
                    <div class="inputTitle"><p class="inBottom">{{info.Title}}</p></div>
                    {{activityInfo[index]}}
                </div>
                <div class="closeBtn" @click="closeWindow">关闭</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['typeWindow'],
    name: "upWindow",
    data() {
      return {
        Inputmenu: [
          {Title: "组织人姓名：", point: "请输入姓名"},
          {Title: "组织人联系方式:", point: "请输入电话/WeChat"},
          {Title: "活动名称：", point: "请输入活动名称"},
          {Title: "活动地点：", point: "请输入活动地点"},
          {Title: "活动时间段：", point: "请输入时间"},
          {Title: "所属学院：", point: "请输入学院名"},
          {Title: "最大人数：", point: "请输入最大人数"},
          {Title: "活动描述：", point: "请输入活动描述（可选）"}
        ],
        activityInfo: []
      }
    },
    methods: {
      closeWindow: function () {
        this.$emit("close-window")
      },
      addActivity: function () {
        this.$emit("add-activity", this.activityInfo);
      }
    }
  }
</script>

<style scoped>
    .closeBtn {
        position: relative;
        float: right;
        width: 10vh;
        height: 5vh;
        background-color: #515585;
        margin-right: 10vh;
        margin-top: 5vh;
        text-align: center;
        line-height: 5vh;
        font-size: 2.5vh;
        color: white;
        font-weight: bold;
        border-radius: 1.5vh;
        cursor: pointer;
    }

    .closeBtn:hover {
        box-shadow: 0 0 1px 2px rgba(0, 0, 0, .3);
    }

    .closeBtn:nth-last-child(1) {
        background-color: #46b5d1;
        margin-right: 3vh;
    }

    .main {
        padding-top: 2vh;
    }

    .upWindow {
        position: absolute;
        width: 40vw;
        height: 80vh;
        margin: 0 auto;
        top: 2vh;
        left: 30vw;
        z-index: 3000;
        border-radius: 4vh;
    }

    .header {
        position: absolute;
        top: 0;
        background-color: #e3e3e3;
        width: 100%;
        height: 5vh;
        border-top-left-radius: 4vh;
        border-top-right-radius: 4vh;
    }

    .mainBlock {
        position: relative;
        width: 100%;
        height: calc(100% - 5vh);
        top: 5vh;
        background-color: white;
        border-bottom-left-radius: 4vh;
        border-bottom-right-radius: 4vh;
    }

    .infoInput {
        position: relative;
        float: left;
        border-bottom: 0.3vh solid #e3e3e3;
        height: 5vh;
        margin-top: 2vh;
        width: 20vh;
        font-size: 1.7vh;
        padding-left: 0.5vh;
    }

    .infoInput:focus {
        border-bottom: 1px solid black;
    }

    .inputTitle {
        position: relative;
        float: left;
        font-size: 2vh;
        line-height: 3vh;
        height: 5vh;
        width: 15vh;
        text-align: center;
        margin-top: 1vh;
        font-weight: bold;
    }

    .inBottom {
        position: absolute;
        bottom: 0;
        padding: 0px;
        margin: 0px
    }

    .inputinfo {
        position: relative;
        float: left;
        width: 40%;
        margin-left: 6vh;
    }
</style>
