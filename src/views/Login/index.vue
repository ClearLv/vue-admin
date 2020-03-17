<template>
  <div id="login">
    <div class="content_wrap">
      <div class="login_button_wrap">
        <div class="button_login">
          <el-button id="login_style">登录</el-button>
        </div>
        <div class="button_register">
          <el-button id="register_style">注册</el-button>
        </div>
      </div>
      <el-form :model="formData" :rules="formCheckRules">
        <el-form-item class="number_input_wrap" prop="emailNumber">
          <el-input
                  placeholder="请输入邮箱"
                  v-model="formData.emailNumber"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pwdNumber" class="pwd_input_wrap">
          <el-input
                  placeholder="请输入密码"
                  show-password
                  min="6"
                  max="20"
                  v-model="formData.pwdNumber"
          ></el-input>
        </el-form-item>
        <div class="check_input_wrap">
          <el-form-item class="check_input">
            <el-input
                    v-model="formData.checkNumber"
                    placeholder="请输入验证码"
            ></el-input>
          </el-form-item>
          <el-form-item class="check_button">
            <el-button type="success">获取验证码</el-button>
          </el-form-item>
        </div>
        <el-form-item class="button_sure_wrap">
          <el-button id="button_size">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
    name: "index",
    data() {
      let validateEmail = (rule, value, callback) => {
        console.log(value);
        let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!value) {
          return callback(new Error("邮箱不能为空"));
        }
        if (!reg.test(value)) {
          callback(new Error("请输入有效的邮箱"));
        } else {
          callback();
        }
      };

      let validatePwd = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("密码不能为空"));
        }
        if (value.length < 6) {
          return callback(new Error("密码不能 < 6"));
        }
        return callback();
      };

      return {
        formData: {
          emailNumber: "",
          pwdNumber: "",
          checkNumber: ""
        },
        formCheckRules: {
          emailNumber: [{ validator: validateEmail, trigger: "blur" }],
          pwdNumber: [{ validator: validatePwd, trigger: "blur" }]
        }
      };
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="scss" scoped>
  #login {
    background-color: #344a5f;
    height: 100vh;
  }
  .content_wrap {
    padding-top: 10%;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login_button_wrap {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }
  .number_input_wrap {
    margin-bottom: 20px;
    width: 300px;
  }
  .pwd_input_wrap {
    margin-bottom: 20px;
    width: 300px;
  }
  .check_input_wrap {
    /*margin-bottom: 20px;*/
    display: flex;
    flex-direction: row;
    width: 300px;
  }
  .button_sure_wrap {
    margin-bottom: 20px;
    width: 300px;
  }
  .button_login {
    width: 50%;
    height: 100%;
    margin-right: 5px;
  }
  .button_register {
    width: 50%;
    height: 100%;
    margin-left: 5px;
  }
  .check_input {
    margin-right: 5px;
  }
  .check_button {
    margin-right: 5px;
  }
  #button_size {
    width: 100%;
  }
  #register_style {
    color: black;
    background-color: aqua;
  }
  #login_style {
    color: black;
    background-color: aqua;
  }
  #login_style:hover {
    background-color: black;
  }
  #login_style:focus {
    background-color: black;
  }
</style>

