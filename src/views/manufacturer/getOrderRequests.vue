<template>
  <el-main>
    <h1>待接收订单</h1>

    <el-divider />

    <el-form ref="form" :model="form">

      <el-form-item label="选择零售商" style="margin-top: 20px">
        <el-radio-group v-model="form.collection">
          <el-radio-button :label="'transactionCollection1'">Retailer1</el-radio-button>
          <el-radio-button :label="'transactionCollection2'">Retailer2</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item style="margin-top: 30px">
        <el-button type="primary" @click="fetchData(form.collection)">查询</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>

    <el-collapse>
      <el-collapse-item v-for="order in orders" :key="order.order_id" :title="order.order_id">
        <el-row class="larger-font larger-margin">客户：{{ order.client }}</el-row>
        <el-row class="larger-font larger-margin">预订商品名称：{{ order.product_name }}</el-row>
        <el-row class="larger-font larger-margin">订单状态：{{ order.status | loadTypeFilter }}</el-row>
        <el-row class="larger-font larger-margin">预订数量：{{ order.quantity }}</el-row>
        <el-row style="margin-top: 10px">

          <el-button type="success" plain @click="onClickAcceptOrder(order.order_id)">接受订单</el-button>

          <el-popconfirm
            confirm-button-text="好的"
            cancel-button-text="不用了"
            icon="el-icon-info"
            icon-color="red"
            title="确定拒绝订单吗？"
            style="margin-left: 5px"
            @onConfirm="reject(order.order_id, form.collection)"
          >
            <el-button slot="reference" type="danger" plain>拒绝订单</el-button>
          </el-popconfirm>

        </el-row>
      </el-collapse-item>

    </el-collapse>

    <el-dialog title="接受订单" :visible.sync="dialogVisible" width="90%">
      <el-form :model="accept_form">
        <el-form-item label="分拣员" style="margin-top: 30px">
          <el-select v-model="accept_form.sorter" placeholder="请选择分拣员" style="margin-top: 30px">
            <el-option :key="'分拣员01'" :label="'分拣员01'" :value="'分拣员01'" />
            <el-option :key="'分拣员02'" :label="'分拣员02'" :value="'分拣员02'" />
            <el-option :key="'分拣员03'" :label="'分拣员03'" :value="'分拣员03'" />
            <el-option :key="'分拣员04'" :label="'分拣员04'" :value="'分拣员04'" />
            <el-option :key="'分拣员05'" :label="'分拣员05'" :value="'分拣员05'" />
          </el-select>
        </el-form-item>
        <el-form-item label="发送的货物的批次编号">
          <el-input
            v-model="accept_form.batch_number"
          />
        </el-form-item>
        <el-form-item label="物流编号">
          <el-input
            v-model="accept_form.tracking_number"
          />
        </el-form-item>

        <el-form-item label="产品单价">
          <el-input
            v-model="accept_form.unit_price"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="accept(current_order, form.collection, accept_form)">确 定</el-button>
      </div>
    </el-dialog>

  </el-main>

</template>

<script>
import { getUnacceptedOrders } from '@/api/queries'
import { acceptOrder, rejectOrder } from '@/api/new'

const statusOptions = [
  { key: 'Unaccepted', display_name: '订单未被接受' }
]

const statusKeyValue = statusOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'GetOrderRequests',
  filters: {
    loadTypeFilter(type) {
      return statusKeyValue[type]
    }
  },
  data() {
    return {
      form: {
        collection: 'transactionCollection1'
      },
      current_order: '',
      accept_form: {
        batch_number: '',
        sorter: '',
        tracking_number: '',
        unit_price: null
      },
      orders: [
        {
          'order_id': '',
          'batch_number': '',
          'tracking_number': '',
          'sorter': '',
          'unit_price': null,
          'quantity': null,
          'client': '',
          'status': '',
          'product_name': ''
        }
      ],
      dialogVisible: false
    }
  },
  created() {
    this.fetchData(this.form.collection)
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    },
    fetchData(collection) {
      getUnacceptedOrders(collection).then(response => {
        this.orders = response.data
      })
    },
    onClickAcceptOrder(order_id) {
      console.log(order_id)
      this.current_order = order_id
      this.dialogVisible = true
    },
    accept(id, collection, details) {
      details.unit_price = parseFloat(details.unit_price)
      acceptOrder(id, collection, details).then(() => {
        // this.$router.push('/manufacturer/product/'+this.form.batch_num)
        this.fetchData(this.form.collection)
        this.$notify({
          title: 'Success',
          message: '已接受订单',
          type: 'success',
          duration: 3000
        })
        this.dialogVisible = false
        stop()
        this.fetchData(this.form.collection)
      })
    },
    reject(id, collection) {
      rejectOrder(id, collection).then(() => {
        // this.$router.push('/manufacturer/product/'+this.form.batch_num)
        this.$notify({
          title: 'Success',
          message: '已拒绝订单',
          type: 'success',
          duration: 3000
        })
        this.fetchData(this.form.collection)
      })
    }
  }
}
</script>

<style scoped>
. larger-font {
  font-size: 30px;
}

. larger-margin {
  margin-top: 10px;
}
</style>
