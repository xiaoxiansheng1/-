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

export function songsnewdata(){
  return request({
    url: '/top/playlist?limit=15&order=new'
  })
}

export function songshotdata(){
  return request({
    url: '/top/playlist?limit=15&order=hot'
  })
}

export function highquality(){
  return request({
    url: '/top/playlist/highquality?limit=15&cat=古风'
  })
}

export function huayu(){
  return request({
    url: '/top/playlist/highquality?limit=15&cat=华语'
  })
}

export function liuxing(){
  return request({
    url: '/top/playlist/highquality?limit=9&cat=流行'
  })
}

export function mingyao(){
  return request({
    url: '/top/playlist/highquality?limit=15&cat=民谣'
  })
}

export function dianzi(){
  return request({
    url: '/top/playlist/highquality?limit=12&cat=电子'
  })
}

export function qingyinyue(){
  return request({
    url: '/top/playlist/highquality?limit=15&cat=轻音乐'
  })
}

