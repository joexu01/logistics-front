<template>
  <el-main>
    <el-form ref="form" :model="form" label-width="160px" style="width: 60%">
      <el-form-item label="用户国家">
        <el-input v-model="form.client_c"
      /></el-form-item>
      <el-form-item label="用户省份">
        <el-input v-model="form.client_st"
      /></el-form-item>
      <el-form-item label="用户城市">
        <el-input v-model="form.client_l"
      /></el-form-item>
      <el-form-item label="用户机构">
        <el-input v-model="form.client_o"
      /></el-form-item>
      <el-form-item label="用户子部门">
        <el-input v-model="form.client_ou"
      /></el-form-item>
      <el-form-item label="用户通用名">
        <el-input v-model="form.client_cn"
      /></el-form-item>
      <el-form-item label="用户邮箱">
        <el-input v-model="form.client_email"
      /></el-form-item>

      <el-form-item label="服务国家">
        <el-input v-model="form.server_c"
      /></el-form-item>
      <el-form-item label="服务省份">
        <el-input v-model="form.server_st"
      /></el-form-item>
      <el-form-item label="服务城市">
        <el-input v-model="form.server_l"
      /></el-form-item>
      <el-form-item label="服务机构">
        <el-input v-model="form.server_o"
      /></el-form-item>
      <el-form-item label="服务部门">
        <el-input v-model="form.server_ou"
      /></el-form-item>
      <el-form-item label="服务通用名">
        <el-input v-model="form.server_cn"
      /></el-form-item>
      <el-form-item label="服务邮箱">
        <el-input v-model="form.server_email"
      /></el-form-item>

      <el-form-item label="CA国家">
        <el-input v-model="form.ca_c"
      /></el-form-item>
      <el-form-item label="CA省份">
        <el-input v-model="form.ca_st"
      /></el-form-item>
      <el-form-item label="CA城市">
        <el-input v-model="form.ca_l"
      /></el-form-item>
      <el-form-item label="CA机构">
        <el-input v-model="form.ca_o"
      /></el-form-item>
      <el-form-item label="CA子部门">
        <el-input v-model="form.ca_ou"
      /></el-form-item>
      <el-form-item label="CA通用名">
        <el-input v-model="form.ca_cn"
      /></el-form-item>
      <el-form-item label="CA邮箱">
        <el-input v-model="form.ca_email"
      /></el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit()">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import { getCerts } from "@/api/certs";

export default {
  data() {
    return {
      form: {
        client_c: "",
        client_st: "",
        client_l: "",
        client_o: "",
        client_ou: "",
        client_cn: "",
        client_email: "",
        server_c: "",
        server_st: "",
        server_l: "",
        server_o: "",
        server_ou: "",
        server_cn: "",
        server_email: "",
        ca_c: "",
        ca_st: "",
        ca_l: "",
        ca_o: "",
        ca_ou: "",
        ca_cn: "",
        ca_email: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$refs["form"].validate((valid) => {
        if (valid) {
          getCerts(this.form).then(() => {
            this.$notify({
              title: "Success",
              message: "成功",
              type: "success",
              duration: 2000,
            });
          });
        }
      });
    },
  },
};
</script>
