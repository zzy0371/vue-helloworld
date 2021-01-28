let obj = {
	name:"qiku",
	age:1
}
// ES6可以匿名导出一个对象 导入时名字随意  比如import obj from './data'
export default obj

let obj2 = {
	name:"qiku",
	age:2
}

let obj3 = {
	name:"qiku",
	age:3
}
// ES6可以部分导出 一些变量 导入时名字必须和导出时一直 并且带上{} 比如 import {obj2,obj3} from './data/index.js'
console.log("obj3",obj3);

export {obj2,obj3}