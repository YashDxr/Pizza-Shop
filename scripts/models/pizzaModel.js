// Data Modeling - Data coming from URL is unstructured and has many unwanted data 
//    - so we structure the fake data according to our requirement

class Pizza{
    constructor(id , name , price , url , desc){
        // this - keyword
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.desc = desc;
        this.isAddedInCart = false;
    }
}
export default Pizza;