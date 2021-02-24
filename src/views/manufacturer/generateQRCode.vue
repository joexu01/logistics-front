<template>
  <el-main>
    <h1>生成追溯二维码</h1>

    <el-divider/>

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
        <el-button type="primary" @click="onSubmit()">生成QRCode</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>

    <h5 class="text-and-qrcode">产品信息溯源QRCode</h5>
    <div class="block text-and-qrcode">
      <!--      <span class="demonstration"></span>-->
      <el-image :src="qrcode_images_url.query_prod_info_url"/>
    </div>

    <h5 class="text-and-qrcode">物流记录溯源QRCode</h5>
    <div class="block text-and-qrcode">
      <el-image :src="qrcode_images_url.query_logistics_record_url"/>
    </div>

    <h5 class="text-and-qrcode">物流记录上链QRCode（物流公司用）</h5>
    <div class="block text-and-qrcode">
      <el-image :src="qrcode_images_url.update_logistics_status_url"/>
    </div>

  </el-main>
</template>

<script>
import { getQRCode, getDefaultImage } from '@/api/queries'

export default {
  name: 'GenerateQRCode',
  data() {
    return {
      form: {
        order_id: '',
        collection: 'transactionCollection1'
      },
      qrcode_images_url: {
        query_prod_info_url: '',
        query_logistics_record_url: '',
        update_logistics_status_url: ''
      }
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    const collectionName = this.$route.query && this.$route.query.collection
    console.log('params:', id, collectionName)
    getDefaultImage().then(response => {
      this.qrcode_images_url = response.data
    })
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
          getQRCode(this.form.order_id, this.form.collection).then(response => {
            this.qrcode_images_url = response.data
          })
        }
      })
    },
    fetchData(id, collection) {
      getQRCode(id, collection).then(response => {
        this.qrcode_images_url = response.data
      })
    }
  }
}
</script>

<style scoped>
.text-and-qrcode {
  text-align: center;
}
</style>
