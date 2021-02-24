<template>
  <el-main>
    <h1>监管机构-Regulator</h1>
    <el-col :span="24" :offset="0">
      <el-card>
        <div slot="header" class="clearfix">
          <span>查询服务</span>
        </div>
        <el-row>
          <router-link :to="'/regulator/product'" class="el-button el-button--primary">
            批次信息
          </router-link>

          <router-link :to="'/regulator/tracking'" class="el-button el-button--primary">
            物流信息
          </router-link>
        </el-row>

        <el-row style="margin-top: 15px">
          <router-link :to="'/regulator/private'" class="el-button el-button--primary">
            物流关联人员查询
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
