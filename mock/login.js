import Mock from 'mockjs'

const data = {
    "username": "admin",
    "realname": "管理员",
    "mobile": "13333333333",
    "address": "5.5互联网产业园"
}

Mock.mock('/Wechat/Login', 'post', data)

export default Mock;