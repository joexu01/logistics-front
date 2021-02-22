<template>
  <el-main>
    <el-button @click="onSubmit">run</el-button>
    <br /><br />
    <el-form ref="form" label-width="160px" style="width: 60%">
      <el-input
        label="端口号"
        v-model="query.port"
        placeholder="请输入端口号"
      ></el-input>
      <br /><br />
      <el-input
        v-model="query.resp_msg"
        label="响应消息"
        placeholder="请输入响应消息"
      ></el-input>
    </el-form>

    <br /><br />
    <div class="border-radius: 2px">{{ output }}</div>
  </el-main>
</template>

<script>
import { getRun, getOutPut } from "@/api/certs";
export default {
  data() {
    return {
      query: {
        port: "7838",
        resp_msg: "Hello, Client!",
      },
      output: "",
    };
  },
  methods: {
    onSubmit() {
      getRun(this.query).then((e) => {
        const getOutPutWrapper = () => {
          getOutPut().then((e) => {
            this.output = e && e.data;
          });
        };
        setTimeout(getOutPutWrapper, 5000);
      });
    },
  },
};
</script>
