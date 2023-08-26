const  toggle = (...args)=>{
    let index = 0;
    return function(){
        if(args.length > 0){
            const arg = args[index];
            console.log(arg);
            index = (index + 1) % args.length;
        }
    }
}

const hello = toggle("hello");
hello();
hello();
hello();

const onOff = toggle("1", "2", "3");
onOff();//1
onOff();//2
onOff();//3
onOff();//1
