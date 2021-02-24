<template>
  <el-main>
    <h1>查询订单信息</h1>

    <el-divider />

    <el-form ref="form" :model="form">
      <el-form-item label="订单编号">
        <el-input
          v-model="form.order_id"
        />
      </el-form-item>

      <el-radio-group v-model="form.collection">
        <el-radio-button :label="'transactionCollection1'">Retailer1</el-radio-button>
        <el-radio-button :label="'transactionCollection2'">Retailer2</el-radio-button>
      </el-radio-group>

      <el-form-item style="margin-top: 30px">
        <el-button type="primary" @click="onSubmit()">查询</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
    <el-card style="margin-top: 35px">
      <div slot="header" class="clearfix">
        <span>订单详情  {{ form.order_id }}</span>
      </div>

      <div class="text item" style="margin-top: 25px">
        {{ '货物批号：' + order_info.batch_number }}
      </div>

      <div class="text item" style="margin-top: 25px">
        {{ '物流编号：' + order_info.tracking_number }}
      </div>

      <div class="text item" style="margin-top: 25px">
        {{ '产品数量：' + order_info.quantity }}
      </div>

      <div class="text item" style="margin-top: 25px">
        {{ '产品单价：' + order_info.unit_price }}
      </div>

      <div class="text item" style="margin-top: 25px">
        {{ '分拣员：' + order_info.sorter }}
      </div>

      <div class="text item" style="margin-top: 25px">
        {{ '客户：' + order_info.client }}
      </div>

    </el-card>
  </el-main>
</template>

<script>
import { getOrderInfo } from '@/api/queries'

export default {
  name: 'QueryOrderInfo',
  data() {
    return {
      form: {
        order_id: '',
        collection: 'transactionCollection1'
      },
      order_info: {
        batch_number: '',
        tracking_number: '',
        sorter: '',
        unit_price: '',
        quantity: '',
        client: ''
      }
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    const collectionName = this.$route.query && this.$route.query.collection
    console.log('params:', id, collectionName)
    if (id > 0) {
      this.fetchData(id, collectionName)
      this.form.collection = collectionName
      this.form.order_id = id
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          getOrderInfo('manufacturer', this.form.order_id, this.form.collection).then(response => {
            this.order_info.batch_number = response.data.batch_number
            this.order_info.tracking_number = response.data.tracking_number
            this.order_info.sorter = response.data.sorter
            this.order_info.unit_price = response.data.unit_price
            this.order_info.quantity = response.data.quantity
            this.order_info.client = response.data.client
          })
        }
      })
    },
    fetchData(id, collection) {
      getOrderInfo('manufacturer', id, collection).then(response => {
        this.order_info.batch_number = response.data.batch_number
        this.order_info.tracking_number = response.data.tracking_number
        this.order_info.sorter = response.data.sorter
        this.order_info.unit_price = response.data.unit_price
        this.order_info.quantity = response.data.quantity
        this.order_info.client = response.data.client
      })
    }
  }
}
</script>

<style scoped>

</style>
