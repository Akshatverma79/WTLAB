const obj={
    value:10,
    method:()=>{
        console.log(this.value);
    }
};
obj.method();