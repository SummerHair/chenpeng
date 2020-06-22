<template>
    <div class="details">
      <div class="title">反馈内容</div>
      <div class="content">
        <p>尊敬的用户，为了给您带来更好的体验，视频服务业务将于2019年4月22日22：00-2019年4月23日09:00期间进行系统升级，升级期间视频服务将暂时下线。给您带来的不便，敬请谅解。感谢您一如既往的支持。</p>
      </div>
      <div class="btn">
        <span>投诉意见反馈</span>
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
    margin-bottom: 30px;
  }
  .content{
    font-size: 14px;
    p{
      margin-bottom: 10px;
    }
  }
  .btn{
    background: rgba(26, 188, 156, 1);
    color: #fff;
    font-size: 14px;
    width: 240px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin: 0 auto;
    margin-top: 200px;
  }
}
</style>
