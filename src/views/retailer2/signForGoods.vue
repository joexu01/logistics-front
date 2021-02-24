<template>
  <el-main>
    <h1>货物签收记录上链</h1>

    <el-divider />

    <el-form ref="form" :model="form">

      <el-form-item label="物流编号">
        <el-input
          v-model="form.tracking_num"
        />
      </el-form-item>

      <el-form-item label="签收信息">
        <el-input
          v-model="form.status"
        />
      </el-form-item>

      <el-form-item style="margin-top: 30px">
        <el-button type="primary" @click="onSubmit()">货物签收信息上链</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>

  </el-main>
</template>

<script>
import { signForGoods } from '@/api/new'

export default {
  name: 'SignForGoods',
  data() {
    return {
      form: {
        operator: '',
        status: '零售商2已签收',
        tracking_num: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          signForGoods('retailer2', this.form.tracking_num, this.form).then(() => {
            // this.$router.push('/manufacturer/product/'+this.form.batch_num)
            this.$notify({
              title: 'Success',
              message: '签收信息发送成功',
              type: 'success',
              duration: 3000
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
