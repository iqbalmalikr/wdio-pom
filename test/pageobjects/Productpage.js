import Page from "./page.js"
import { $ } from "@wdio/globals"

class ProductPage {
    
    get addToCartButton() {
        return $('btn_primary.btn_small.btn_inventory'); 
    }

    get cartIcon() {
        return $('shopping-cart-link'); 
    }

    
    async addItemToCart() {
        await this.addToCartButton.click();
    }

   
    async goToCart() {
        await this.cartIcon.click();
    }
}

export default new ProductPage();
