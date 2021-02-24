<template>
  <el-main style="align-content: center">
    <!--    <el-col :span="20" :offset="2">-->
    <h1>查询产品批次信息</h1>

    <el-divider/>

    <el-form ref="form" :model="form">
      <el-form-item label="商品批次编号" style="text-align: center">
        <el-input
          v-model="form.batch_id"
          :disabled="input_disabled"
          style="max-width: 800px"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit()">查询</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>
    <el-card style="margin-top: 35px">
      <div slot="header" class="clearfix">
        <span>产品批次信息</span>
      </div>

      <div class="text item" style="margin-top: 25px">
        {{ '产品名称：' + prodInfo.name }}
      </div>

      <div class="text item" style="margin-top: 25px">
        {{ '产地：' + prodInfo.origin }}
      </div>

      <div class="text item" style="margin-top: 25px">
        {{ '产品数量：' + prodInfo.amount }}
      </div>

      <div class="text item" style="margin-top: 25px">
        {{ '上链时间：' + prodInfo.last_modified }}
      </div>

    </el-card>
    <!--    </el-col>-->
  </el-main>
</template>

<script>
import { getProdInfo } from '@/api/queries'

export default {
  name: 'QueryProdInfo',
  data() {
    return {
      form: {
        batch_id: ''
      },
      prodInfo: {
        amount: '',
        origin: '',
        name: '',
        last_modified: ''
      },
      input_disabled: false
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    if (id > 0) {
      console.log(id)
      this.form.batch_id = id
      this.input_disabled = true
      this.fetchData(id)
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          getProdInfo('regulator', this.form.batch_id).then(response => {
            this.prodInfo.name = response.data.name
            this.prodInfo.amount = response.data.amount
            this.prodInfo.origin = response.data.origin
            this.prodInfo.last_modified = response.data.last_modified
          })
        }
      })
    },
    fetchData(id) {
      getProdInfo('regulator', id).then(response => {
        console.log(response)
        this.prodInfo.name = response.data.name
        this.prodInfo.amount = response.data.amount
        this.prodInfo.origin = response.data.origin
        this.prodInfo.last_modified = response.data.last_modified
      })
    }
  }
}
</script>

<style scoped>

</style>
