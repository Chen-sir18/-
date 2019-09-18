
let obj = {
	name: 'zhangsan',
	age: 18
}

//export {
//	obj
//}

//export let name = './module2.js'

export default obj


//流程:   用*导出另一个文件的默认导出时会被默认导出会被忽略当取别名时忽略的默认导出出现了
//module1.js
//export default obj
//导出module1.js *from './module2.js'

//.html

//import * as module1 from './js/module1.js'  //import * as 别名 from  文件路径

//结束：
//module1 = {
//	c:1，
//  module2:{
//	name: 'module2'
//	default: {
//	name: 'zhangsan',
//	age: 18
//}
//}
//}
