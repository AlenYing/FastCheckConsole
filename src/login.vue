<template>
    <div>
        <div class="main">
            <!--            图片部分-->
            <div class="main-pic">
                <img src="./assets/bgf.jpg" style="width:100%;height:100%;">
            </div>
            <!--            登录框部分-->
            <div class="main-right">
                <div class="loginblockAccountType">
                    <div class="loginblockAccountTypePart" :class="[isuser ? chosed : '']"
                         @click="chooseUser">
                        用户登录
                    </div>
                    <div class="loginblockAccountTypePart" :class="[isAdministrator ? chosed: '']"
                         @click="chooseAdministrator">
                        管理员登录
                    </div>
                </div>
                <div class="login-main">
                    <input class="login-mainInput" v-model="account" placeholder="请输入账户">
                    <input class="login-mainInput" v-model="password" placeholder="请输入密码" type="password">
                    <div class="login-mainbtn" @click="Login">登录</div>
                </div>
                <!--            LOGO and introduction-->
                <div class="footer">
                    <div class="footermain">
                        <img src="./assets/logo-1.png">
                        <div class="footertext">
                            @上应大易班版权所有<br/>
                            2019.12 v0.1
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <staWindow></staWindow>
    </div>
</template>

<script>
    import staWindow from "./components/staWindow";
  export default {
    name: 'login',
    components:{
      staWindow
    },
    data() {
      return {
        chosed: 'Partchosed',
        isuser: true,
        isAdministrator: false,
        account: '',
        password: '',
      }
    },
    methods: {
      chooseUser: function () {
        this.isuser = true;
        this.isAdministrator = false
      },
      chooseAdministrator: function () {
        this.isAdministrator = true;
        this.isuser = false
      },
      Login: function () {
         // let _response = ''
        window.console.log(this.isuser,this.isAdministrator);
        if (this.isAdministrator) {
          //  管理员登录方法

        } else if (this.isuser) {
          this.$router.push('/main/function/0')
          //  用户登录方法
          // this.$axios.post(`http://192.168.0.195:5000/api/v1/User/${this.account}`,
          // {
          //     "password":`${this.password}`
          // })
          // .then((response)=>{
          //     _response = response.statusText
          //      this.$router.push('/main/function/0')
          //     window.console.log(_response)
          // })
          // .catch(function(error){
          //     window.console.log(error)
          // })
          // window.console.log(_response)
          // if(_response==="OK"){
          //     window.console.log("wobeichufale ")
          // }
        }
      }
    }
  }
</script>

<style scoped>

    .footermain {
        position: relative;
        margin: 0 auto;
        width: 25vh;
        height: 10vh;
    }

    .footermain img {
        width: 100%;
        height: 100%;
    }

    .footertext {
        margin-top: 2vh;
        text-align: center;
        font-size: 1.3vh;
    }

    .footer {
        position: absolute;
        bottom: 0vh;
        width: 100%;
        height: 20vh;
        /*outline: 1px solid red;*/
    }

    .login-main {
        margin-top: 4vh;
        width: 100%;
        padding: 8vh 8vh;
    }

    .loginblockAccountType {
        position: relative;
        width: 100%;
        height: 6vh;
        border-bottom: 1px solid #e3e3e3;
        display: flex;
        text-align: center;
        line-height: 6vh;
    }

    .loginblockAccountType > .Partchosed {
        color: #a4b0be;
        border-bottom: 2px solid #a4b0be;
    }

    .loginblockAccountTypePart {
        width: 40vh;
        height: 100%;
        cursor: pointer;
    }

    .loginblockAccountTypePart:nth-child(1) {
        border-right: 1px solid #e3e3e3;
    }

    .main-pic {
        position: relative;
        float: left;
        width: 80vh;
        height: 80vh;
        /*outline: 1px solid red;*/
    }

    .main {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 160vh;
        height: 80vh;
        /*outline: 1px solid red;*/
        display: flex;
        align-items: center;
        background-color: white;
        box-shadow: 0 2px 15px rgba(0, 0, 0, .15);
        border-radius: 0.5vh;
    }

    .login-mainbtn {
        background-color: #5352ed;
        color: white;
        width: 100%;
        height: 6vh;
        line-height: 6vh;
        text-align: center;
        margin-top: 4vh;
        border-radius: 1vh;
        cursor: pointer;
    }

    .login-mainInput {
        border: 1px solid #e3e3e3;
        height: 7vh;
        margin-top: 1vh;
        width: 100%;
        font-size: 2.3vh;
        line-height: 5.5vh;
        padding-left: 0.5vh;
    }


    .main-right {
        position: relative;
        float: left;
        display: flex;
        flex-direction: column;
        width: 80vh;
        height: 80vh;
    }
</style>
