<template>
  <div class="feedback">
    <div class="title">
      <div class="title-top">机构列表</div>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="23" style="float: initial;margin: 0 auto">
          <div class="contents">
            <template>
              <div class="list">
                <div class="title">药品管理</div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="list">
                <div class="title">药品管理</div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="list">
                <div class="title">药品管理</div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="list">
                <div class="title">药品管理</div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="lists">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
              </div>
              <div class="btn">保存</div>
            </template>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    const cityOptions = ['上海', '北京', '广州', '深圳','广州', '深圳','上海', '北京', '广州', '深圳','广州', '深圳','上海', '北京', '广州', '深圳','广州', '深圳'];
    export default {
        data() {
            return {
                checkAll: false,
                checkedCities: ['上海', '北京'],
                cities: cityOptions,
                isIndeterminate: true
            };
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
    };
</script>


<style scoped lang="less">
.feedback {
  padding-bottom: 30px;
  .title {
    border: 1px solid #ccc;
    .title-top {
      width: 100%;
      height: 60px;
      background: rgba(243, 243, 243, 1);
      padding: 0 30px;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      line-height: 60px;
    }
    .title-select {
      width: 100%;
      font-size: 14px;
      font-weight: bold;
      line-height: 60px;
      span {
        margin: 0 30px;
        &.ids {
          margin-left: 30px;
        }
      }
      .el-input {
        width: 217px;
        margin-right: 30px;
      }
      .el-date-editor--daterange {
        width: 250px;
      }
    }
  }
  .contents {
    margin-top: 30px;
    box-sizing: border-box;
    .list{
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      .title{
        height: 40px;
        padding-left: 20px;
        width: 100%;
        box-sizing: border-box;
        border-bottom: none;
        line-height: 40px;
      }
      .el-checkbox{
        width: 16.66%;
        margin-right: 0;
        height: 40px;
        line-height: 40px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        padding-left: 20px;
        border-right: none;
        border-bottom: none;
        &:nth-child(6n){
          border-right: 1px solid #ccc;
        }
      }
    }
    .lists{
      width: 100%;
      text-align: center;
    }
    .btn{
      width: 300px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: rgba(26, 188, 156, 1);
      color: #fff;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
}
</style>
