
import Page from "./page.js";
import { $ } from "@wdio/globals"

class LoginPage extends Page {
    open(_path) {
        return super.open("")
    }

    get textBoxUsername() {
        return $('#user-name')
    }

    get textBoxPassword() {
        return $("#password")
    }

    get buttonLogin() {
        return $("#login-button")
    }

    async inputUsername (username){
        await this.textBoxUsername.setValue(username)
    }

    async inputPassword (password){
        await this.textBoxPassword.setValue(password)
    }

    async clickbuttonlogin(){
        await this.buttonLogin.click
    }

    async login(username, password) {
        await this.textBoxUsername.setValue(username);
        await this.textBoxPassword.setValue(password);
        await this.buttonLogin.click()
    }

    open(){
        return super.open("")
    }
}

export default new LoginPage();
