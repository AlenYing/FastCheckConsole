<template>
    <div class="Block">
        <div class="ATMain">
            <div class="TableTitle">
                活动列表
            </div>
            <div class="TableBlock">
                <table>
                    <tr>
                        <th>活动序号</th>
                        <th>活动名称</th>
                        <th>活动地点</th>
                        <th>操作</th>
                    </tr>
                    <tr v-if="activityTable==false">这里空空如也，什么也没有哦~</tr>
                    <tr v-for="(activity,index) in activityTable" :key="activity">
                        <th v-for="info in activity" :key="info">
                            {{info}}
                        </th>
                        <th class="operation">
                            <div class="operationBtn" style="background-color:#a1dd70;" @click="beginLogin">开始签到</div>
                            <div class="operationBtn" style="background-color:#00bdaa;" @click="showDetail">显示详情</div>
                            <div class="operationBtn" style="background-color:red;" @click="deleteActivity(index)">
                                删除活动
                            </div>
                        </th>
                    </tr>
                </table>
                <div class="addBtn" @click="showaddUp">
                    新增
                </div>
            </div>
        </div>
        <div :class="{master:showWindow}"></div>
        <upWindow :class="[showWindowC? showUpWindow : unShow ,aniDis]" @close-window="closewindow"
                  @add-activity="addActivity"
                  :typeWindow="typeWindow"></upWindow>
        <LoginWindow :class="[showLoginWindow?showUpWindow : unShow ,aniDis]" @close-Lwindow="closeLwindow"></LoginWindow>
    </div>
</template>

<script>
  import upWindow from "./upWindow";
  import LoginWindow from "./LoginWindow";

  export default {
    name: "activityTable",
    components: {
      upWindow,
      LoginWindow
    },
    data() {
      return {
        activityTable: [
          {
            activityId: "1919191",
            activityName: "机协第一次活动",
            activityArea: "工训一馆308",
          },
          {
            activityId: "1919190",
            activityName: "机协第一次活动",
            activityArea: "工训一馆308",
          }
        ],
        loginBtn: "loginBtn",
        showWindow:
          false,
        showWindowC:
          false,
        master:
          "master",
        unShow:
          "unShow",
        aniDis:
          "ani-dis",
        typeWindow:
          "",
        showLoginWindow:
          false,
        showUpWindow:
          "showUpWindow"
      }
    },
    methods: {
      showaddUp: function () {
        this.showWindow = true;
        this.showWindowC = true;
        this.typeWindow = "addWindow"
      },
      closewindow: function () {
        this.showWindow = false;
        this.showWindowC = false;
      },
      closeLwindow:function(){
        this.showWindow = false;
        this.showLoginWindow = false;
      },
      addActivity: function (activityInfo) {
        let newActivityInfo = {
          activityId: "",
          activityName: "",
          activityArea: ""
        };
        /* Inputmenu: [
         0  {Title: "组织人姓名：", point: "请输入姓名"},
         1{Title: "组织人联系方式:", point: "请输入电话/WeChat"},
          2{Title: "活动名称：", point: "请输入活动名称"},
          3{Title: "活动地点：", point: "请输入活动地点"},
          4{Title: "活动时间段：", point: "请输入时间"},
          5{Title: "所属学院：", point: "请输入学院名"},
          6Title: "最大人数：", point: "请输入最大人数"},
          7{Title: "活动描述：", point: "请输入活动描述（可选）"}*/
        newActivityInfo.activityArea = activityInfo[3];
        newActivityInfo.activityName = activityInfo[2];
        newActivityInfo.activityCollege = activityInfo[5];
        newActivityInfo.activityId = 2101020023;
        this.activityTable.push(newActivityInfo);
      },
      deleteActivity: function (index) {
        this.activityTable.splice(index, 1);
      },
      showDetail: function () {
        this.showWindow = true;
        this.showWindowC = true;
        this.typeWindow = "showWindow"
      },
      beginLogin: function () {
        this.showWindow = true;
        this.showLoginWindow = true;
      }
    }
  }
</script>

<style scoped>
    .defaultTr {
        text-align: center;
        width: 100%;
        height: 5vh;
        border: 1px solid black;
    }

    .operation {
        display: flex;
        justify-content: center;
    }

    .ani-dis {
        transition: opacity .3s linear;
    }

    .unShow {
        opacity: 0;
        display: none;
    }

    .showWindow {
        display: unset;
        opacity: 1;
    }

    .master {
        position: absolute;
        top: -50px;
        width: 100%;
        height: calc(100% + 50px);
        background-color: rgba(0, 0, 0, .6);
        z-index: 2000;
        transition: all .3s linear;
    }

    .addBtn {
        position: relative;
        float: left;
        font-size: 2.5vh;
        margin-top: 2vh;
        margin-left: 2vh;
        line-height: 5vh;
        width: 10vh;
        color: white;
        font-weight: bold;
        text-align: center;
        background-color: #5352ed;
        border-radius: 1.5vh;
        cursor: pointer;
    }

    .addBtn:hover {
        box-shadow: 0 0 1px 2px rgba(0, 0, 0, .3);
    }

    .operationBtn {
        width: 30%;
        height: 100%;
        cursor: pointer;
        margin: 0 1vh;
        line-height: 4vh;
        font-size: 2vh;
        color: white;
        border-radius: 2vh;
        box-shadow: 0 0 14px -4px rgba(0, 0, 0, .3);
    }

    .operationBtn:hover {
        box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, .2);
    }

    .TableBlock {
        position: relative;
        margin-top: 3vh;
        margin: 3vh auto;
        width: 80%;
    }

    .TableBlock table {
        position: relative;
        float: left;
        table-layout: fixed;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 30px;
        font-size: 20px;
        border-collapse: collapse;
    }


    .TableBlock th {
        padding: 8px 6px;
        text-align: center;
        background: #f7f7f7;
        border: 1px #e3e3e3 solid;

    }

    .ATMain {
        position: relative;
        margin-top: 2vh;
        margin-left: 2vh;
    }

    .TableTitle {
        position: relative;
        margin: 4vh 4vh 4vh 4vh;
        font-size: 6vh;
    }
</style>

