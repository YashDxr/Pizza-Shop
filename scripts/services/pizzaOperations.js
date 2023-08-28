import makeNetworkCall from "./apiClient.js";
import {URL} from '../utils/config.js';
import Pizza from "../models/pizzaModel.js";


const pizzaOperations = {
    pizzas:[],
    searchPizza(pizzaid){
        const pizzaObject = this.pizzas.find((pizza) => pizza.id == pizzaid);
        pizzaObject.isAddedInCart = true;
    },
    async getPizzas(){

        // getData from apiClient 
        const data = await makeNetworkCall(URL);
        const pizzaJSON = data["Vegetarian"];
    
    
        const pizzas = pizzaJSON.map(singlePizza => {
            const pizzaObject = new Pizza(
                    singlePizza.id , 
                    singlePizza.name , 
                    singlePizza.price , 
                    singlePizza.assets.product_details_page[0].url , 
                    singlePizza.menu_description);
                    return pizzaObject
        })
        this.pizzas = pizzas;
        return pizzas;
        
        //data mapping according to requirement for model
    
    }
}

export default pizzaOperations;
