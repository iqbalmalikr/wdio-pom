import Addcartpage from "../pageobjects/Addcartpage";
import cartpage from "../pageobjects/cartpage";
import Homepage from "../pageobjects/Homepage";
import Loginpage from "../pageobjects/Loginpage";


describe('Login Test', () => {

    it('test 3-succesfully Login-page object', async () => {
        await Loginpage.open ()
        await Loginpage.login ("standard_user","secret_sauce")
        await Homepage.validateOnHomepage()
        await Addcartpage.addItemToCart();
        // Verifikasi bahwa item telah ditambahkan ke keranjang
        await Addcartpage.goToCart();
        await cartpage.validateOnCartpage();
    });
});