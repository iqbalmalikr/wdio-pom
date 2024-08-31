import Page from "./page.js";
import { $ } from "@wdio/globals"

class LoginPage extends Page {

    get textBoxUsername() {
        return $('#user-name')
    }

    get textBoxPassword() {
        return $("#password")
    }

    get LoginButton() {
        return $('#login-button')
    }

    async inputUsername (username){
        await this.textBoxUsername.setValue(username)
    }

    async inputPassword (password){
        await this.textBoxPassword.setValue(password)
    }

    async clickLoginButton(){
        await this.LoginButton.click()
    }

    async login(username, password) {
        await this.textBoxUsername.setValue(username);
        await this.textBoxPassword.setValue(password);
        await this.clickLoginButton();
    }

    open(){
        return super.open("")
    }
}

export default new LoginPage();
