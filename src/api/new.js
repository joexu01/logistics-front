import request from '@/utils/request'

export function newProdInfo(org, data) {
  return request({
    url: '/' + org + '/product',
    method: 'post',
    data
  })
}

export function newOrder(org, data) {
  return request({
    url: '/' + org + '/order',
    method: 'post',
    data
  })
}

export function sendRecord(data) {
  return request({
    url: '/manufacturer/send',
    method: 'post',
    data
  })
}

export function updateLogisticsRecord(id, data) {
  return request({
    url: '/logistics/update/' + id,
    method: 'post',
    data
  })
}

export function signForGoods(org, trackingID, data) {
  return request({
    url: '/' + org + '/sign/' + trackingID,
    method: 'post',
    data
  })
}

export function acceptOrder(id, collection, data) {
  return request({
    url: '/manufacturer/order/accept/' + id,
    method: 'put',
    params: { collection },
    data
  })
}

export function rejectOrder(id, collection) {
  return request({
    url: '/manufacturer/order/reject/' + id,
    method: 'get',
    params: { collection }
  })
}
