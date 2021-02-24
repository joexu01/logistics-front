<template>
  <el-main>
    <h1>零售商1-Retailer1</h1>
    <el-col :span="24" :offset="0">
      <el-card>
        <div slot="header" class="clearfix">
          <span>查询服务</span>
        </div>
        <el-row>
          <router-link :to="'/retailer1/product'" class="el-button el-button--primary">
            批次信息
          </router-link>

          <router-link :to="'/retailer1/tracking'" class="el-button el-button--primary">
            物流信息
          </router-link>
        </el-row>

        <el-row style="margin-top: 15px">
          <router-link :to="'/retailer1/order'" class="el-button el-button--primary">
            订单详情
          </router-link>
        </el-row>

      </el-card>

      <el-card style="margin-top: 35px">
        <div slot="header" class="clearfix">
          <span>数据上链</span>
        </div>

        <el-row>

          <router-link :to="'/retailer1/sign'" class="el-button el-button--warning">
            货物签收记录上链
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
