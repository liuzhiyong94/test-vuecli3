/**
 * Mockjs数据生成规则
 * 
 * 1.重复指定的字符串string，重复次数min-max: 'name|min-max': string
 * 数据示例: {name: "mockjsmockjs"}, {name: "mockjsmockjsmockjsmockjsmockjsmockjs"}
 * 
 * 2.重复指定的字符串string，重复次数count: 'name|count': string
 * 数据示例: {name: "mockjsmockjs"}
 * 
 * 3.初始值为number，每次自动加1: 'name|+1': number
 * 数据示例: {name: 10}, {name: 11}, {name: 12}
 * 
 * 4.生成一个大于等于min、小于等于max的整数，属性值number只是用来确定类型: 'name|min-max': number
 * 数据示例: {name: 14}, {name: 62}, {name: 36}
 */

import Mock from 'mockjs'

const mockData1 = {
    'name|0-1': "mockjs"
}

const mockData2 = {
    'name|2': "mockjs"
}

const mockData3 = {
    'name|+1': 10
}

const mockData4 = {
    'name|0-100': 0
}


Mock.mock('/testapi', 'post', mockData1)
Mock.mock('/testapi', 'post', mockData2)
Mock.mock('/testapi', 'post', mockData3)
Mock.mock('/testapi', 'post', mockData4)

export default Mock;