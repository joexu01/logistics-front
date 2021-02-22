import request from '@/utils/request'

export function getCerts(data) {
  return request(
    {
      url: '/certs/generate',
      method: 'post',
      data
    }
  )
}

export function getRun(query) {
  return request(
    {
      url: '/server/start',
      method: 'get',
      params: query
    }
  )
}

export function getOutPut() {
  return request(
    {
      url: '/server/output',
      method: 'get'
    }
  )
}
