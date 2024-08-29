
describe('Saucedemo Login and Add to Cart', () => {
    before(async () => {
        await browser.url('https://www.saucedemo.com/');
    });

    it('log in successfully', async () => {
        
        const usernameInput = await $('#user-name');
        const passwordInput = await $('#password');
        const loginButton = await $('#login-button');

        await usernameInput.setValue('standard_user'); 
        await passwordInput.setValue('secret_sauce');  
        await loginButton.click(); 

        
        const inventoryContainer = await $('.inventory_list');
        await inventoryContainer.waitForDisplayed({ timeout: 5000 });
        expect(await inventoryContainer.isDisplayed()).toBe(true);
    });

    it('add an item to the cart', async () => {
        
        const addToCartButton = await $('.btn_primary.btn_small.btn_inventory'); 
        await addToCartButton.click();

        
        const cartBadge = await $('shopping-cart-link');
        await cartBadge.waitForDisplayed({ timeout: 5000 });
        expect(await cartBadge.getText()).toBe('1'); 
    });

    after(async () => {
        await browser.deleteSession(); 
    });
});