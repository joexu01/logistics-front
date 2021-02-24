<template>
  <el-main>
    <h1>产品信息上链</h1>

    <el-divider />

    <el-form ref="form" :model="form">
      <el-form-item label="批次编号">
        <el-input
          v-model="form.batch_num"
        />
      </el-form-item>

      <el-form-item label="数量">
        <el-input
          v-model="form.amount"
        />
      </el-form-item>

      <el-form-item label="产地">
        <el-input
          v-model="form.origin"
        />
      </el-form-item>

      <el-form-item label="商品名称">
        <el-input
          v-model="form.name"
        />
      </el-form-item>

      <el-form-item style="margin-top: 30px">
        <el-button type="primary" @click="onSubmit()">产品信息上链</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>

  </el-main>
</template>

<script>
import { newProdInfo } from '@/api/new'

export default {
  name: 'NewProdInfo',
  data() {
    return {
      form: {
        batch_num: '',
        amount: null,
        origin: '',
        name: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.form.amount = parseInt(this.form.amount)
          newProdInfo('manufacturer', this.form).then(() => {
            // this.$router.push('/manufacturer/product/'+this.form.batch_num)
            this.$notify({
              title: 'Success',
              message: '数据上链成功',
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
