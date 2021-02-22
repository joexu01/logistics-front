<template>
  <el-main>
    <el-row>
      <a
        href="http://127.0.0.1:8880/certs/download/server/ca_cert"
        target="_blank"
        ><el-button>CA根证书</el-button></a
      >
      <!-- </el-row> -->
      <br /><br />
      <!-- <el-row> -->
      <a
        href="http://127.0.0.1:8880/certs/download/server/ca_server_cert"
        target="_blank"
        ><el-button type="primary" plain>服务器认证证书</el-button></a
      >

      <a
        href="http://127.0.0.1:8880/certs/download/server/server_pkey"
        target="_blank"
        ><el-button type="primary" plain>服务器私钥</el-button></a
      >
      <!-- </el-row> -->
      <br /><br />
      <!-- <el-row> -->
      <a
        href="http://127.0.0.1:8880/certs/download/client/ca_client_cert"
        target="_blank"
        ><el-button type="info" round>客户端认证证书</el-button></a
      >

      <a
        href="http://127.0.0.1:8880/certs/download/client/client_pkey"
        target="_blank"
        ><el-button type="info" round>客户端私钥</el-button></a
      >
    </el-row>
  </el-main>
</template>

<script>
</script>
