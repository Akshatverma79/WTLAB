const student={
    name:"John",
    showName:function(){
        setTimeout(()=>{
            console.log(this.name);
        },1000);
}
};
student.showName();