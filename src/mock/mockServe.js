import Mock from "mockjs";
import school from './school.json'
import image from './image.json'
import film from './film.json'
import music from './music.json'
import book from './book.json'

Mock.mock("/mock/school",'get',{code:200,data:school})

Mock.mock("/mock/image",'get',{code:200,data:image})

Mock.mock("/mock/book",'get',{code:200,data:book})

Mock.mock("/mock/music",'get',{code:200,data:music})

Mock.mock("/mock/film",'get',{code:200,data:film})