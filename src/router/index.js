import Vue from "vue";
import Router from "vue-router";
import layout from "@/components/layout";
import sign from "@/page/sign"; //登录
import home from "@/page/home"; //首页
import material from "@/page/material"; //修改资料
import editpassword from "@/page/editpassword"; //修改密码
import feedback from "@/page/feedback"; //反馈管理
import feedbackdetails from "@/page/feedback/details"; //反馈管理详情
import complaint from "@/page/complaint"; //投诉管理
import complaintdetails from "@/page/complaint/details"; //投诉管理详情
import patient from "@/page/patient"; //患者列表
import database from "@/page/database"; //数据库
import mechanismlist from "@/page/mechanism/mechanismlist"; //机构列表
import jurisdiction from "@/page/mechanism/jurisdiction"; //机构权限
import addmechanism from "@/page/mechanism/addmechanism"; //添加机构
import memberlist from "@/page/member/memberlist"; //成员管理
import memberjurisdiction from "@/page/member/jurisdiction"; //成员管理
import addmember from "@/page/member/addmember"; //添加管理
import doctor from "@/page/doctor"; //医生列表
import doctordetails from "@/page/doctor/details"; //医生详情
import adddoctor from "@/page/doctor/adddoctor"; //新增医生
import department from "@/page/department"; //部门管理
import departmentjurisdiction from "@/page/department/jurisdiction"; //部门管理
import adddepartment from "@/page/department/adddepartment"; //新增科室
import encyclopedias from "@/page/encyclopedias"; //健康百科
import article from "@/page/article"; //文章列表
import addeditarticle from "@/page/article/addeditarticle"; //文章新增编辑
import video from "@/page/video"; //视频列表
import addeditvideo from "@/page/video/addeditvideo"; //视频新增编辑
import productList from "@/page/product/productList"; //产品管理
import journal from "@/page/journal/journallist"; //操作日志
import addproduct from "@/page/product/addProduct"; //添加产品
import productdetails from "@/page/product/productDetails"; //添加产品
import adlist from "@/page/adList/adList"; //广告列表
import addad from "@/page/adList/addad"; //添加广告

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/sign",
      name: "sign",
      component: sign
    },
    {
      path: "/",
      name: "sign",
      component: sign
    },
    {
      path: "/home",
      name: "home",
      component: home,
      redirect: "/layout", //重定向，初始化页面
      children: [
        {
          path: "/layout",
          name: "layout",
          component: layout
        },
        {
          path: "/material",
          name: "material",
          component: material
        },
        {
          path: "/editpassword",
          name: "editpassword",
          component: editpassword
        },
        {
          path: "/feedback",
          name: "feedback",
          component: feedback
        },
        {
          path: "/feedbackdetails",
          name: "feedbackdetails",
          component: feedbackdetails
        },
        {
          path: "/complaint",
          name: "complaint",
          component: complaint
        },
        {
          path: "/complaintdetails",
          name: "complaintdetails",
          component: complaintdetails
        },
        {
          path: "/patient",
          name: "patient",
          component: patient
        },
        {
          path: "/database",
          name: "database",
          component: database
        },
        {
          path: "/journal",
          name: "journal",
          component: journal
        },
        {
          path: "/mechanismlist",
          name: "mechanismlist",
          component: mechanismlist
        },
        {
          path: "/memberjurisdiction",
          name: "memberjurisdiction",
          component: memberjurisdiction
        },
        {
          path: "/jurisdiction",
          name: "jurisdiction",
          component: jurisdiction
        },
        {
          path: "/memberlist",
          name: "memberlist",
          component: memberlist
        },
        {
          path: "/addmember",
          name: "addmember",
          component: addmember
        },
        {
          path: "/addmechanism",
          name: "addmechanism",
          component: addmechanism
        },
        {
          path: "/doctor",
          name: "doctor",
          component: doctor
        },
        {
          path: "/doctordetails",
          name: "doctordetails",
          component: doctordetails
        },
        {
          path: "/adddoctor",
          name: "adddoctor",
          component: adddoctor
        },
        {
          path: "/department",
          name: "department",
          component: department
        },
        {
          path: "/departmentjurisdiction",
          name: "departmentjurisdiction",
          component: departmentjurisdiction
        },
        {
          path: "/adddepartment",
          name: "adddepartment",
          component: adddepartment
        },
        {
          path: "/encyclopedias",
          name: "encyclopedias",
          component: encyclopedias
        },
        {
          path: "/article",
          name: "article",
          component: article
        },
        {
          path: "/addeditarticle",
          name: "addeditarticle",
          component: addeditarticle
        },
        {
          path: "/video",
          name: "video",
          component: video
        },
        {
          path: "/addeditvideo",
          name: "addeditvideo",
          component: addeditvideo
        },
        {
          path: "/productList",
          name: "productList",
          component: productList
        },
        {
          path: "/addproduct",
          name: "addproduct",
          component: addproduct
        },
        {
          path: "/productdetails",
          name: "productdetails",
          component: productdetails
        },
        {
          path: "/adlist",
          name: "adlist",
          component: adlist
        },
        {
          path: "/addad",
          name: "addad",
          component: addad
        }
      ]
    }
  ]
});
