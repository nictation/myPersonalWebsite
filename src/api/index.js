import request from "./request";

import mockRequest from './mock'

export const getSchoolList = ()=>mockRequest.get('/school')

export const getImageList = ()=>mockRequest.get('/image')

export const getBookList = ()=>mockRequest.get('/book')

export const getFilmList = ()=>mockRequest.get('/film')

export const getMusicList = ()=>mockRequest.get('/music')