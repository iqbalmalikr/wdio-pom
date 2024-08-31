import Page from "./page"
import { $ } from "@wdio/globals"

class ProductPage {

    get addToCartButton() {
        return $("#add-to-cart-sauce-labs-backpack"); 
    }

    get cartIcon() {
        return $("#shopping_cart_container"); 
    }
    

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

export default new ProductPage();
