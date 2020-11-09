// (1) a1、a2两个元素的实际宽高(自border起，不含margin)是多少?
// a1 142px a2 100px
// (2) 父级元素container的实际宽高是多少?
// 360px
// 2、使用flex布局，如何实现把同级的八个元素分两行平均摆放?
// 父元素
    // display: flex;
    // flex-wrap: wrap;
// 子元素
    // flex: 0 0 25%;
// 3、javascript 的 typeof 可能返回哪些基本数据类型?
// undefined,string,boolean,number,symbol
// 4、请阅读以下代码:
//     console.log('main1')
// process.nextTick(() => {
//     console.log('next tick1')
// })
// setTimeout(() => {
//     console.log('settimeout')
//     process.nextTick(() => {
//         console.log('next tick2')
//     })
// }, 0)
// setTimeout(() => {
//     console.log('setTimeout2')
//     process.nextTick(() => {
//         console.log('next tick3')
//     })
// })
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     })
//     console.log('promise1')
// }).then(() => {
//     console.log('promise2')
// })
// console.log(‘main2')
// 请问以上代码的输出顺序是什么?(执行环境为Node 11.0版本以上)
// main1 ,promise1, main2 ,next tick1 ,settimeout ,next tick2 ,setTimeout2 .next tick3 ,promise2


// 5、以下代码用来访问redis:
//     var redis = require('redis')
// var client = redis.createClient()
// client.set('key', 'value', function(err, data) {
//     if(err) {
//         console.error(err.message)
//         process.exit(1)
//     }
//     client.get('key', function(err, data) {
//         if(err) {
//             console.error(err.message)
//             return
//         }
//         console.log(data)
//         process.exit(0)
//     }) })
// (1)请用Promise的异步调用方式重写。
// client.set('key', 'value').then((err ,data) => {
//     new Promise((resolve, reject) => {
//         if (err) {
//             reject('jartto: promise error');
//         } else {
//             resolve(data)
//         }
//     }).then((data) => {
//         console.log(data)
//         process.exit(0)
//     }).catch(err => {
//         console.error(err.message)
//         process.exit(1)
//     });
//
// })

// (2)在经历了多个异步回调后，如何拿到完整的堆栈信息(stack trace)?


// 6、阅读以下代码
// const obj = {
//     a: "12",
//     b: "23",
//     first: {
//         c: "34",
//         d: "45",
//         second: { e: "56", f: "67", three: { g: "78", h: "89", i: "90" } },
//     }, }
// console.log(obj.allKeys())
// // => [a,b,c,d,e,f,g,h,i]
// 请实现allKeys。

// Object.prototype.allKeys = function (obj) {
//     var keys = []
//     function getKeys (obj) {
//         for(var key in obj){
//             if (Object.prototype.toString.call(obj[key]) === '[object  Object]') {
//                 getKeys(obj[key])
//             } else {
//                 keys.push(key)
//             }
//         }
//     }
//     getKeys(obj)
//     return keys
// }
