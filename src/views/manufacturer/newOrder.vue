<template>
  <el-main>
    <h1>新建订单</h1>

    <el-divider />

    <el-form ref="form" :model="form">

      <el-radio-group v-model="form.collection">
        <el-radio-button :label="'transactionCollection1'">Retailer1</el-radio-button>
        <el-radio-button :label="'transactionCollection2'">Retailer2</el-radio-button>
      </el-radio-group>

      <el-form-item label="订单号" style="margin-top: 20px">
        <el-input
          v-model="form.order_number"
        />
      </el-form-item>

      <el-form-item label="发送的货物的批次编号">
        <el-input
          v-model="form.batch_number"
        />
      </el-form-item>

      <el-form-item label="数量">
        <el-input
          v-model="form.quantity"
        />
      </el-form-item>

      <el-form-item label="分拣员" style="margin-top: 30px">
        <el-select v-model="form.sorter" placeholder="请选择分拣员" style="margin-top: 30px">
          <el-option :key="'分拣员01'" :label="'分拣员01'" :value="'分拣员01'" />
          <el-option :key="'分拣员02'" :label="'分拣员02'" :value="'分拣员02'" />
          <el-option :key="'分拣员03'" :label="'分拣员03'" :value="'分拣员03'" />
          <el-option :key="'分拣员04'" :label="'分拣员04'" :value="'分拣员04'" />
          <el-option :key="'分拣员05'" :label="'分拣员05'" :value="'分拣员05'" />
        </el-select>
      </el-form-item>

      <el-form-item label="物流编号">
        <el-input
          v-model="form.tracking_number"
        />
      </el-form-item>

      <el-form-item label="产品单价">
        <el-input
          v-model="form.unit_price"
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
  name: 'NewOrder',
  data() {
    return {
      form: {
        batch_number: '',
        collection: 'transactionCollection1',
        order_number: '',
        quantity: null,
        sorter: '',
        tracking_number: '',
        unit_price: null
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.form.quantity = parseInt(this.form.quantity)
          this.form.unit_price = parseFloat(this.form.unit_price)
          newOrder('manufacturer', this.form).then(() => {
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
