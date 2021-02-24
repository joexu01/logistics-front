<template>
  <el-main>
    <h1>查询物流详情</h1>

    <el-divider />

    <el-form ref="form" :model="form">
      <el-form-item label="物流编号">
        <el-input
          v-model="form.logistics_id"
          :disabled="input_disabled"
        />
      </el-form-item>

      <el-form-item style="margin-top: 30px">
        <el-button type="primary" @click="onSubmit()">查询</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>

    <div class="block" style="margin-top: 30px">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in logistics_record"
          :key="index"
          :type="'primary'"
          :color="'#00BFFF'"
          :size="'large'"
          :timestamp="activity.record_time"
        >
          {{ activity.status }}
        </el-timeline-item>
      </el-timeline>
    </div>

  </el-main>
</template>

<script>
import { getLogisticsInfo } from '@/api/queries'

export default {
  name: 'QueryLogisticsInfo',
  data() {
    return {
      form: {
        logistics_id: ''
      },
      logistics_record: null,
      input_disabled: false
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    if (id > 0) {
      console.log(id)
      this.form.logistics_id = id
      this.input_disabled = true
      this.fetchData(id)
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          getLogisticsInfo('regulator', this.form.logistics_id).then(response => {
            this.logistics_record = response.data.items
          })
        }
      })
    },
    fetchData(id) {
      getLogisticsInfo('regulator', id).then(response => {
        this.logistics_record = response.data.items
      })
    }
  }
}
</script>

<style scoped>

</style>
