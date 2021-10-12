<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="account">
        <el-input
          type="text"
          v-model="ruleForm.account"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input
          type="password"
          v-model="ruleForm.pwd"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '../api/index'
import {mapMutations} from 'vuex'
export default {
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if(/^(?=.*[a-z])(?=.*[0-9]).{6,12}$/.test(value)){
          callback();
        }else{
          callback(new Error('格式错误'))
        }
      }
    };
    return {
      ruleForm: {
        account: "",
        pwd: "",
      },
      rules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        pwd: [{ validator: validatePwd, trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapMutations({
      'set':'set'
    }),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm).then(res=>{
            if(res.data.status===200){
              this.set({
                menus:res.data.data.menus
              })
              localStorage.setItem('token',res.data.data.token)
              this.$router.push('/')
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang='less'>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>