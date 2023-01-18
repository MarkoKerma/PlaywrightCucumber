import { BasePage } from "./base-page";
export class WidgetCodePage extends BasePage {
    public get elements() {
        return {
            recaptchaCheckoutBox: "input[name=g-recaptcha-response]",
            orderAmountLabelText: "#orderAmountBox",
        };
    }

    public async clickRecaptchaCheckoutBox(): Promise<void> {
        await this.expect(
            this.page
                .frameLocator("iframe")
                .locator(this.elements.recaptchaCheckoutBox)
        ).toBeVisible();
        await this.page
            .frameLocator("iframe")
            .locator(this.elements.recaptchaCheckoutBox)
            .click();
    }

    public async checkFIATAmountInWidget(amountOfOrder: string): Promise<void> {
        await this.expect(
            this.page
                .frameLocator("iframe")
                .locator(this.elements.orderAmountLabelText)
        ).toHaveText(`Total amount in FIAT: ${amountOfOrder}.00 EUR`);
    }
}
