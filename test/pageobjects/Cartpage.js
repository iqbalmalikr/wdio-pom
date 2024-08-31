import Page from "./page"
import { $, expect } from "@wdio/globals"

class Homepage extends Page {
    
    get CartIcon() {
        return $("#shopping_cart_container");
    }

    get ContinueButton () {
        return $("#continue-shopping")
    } 

    get DescriptionCart() {
        return $("#cart_contents_container")
    }

    async validateOnCartpage() {
        await expect (this.ContinueButton).toBeExisting ();
        await expect (this.CartIcon).toBeExisting ();
        await expect (this.DescriptionCart).toBeExisting ();
        
    }

    open() {
        return super.open("cart.html")
    }
}

export default new Homepage();