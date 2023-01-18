import { BasePage } from "./base-page";
export class TwoFactorPage extends BasePage {
    public get elements() {
        return {
            codeInput: "input[name=code]",
            passwordInput: "input[name=password]",
            verifyButton: "input[value=VERIFY]",
        };
    }

    public async addTwoFactorCode(): Promise<void> {
        await this.page.waitForSelector(this.elements.codeInput);
        await this.page.locator(this.elements.codeInput).type("222222");
        await this.page.locator(this.elements.verifyButton).click();
        await this.expect(this.page).toHaveURL(
            "https://payment-gateway-stage.dev.limitlex.io//"
        );
    }
}
