<template>
  <el-main>
    <h1>查询物流详情</h1>

    <el-divider />

    <el-form ref="form" :model="form">
      <el-form-item label="物流编号">
        <el-input
          v-model="form.logistics_id"
        />
      </el-form-item>

      <el-form-item style="margin-top: 30px">
        <el-button type="primary" @click="onSubmit()">查询</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>

    <h3>物流记录</h3>

    <div class="block" style="margin-top: 30px">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in logistics_record_pub"
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

    <h3>操作人员身份记录</h3>

    <div class="block" style="margin-top: 30px">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in logistics_record_pri"
          :key="index"
          :type="'primary'"
          :color="'#8B008B'"
          :size="'large'"
          :timestamp="activity.record_time"
        >
          操作人员：{{ activity.operator }}

          <el-collapse style="margin-top: 15px">
            <el-collapse-item title="操作节点ID (Peer ID)" name="1">
              <div>{{ activity.peer_id }}</div>
            </el-collapse-item>

          </el-collapse>
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
      logistics_record_pub: null,
      logistics_record_pri: null
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    if (id > 0) {
      this.fetchData(id)
      this.form.logistics_id = id
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          getLogisticsInfo('logistics', this.form.logistics_id).then(response => {
            console.log(response.data)
            this.logistics_record_pub = response.data.public.items
            this.logistics_record_pri = response.data.private.items
          })
        }
      })
    },
    fetchData(id) {
      getLogisticsInfo('logistics', id).then(response => {
        this.logistics_record_pub = response.data.public.items
        this.logistics_record_pri = response.data.private.items
      })
    }
  }
}
</script>

<style scoped>

</style>
