import { BasePage } from "./base-page";

const EL_SELECTORS = {
    recaptchaCheckoutBox: "input[name=g-recaptcha-response]",
    orderAmountLabelText: "#orderAmountBox",
    iframeLocator: "iframe",
};
export class WidgetCodePage extends BasePage {
    /**
     * Clicks "I am not robot" checkbox on widget code
     */
    public async clickRecaptchaCheckoutBox(): Promise<void> {
        await this.expect(
            this.page
                .frameLocator(EL_SELECTORS.iframeLocator)
                .locator(EL_SELECTORS.recaptchaCheckoutBox)
        ).toBeVisible();
        await this.page
            .frameLocator(EL_SELECTORS.iframeLocator)
            .locator(EL_SELECTORS.recaptchaCheckoutBox)
            .click();
    }
    /**
     * Checks total amount value of FIAT in widget code
     * @param amountOfOrder - amount added in widget code
     */
    public async checkFIATAmountInWidget(amountOfOrder: string): Promise<void> {
        await this.expect(
            this.page
                .frameLocator(EL_SELECTORS.iframeLocator)
                .locator(EL_SELECTORS.orderAmountLabelText)
        ).toHaveText(`Total amount in FIAT: ${amountOfOrder}.00 EUR`);
    }
}
