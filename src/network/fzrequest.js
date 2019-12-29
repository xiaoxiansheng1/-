import {request} from  './request.js'


export function recommdata(){
  return request({
    url: '/personalized/newsong'
  })
}

export function swiper(){
  return request({
    url: '/banner?type=1'
  })
}

export function songsdata(){
  return request({
    url: '/personalized?limit=6'
  })
}