import request from '@/utils/request'

export function getProdInfo(org, batchID) {
  return request({
    url: '/' + org + '/product/' + batchID,
    method: 'get',
    params: {}
  })
}

export function getOrderInfo(org, orderID, collection) {
  return request({
    url: '/' + org + '/order/' + orderID,
    method: 'get',
    params: { collection }
  })
}

export function getLogisticsInfo(org, logisticsID) {
  return request({
    url: '/' + org + '/tracking/' + logisticsID,
    method: 'get',
    params: {}
  })
}
