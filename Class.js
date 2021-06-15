class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height*this.width;
    }
}

let rec = new Rectangle(10,10);
console.log(rec.area())
