<template>
  <el-main>
    <h1>制造商-Manufacturer</h1>
    <el-col :span="24" :offset="0">

      <el-card>
        <div slot="header" class="clearfix">
          <span>订单管理</span>
        </div>

        <el-row>
          <router-link :to="'/manufacturer/order'" class="el-button el-button--primary">
            订单详情
          </router-link>

          <router-link :to="'/manufacturer/order/unaccepted'" class="el-button el-button--primary">
            零售商订单请求
          </router-link>
        </el-row>

        <el-row style="margin-top: 15px">
          <router-link :to="'/manufacturer/qrcode'" class="el-button el-button--primary">
            生成追溯二维码
          </router-link>
        </el-row>

      </el-card>

      <el-card style="margin-top: 35px">
        <div slot="header" class="clearfix">
          <span>查询服务</span>
        </div>
        <el-row>
          <router-link :to="'/manufacturer/tracking'" class="el-button el-button--primary">
            物流信息
          </router-link>
          <router-link :to="'/manufacturer/product'" class="el-button el-button--primary">
            批次信息
          </router-link>

        </el-row>
      </el-card>

      <el-card style="margin-top: 35px">
        <div slot="header" class="clearfix">
          <span>数据上链</span>
        </div>
        <el-row>
          <router-link :to="'/manufacturer/new/product'" class="el-button el-button--success">
            批次信息
          </router-link>

          <router-link :to="'/manufacturer/new/send'" class="el-button el-button--warning">
            发货记录上链
          </router-link>
        </el-row>

      </el-card>
    </el-col>

  </el-main>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>
