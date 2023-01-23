import { BasePage } from "./base-page";
import config from "../../config";

const EL_SELECTORS = {
    codeInput: "input[name=code]",
    passwordInput: "input[name=password]",
    verifyButton: "input[value=VERIFY]",
};
export class TwoFactorPage extends BasePage {
    /**
     * Types two factor code in Two Factor input field and
     * code is hardcoded value of two factor code used in testing environment
     */
    public async addTwoFactorCode(): Promise<void> {
        await this.page.waitForSelector(EL_SELECTORS.codeInput);
        await this.page
            .locator(EL_SELECTORS.codeInput)
            .type(config.twoFactorCode);
        await this.page.locator(EL_SELECTORS.verifyButton).click();
        await this.expect(this.page).toHaveURL(config.baseUrl);
    }
}
