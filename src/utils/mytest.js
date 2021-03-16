//栈类
class Stack {
  constructor () {
    this.data = [];
  }

  push (value) {
    this.data.push(value);
  }

  pop () {
    if(this.data.length === 0) {
      return undefined;
    }
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  size() {
    return this.data.length;
  }
}

//队列类
class Queue {
  constructor () {
    this.data = [];
  }

  enqueue (value) {
    this.data.push(value);
  }

  dequeue () {
    return this.data.shift();
  }

  front() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }
}

//链表类
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
class SingleList {
  constructor() {
    this.size = 0;  // 单链表的长度
    this.head = new Node('head');  // 表头节点
    this.currNode = '';  // 当前节点的指向
  }

  // 判断单链表是否为空
  isEmpty() {
    return this.size === 0;
  }

  // 获取单链表的最后一个节点
  findLast() {
    let currNode = this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 单链表的遍历显示
  display() {
    let result = '';
    let currNode = this.head;

    while (currNode) {
      result += currNode.data;
      currNode = currNode.next;
      if(currNode) {
        result += '->';
      }
    }
    console.log(result);
  }

  // 从当前位置向前移动 n 个节点。
  advance(n, currNode = this.head) {
    this.currNode = currNode;

    while ((n--) && this.currNode.prev) {
      this.currNode = this.currNode.prev;
    }

    return this.currNode;
  }

  // 在单链表中寻找item元素
  find(item) {
    let currNode = this.head;

    while (currNode && (currNode.data !== item)) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 显示当前节点
  show() {
    console.log(this.currNode.data);
  }

  // 获取单链表的长度
  getLength() {
    return this.size;
  }

  // 向单链表中插入元素
  insert(item, element) {
    let itemNode = this.find(item);

    if(!itemNode) {  // 如果item元素不存在
      return;
    }

    let newNode = new Node(element);

    newNode.next = itemNode.next; // 若currNode为最后一个节点，则currNode.next为空
    itemNode.next = newNode;

    this.size++;
  }

  // 在单链表中删除一个节点
  remove(item) {
    if(!this.find(item)) {  // item元素在单链表中不存在时
      return;
    }

    // 企图删除头结点
    if (item === 'head') {
      if (!(this.isEmpty())) {
        return;
      } else {
        this.head.next = null;
        return;
      }
    }

    let currNode = this.head;

    while (currNode.next.data !== item) {
      // 企图删除不存在的节点
      if (!currNode.next) {
        return;
      }
      currNode = currNode.next;
    }


    currNode.next = currNode.next.next;
    this.size--;
  }

  // 在单链表的尾部添加元素
  append(element) {
    let currNode = this.findLast();
    let newNode = new Node(element);

    currNode.next = newNode;
    this.size++;
  }

  // 清空单链表
  clear() {
    this.head.next = null;
    this.size = 0;
  }
}



// let newstack = new Queue();
// console.log(newstack.enqueue('第一个'));
// console.log(newstack.enqueue('第二个'));
// console.log(newstack.enqueue('第三个'));
// console.log(newstack.front());
// console.log(newstack.dequeue());
// console.log(newstack.front());
// console.log(newstack.isEmpty());
// console.log(newstack.size());



//原型链
// function Person (age) {
//   this.age = age;
// }
// function Earch() {
//   this.age = '46亿年';
//   this.name = '地球';
// }
// Person.prototype = new Earch();
// console.log(Person);
// let person = new Person();
// console.log(person.name);
// console.log(person.__proto__);
// console.log(person.__proto__.__proto__.__proto__);



//promise和settimeout执行顺序
// console.log('打印'+1);
// setTimeout(function(){
//   console.log('打印'+2);
// })
// new Promise(function(resolve,reject){
//   console.log('打印'+3);
//   resolve();
// }).then(() => {
//   console.log('打印'+4)
// });
// console.log('打印'+10);
// new Promise(function(resolve,reject){
//   resolve();
//   setTimeout(function () {
//     console.log('打印'+5);
//   });
// }).then(()=>{
//   console.log('打印'+6)
// });
//
// setTimeout(function(){
//   new Promise(function(resolve,reject){
//     console.log('打印'+7);
//   });
// })


//自定义绑定事件
// var listenerList = {
//   "message": function(e) {
//     console.log(e);
//   }
// }
//
// var ev = {
//   dispatch: function (eventKey) {
//     var args = Array.prototype.slice.call(arguments,1);
//     listenerList[eventKey].apply(this,args);
//     return this;
//   },
//   listener: function (eventKey, callback) {
//     if(typeof eventKey === 'string' && typeof callback === 'function') {
//       listenerList[eventKey] = callback;
//     }
//     return this;
//   }
// }
//
// var Bob = function (options) {
//   var _this = this;
//   var config = {
//     debug: false,
//     ...options,
//   }
//   this.on = ev.listener;
//   this.trigger = ev.dispatch;
//
//   if(config.debug) {
//     this.trigger("message",{a:"hello world"})
//   }
//   return this;
// }
//
// var bob = new Bob({debug:false});
// bob.on("message",function(args){
//   console.log( this )
//   console.log("事件参数信息",args);
// })
//
// bob.trigger("message",{a:"senbo"});//测试一下



//自定义绑定事件
// var MyEvent = {
//   on(name,func) {
//     this[name] = func;
//   },
//   fire(name) {
//     this[name]();
//   }
// }
// MyEvent.on('foo', function() {
//   console.log('load1');
// });
// MyEvent.fire('foo');

// const add = function add(x) {
//   return function (y) {
//     return x + y
//   }
// }
//
// const add1 = add(1)
//
// add1(2) === 3
// add1(20) === 21


