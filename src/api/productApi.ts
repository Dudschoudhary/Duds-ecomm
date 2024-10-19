import axios from "axios";

class ProductApi {
    private urlApi:string = "https://fakestoreapi.com/products";

    public async fetchProducts(){
        try{
            const responce = await axios.get(this.urlApi);
            return responce.data;
        }catch(error){
            console.error("error!",error)
        }   
    }
}

const productApi = new ProductApi();
export default productApi;