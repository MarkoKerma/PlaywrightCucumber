import { BasePage } from "./base-page";

const EL_SELECTORS = {
    orderAmountInput: "input[name=order_amount]",
    applyWidgetChangesButton: "#btn_create_widget",
    widgetHTMLCode: "#widget_html",
};
export class WidgetPage extends BasePage {
    public async addFIATAmountForWidget(amountOfOrder: string): Promise<void> {
        await this.page.locator(EL_SELECTORS.orderAmountInput).fill("");
        await this.page
            .locator(EL_SELECTORS.orderAmountInput)
            .type(amountOfOrder);
        await this.page.locator(EL_SELECTORS.applyWidgetChangesButton).click();
        //replace this wait
        await this.page.waitForTimeout(3000);
        const input_value = await this.page
            .locator(EL_SELECTORS.widgetHTMLCode)
            .inputValue();

        this.expect(input_value).toContain("order_amount=" + amountOfOrder);
    }
    public async copyAndReplaceWidgetCode(): Promise<void> {
        const widgetHTML = String(
            await this.page.locator(EL_SELECTORS.widgetHTMLCode).inputValue()
        );
        await this.page.setContent(widgetHTML);
    }
}
