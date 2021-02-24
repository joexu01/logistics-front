<template>
  <el-main>
    <h1>物流记录上链</h1>

    <el-divider />

    <el-form ref="form" :model="form">

      <el-form-item label="物流编号">
        <el-input
          v-model="form.tracking_num"
        />
      </el-form-item>

      <el-form-item label="物流上链信息">
        <el-input
          v-model="form.status"
        />
      </el-form-item>

      <!--      <el-form-item label="操作员">-->
      <!--        <el-input-->
      <!--          v-model="form.operator"-->
      <!--        />-->
      <!--      </el-form-item>-->

      <el-form-item label="操作员">
        <el-select v-model="form.operator" placeholder="请选择操作员">
          <el-option :key="'快递员01'" :label="'快递员01'" :value="'快递员01'" />
          <el-option :key="'快递员02'" :label="'快递员02'" :value="'快递员02'" />
          <el-option :key="'快递员03'" :label="'快递员03'" :value="'快递员03'" />
          <el-option :key="'快递员04'" :label="'快递员04'" :value="'快递员04'" />
          <el-option :key="'快递员05'" :label="'快递员05'" :value="'快递员05'" />
          <el-option :key="'快递员06'" :label="'快递员06'" :value="'快递员06'" />
          <el-option :key="'快递员07'" :label="'快递员07'" :value="'快递员07'" />
          <el-option :key="'快递员08'" :label="'快递员08'" :value="'快递员08'" />
          <el-option :key="'快递员09'" :label="'快递员09'" :value="'快递员09'" />
          <el-option :key="'快递员10'" :label="'快递员10'" :value="'快递员10'" />
        </el-select>
      </el-form-item>

      <el-form-item style="margin-top: 30px">
        <el-button type="primary" @click="onSubmit()">物流信息上链</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>

  </el-main>
</template>

<script>
import { updateLogisticsRecord } from '@/api/new'

export default {
  name: 'UpdateLogisticsRecord',
  data() {
    return {
      form: {
        operator: '',
        status: '',
        tracking_num: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          updateLogisticsRecord(this.form.tracking_num, this.form).then(() => {
            // this.$router.push('/manufacturer/product/'+this.form.batch_num)
            this.$notify({
              title: 'Success',
              message: '物流上链信息发送成功',
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
