<template>
  <el-main>
    <h1>请求订单</h1>

    <el-divider/>

    <el-form ref="form" :model="form">

      <el-radio-group v-model="form.collection">
        <el-radio-button :label="'transactionCollection1'">Retailer1</el-radio-button>
      </el-radio-group>

      <el-form-item label="订购产品名称" style="margin-top: 20px">
        <el-input
          v-model="form.product_name"
        />
      </el-form-item>

      <el-form-item label="订单号" style="margin-top: 20px">
        <el-input
          v-model="form.order_number"
        />
      </el-form-item>

      <el-form-item label="数量">
        <el-input
          v-model="form.quantity"
        />
      </el-form-item>

      <el-form-item style="margin-top: 30px">
        <el-button type="primary" @click="onSubmit()">提交订单</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>

  </el-main>
</template>

<script>
import { newOrder } from '@/api/new'

export default {
  name: 'CreateOrder',
  data() {
    return {
      form: {
        collection: 'transactionCollection1',
        order_number: '',
        quantity: null,
        product_name: null
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.form.quantity = parseInt(this.form.quantity)
          newOrder('retailer1', this.form).then(() => {
            // this.$router.push('/manufacturer/product/'+this.form.batch_num)
            this.$notify({
              title: 'Success',
              message: '订单创建成功',
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
