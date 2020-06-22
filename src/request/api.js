import { get, post } from './http'
export const upload = 'http://218.78.69.174:8088/uploadUtil'
export const sign = data => post('/manage/login', data);//登录
export const signout = data => post('/manage/loginOut', data);//退出登录
export const initdepartment = data => post('/manage/department/selectPageByName', data);//科室列表初始化
export const adddepartment = data => post('/manage/department/addOrUpdate', data);//新增科室
export const departmentall = data => post('/manage/department/selectAll', data);//科室列表查询
export const adddoctor = data => post('/manage/doctor/addOrUpdate', data);//新增医生
export const doctors = data => post('/manage/doctor/selectPageByCondition', data);//医生列表初始化
export const doctorsdetails = data => post('/manage/doctor/selectOne', data);//医生详情
export const encyclopedialist = data => post('/manage/encyclopedia/selectPage', data);//健康百科
export const addencyclopedialist = data => post('/manage/encyclopedia/addOrUpdate', data);//新增健康百科
export const encyclopedialistall = data => post('/manage/encyclopedia/selectAll', data);//健康百科分类目录
export const articlelist = data => post('/manage/encyclopediaDetails/selectPageByCondition', data);//文章视频列表
export const addeiitarticle = data => post('/manage/encyclopediaDetails/addOrUpdate', data);//文章视频新增编辑
export const articleselectone = data => post('/manage/encyclopediaDetails/selectOne', data);//文章视频详情
export const productlist = data => post('/manage/treasureBox/selectPageByCondition', data);//产品列表初始化
export const inquireiproduct = data => post('/manage/treasureBox/selectOne', data);//查询产品详情
export const addproduct = data => post('/manage/treasureBox/addOrUpdate', data);//产品列表新增编辑
export const inquireadlist = data => post('/manage/advertisement/selectPageByCondition', data);//广告列表查询
export const inquiread = data => post('/manage/advertisement/selectOne', data);//广告详情
export const addadlist = data => post('/manage/advertisement/addOrUpdate', data);//广告新增
