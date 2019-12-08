<template>
    <div>
        <div class="LoginWindow">
            <div class="closeBlock" @click="closeWindow">
                <i class="iconfont">&#xe608;</i>
            </div>
            <div class="mainBlock">
                <div class="TitleBlock">
                    <div class="activityInfoTitle" v-for="title in activityTitle" :key="title">
                        {{title}}
                    </div>
                </div>
            </div>
            <div class="qrcodeBlock">
                <qrcode-vue :value="value" :size="300"></qrcode-vue>
                此二维码每<span style="font-weight: bold;">{{updateNum/ 1000}}</span>秒刷新一次
            </div>
        </div>
    </div>
</template>

<script>import QrcodeVue from 'qrcode.vue'

export default {
  name: "LoginWindow",
  components: {
    QrcodeVue
  },
  mounted() {
    setInterval(() => {
      this.time = new Date().getTime(),
        this.value = `http://baseUrl?t=${new Date().getTime()}`
    }, this.updateNum)
  },
  data() {
    return {
      value: "",
      time: new Date().getTime(),
      activityTitle: [
        "活动序号：", "活动名称：", "活动所属学院：", "最大人数 / 已签到人数："
      ],
      updateNum: 2000,
    }
  },
  methods: {
    closeWindow: function () {
      this.$emit("close-Lwindow");
    }
  }
}
</script>

<style scoped>
    .closeBlock {
        position: absolute;
        width: auto;
        top: 2vh;
        right: 3vh;
        cursor: pointer;
    }

    .closeBlock i {
        font-size: 20px;
    }

    .closeBlock i:hover {
        color: red;
    }

    .TitleBlock {
        margin: 0 4vh;
        width: 28vh;
    }

    .activityInfoTitle {
        position: relative;
        float: left;
        font-size: 2vh;
        line-height: 3vh;
        height: 5vh;
        width: 28vh;
        margin-top: 1vh;
        font-weight: bold;
    }

    .qrcodeBlock {
        position: relative;
        float: left;
        width: auto;
        height: auto;
        text-align: center;
    }

    .mainBlock {
        align-items: center;
        display: flex;
        position: relative;
        float: left;
        width: 80%;
        height: 80%;
    }

    .LoginWindow {
        display: flex;
        align-items: center;
        position: absolute;
        width: 70vw;
        height: 50vh;
        left: 15vw;
        top: 10vh;
        background-color: white;
        z-index: 2000;
    }
</style>
