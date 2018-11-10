window.onload = function(){
    new Vue({
        el:'#my',//element
        data:{ //数据
            name:'sonia',
            age:18,
            obj:{a:'aa',b:'bb'},
            arr:['a','b','c'],
            lists:[{name:'手机',state:'0'},
                {name:'电脑',state:'1'},
                {name:'化妆品',state:'0'},
                {name:'包',state:'2'}]
        },
        methods:{   //方法
            add:function(name){
                if (name =='') return;
                this.lists.unshift({name:name,state:'1'});
                this.name="";
            },
            del:function(index){
                this.lists.splice(index,1);  //index位置   1个数
            }
        },
        filters:{  //过滤器
            stateFilter:function(type){
                switch(type){
                    case '0':
                        return '未采购';
                    case '1':
                        return '采购中';
                    case '2':
                        return '已采购';
                    default:
                        return '未采购';
                }
            }
        }
    })
}