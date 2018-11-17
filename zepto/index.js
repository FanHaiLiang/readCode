// 整体思想
var Zepto = (function(){
    var $,
        zepto = {},
        // 用于存放所有对外放开的方法 
        fn = {},
        emptyArray = []
    
    // ...省略N行代码...
    
    zepto.Z = function(dom, selector) {
        dom = dom || []
        dom.__proto__ = $.fn
        dom.selector = selector || ''
        return dom
      }

    zepto.init = function(selector, context) {
        var dom
    
        // ...此处省略N行...
        
        // create a new Zepto collection from the nodes found
        return zepto.Z(dom, selector)
    }
    //存放所有的对外的方法
    $.fn = {
        //相当于new Array()只在上面执行了1次
        forEach: emptyArray.forEach,
        reduce:emptyArray.reduce,
        //相当于new Array()执行了两次
        forEach: [].forEach,
        reduce:[].reduce,
    }
    
    $ = function(selector, context){
        return zepto.init(selector, context)
    }
    
    // ...省略N行代码...
    
    return $
})()

window.Zepto = Zepto
window.$ === undefined && (window.$ = Zepto)