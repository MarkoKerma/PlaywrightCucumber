/* eslint-disable prettier/prettier */
import { BasePage } from "./base-page";
import { ElementHandle } from "playwright";
export class LoginPage extends BasePage {
    public get elements() {
        return {
            emailInput: "#email",
            passwordInput: "input[name=password]",
            recaptchaCheckBox: "input[name=g-recaptcha-response]",
            rememberMeCheckBox: "#stay_loggedin",
            loginButton: 'input[value="LOG IN"]',
        };
    }

    public async goToLoginPage(): Promise<
        ElementHandle<HTMLElement | SVGElement>> {
        await this.goto("/login");
        return this.page.waitForSelector(this.elements.emailInput);
    }

    public async loginToAPP(): Promise<void> {
        await this.page
            .locator(this.elements.emailInput)
            .type("marko.petricevic@servalit.com");
        await this.page.locator(this.elements.passwordInput).type("Test12345!");
        await this.page.locator(this.elements.recaptchaCheckBox).click();
        await this.page.locator(this.elements.rememberMeCheckBox).click();
        await this.page.locator(this.elements.loginButton).click();
        await this.expect(this.page).toHaveURL(
            "https://payment-gateway-stage.dev.limitlex.io//login_step_two?"
        );
    }
}
