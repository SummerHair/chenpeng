<template>
    <div class="details">
      <div class="title">反馈类型</div>
      <div class="btn">
        <span>产品改善意见</span>
      </div>
      <div class="title">反馈内容</div>
      <div class="content">
        <p>尊敬的用户，为了给您带来更好的体验，视频服务业务将于2019年4月22日22：00-2019年4月23日09:00期间进行系统升级，升级期间视频服务将暂时下线。给您带来的不便，敬请谅解。感谢您一如既往的支持。</p>
        <el-image style="width: 240px; height: 240px" src="http://i1.hdslb.com/bfs/archive/f47d9b1af8b8c790a6a1ebdde3f0c0943d726869.jpg"></el-image>
        <el-image style="width: 240px; height: 240px" src="http://i1.hdslb.com/bfs/archive/f47d9b1af8b8c790a6a1ebdde3f0c0943d726869.jpg"></el-image>
        <el-image style="width: 240px; height: 240px" src="http://i1.hdslb.com/bfs/archive/f47d9b1af8b8c790a6a1ebdde3f0c0943d726869.jpg"></el-image>
      </div>
    </div>
</template>

<script>
    export default {
        name: "details"
    }
</script>

<style scoped lang="less">
.details{
  padding: 30px 30px;
  box-sizing: border-box;
  .title{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .btn{
  margin-bottom: 50px;
    span{
      padding: 20px 20px;
      font-size: 16px;
      background: rgba(242, 242, 242, 1);
    }
  }
  .content{
    font-size: 14px;
    p{
      margin-bottom: 10px;
    }
  }
}
</style>
