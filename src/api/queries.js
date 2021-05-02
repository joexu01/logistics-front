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
    url: '/' + org + '/order/read/' + orderID,
    method: 'get',
    params: { collection }
  })
}
export function getOrderInfoRetailer(org, orderID, collection) {
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

export function getLogisticsInfoPri(logisticsID) {
  return request({
    url: '/regulator/private/' + logisticsID,
    method: 'get',
    params: {}
  })
}

export function getQRCode(orderID, collection) {
  return request({
    url: '/qrcode/order/' + orderID,
    method: 'get',
    params: { collection }
  })
}

export function getDefaultImage() {
  return request({
    url: '/qrcode/default',
    method: 'get',
    params: {}
  })
}

export function getUnacceptedOrders(collection) {
  return request({
    url: '/manufacturer/order/unaccepted',
    method: 'get',
    params: { collection }
  })
}
