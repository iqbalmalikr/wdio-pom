import Page from "./page.js"
import { $ } from "@wdio/globals"

class ProductPage {
    // Define selectors using getter methods
    get addToCartButton() {
        return $('btn_primary.btn_small.btn_inventory'); // Pastikan selector ini sesuai
    }

    get cartIcon() {
        return $('shopping-cart-link'); // Selector untuk ikon keranjang belanja
    }

    // Method to add item to cart
    async addItemToCart() {
        await this.addToCartButton.click();
    }

    // Method to navigate to the cart
    async goToCart() {
        await this.cartIcon.click();
    }
}

export default new ProductPage();
