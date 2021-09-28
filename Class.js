class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height*this.width;
    }
}

var rec = new Rectangle(10, 20);
console.log(rec.calcArea())
