import Page from "./page"
import { $, expect } from "@wdio/globals"

class Homepage extends Page {
    
    get cartIcon() {
        return $("#shopping_cart_container");
    }

    get addToCartButton () {
        return $("#add-to-cart-sauce-labs-backpack")
    } 

    get ProductImage() {
        return $("#item_0_img_link")
    }

    async validateOnHomepage() {
        await expect (this.ProductImage).toBeExisting ();
        await expect (this.cartIcon).toBeExisting ();
        await expect (this.addToCartButton).toBeExisting ();
        
    }

    open() {
        return super.open("inventory.html")
    }
}

export default new Homepage();