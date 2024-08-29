import loginPage from "../pageobjects/login.page";

describe('Login Test', () => {

    it('test 3-succesfully Login-page objectbase', async () => {
        await loginPage.open {}
        await loginPage.login {"standard_user","secret_sauce"}
        
    });
});