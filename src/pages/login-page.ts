/* eslint-disable prettier/prettier */
import { BasePage } from "./base-page";
import config from "../../config";
import { ElementHandle } from "playwright";

const EL_SELECTORS = {
    emailInput: "#email",
    passwordInput: "input[name=password]",
    recaptchaCheckBox: "input[name=g-recaptcha-response]",
    rememberMeCheckBox: "#stay_loggedin",
    loginButton: 'input[value="LOG IN"]',
};
const towFactorUrl = config.baseUrl + "login_step_two?";

export class LoginPage extends BasePage {
    /**
     * Opens Login Page on ForumPay App
     */
    public async goToLoginPage(): Promise<
        ElementHandle<HTMLElement | SVGElement>> {
        await this.goto("/login");
        return this.page.waitForSelector(EL_SELECTORS.emailInput);
    }

    /**
     *  Logins user to the ForumPay App
     */
    public async loginToAPP(): Promise<void> {
        await this.page.locator(EL_SELECTORS.emailInput).type(config.username);
        await this.page
            .locator(EL_SELECTORS.passwordInput)
            .type(config.password);
        await this.page.locator(EL_SELECTORS.recaptchaCheckBox).click();
        await this.page.locator(EL_SELECTORS.rememberMeCheckBox).click();
        await this.page.locator(EL_SELECTORS.loginButton).click();
        await this.expect(this.page).toHaveURL(towFactorUrl);
    }
}
