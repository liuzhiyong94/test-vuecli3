import Mock from 'mockjs'

// const data = {
//     "username": "admin",
//     "realname": "管理员",
//     "mobile": "13333333333",
//     "address": "5.5互联网产业园"
// }

const mockData = {
    'name|0-100': 0
}

// const data = {
//     "code": 200,
//     "msg": "",
//     "data": mockData
// }

Mock.mock('/api/Wechat/Login', 'post', mockData)

export default Mock;