class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height*this.width;
    }
}

const rec = new Rectangle(10,10);
console.log(rec.calcArea())
