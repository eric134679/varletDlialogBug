import request from '@/request/axios.js'

export function getAliAppConfig() {
    return request.get(`aliapp/config`)
}
