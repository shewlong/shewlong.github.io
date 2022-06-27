<template>
<div>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="token">
    <el-input  v-model="ruleForm.token" ></el-input>
  </el-form-item>
  <!-- <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
<script>
// import GistApi from '@/api/gist'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入token'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        token: ''
        // checkPass: '',
        // age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('Authentication', this.ruleForm.token)

          console.log(formName, 999)
          // alert('submit!')
          this.$router.push('/user/new')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    // this.loading = true
    // GistApi.list(this.query).then((response) => {
    //     let result = response.data
    //     if (!result || result.length == 0) {
    //         this.loading = false
    //         return
    //     }
    //     for (let key in result[0].files) {
    //         this.blog.id = result[0]['id']
    //         break
    //     }
    //     GistApi.single(this.blog.id).then((response) => {
    //         let result = response.data
    //         for (let key in result.files) {
    //             this.blog['title'] = key
    //             this.blog['content'] = this.$markdown(result.files[key]['content'])
    //             this.blog['description'] = result['description']
    //             this.blog['createTime'] = this.$util.utcToLocal(result['created_at'])
    //             this.blog['updateTime'] = this.$util.utcToLocal(result['updated_at'])
    //             break
    //         }
    //     }).then(() => this.loading = false)
    // })
  }
}
</script>
