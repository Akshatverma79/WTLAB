const student={
    name:"Amit",
    showName:function(){
        setTimeout(function(){
            console.log(this.name);
        },1000);
    }
};
student.showName(); //undefined