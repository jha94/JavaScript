class Parent{
    respect(){
        console.log('Father earned respect');
    }
}

class Child extends Parent{
    wealth(){
        console.log('Son earned wealth')
    }
}

let ch1 = new Child();
ch1.respect()
ch1.wealth();
