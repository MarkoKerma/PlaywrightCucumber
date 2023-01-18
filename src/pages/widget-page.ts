import { BasePage } from "./base-page";
export class WidgetPage extends BasePage {
    public get elements() {
        return {
            orderAmountInput: "input[name=order_amount]",
            applyWidgetChangesButton: "#btn_create_widget",
            widgetHTMLCode: "#widget_html",
        };
    }

    public async addFIATAmountForWidget(amountOfOrder: string): Promise<void> {
        await this.page.locator(this.elements.orderAmountInput).fill("");
        await this.page
            .locator(this.elements.orderAmountInput)
            .type(amountOfOrder);
        await this.page.locator(this.elements.applyWidgetChangesButton).click();
        await this.page.waitForTimeout(3000);

        await this.expect(
            await this.page.locator("#widget_html").inputValue()
        ).toContain("order_amount=" + amountOfOrder);
    }
    public async copyAndReplaceWidgetCode(): Promise<void> {
        const widgetHTML = String(
            await this.page.locator(this.elements.widgetHTMLCode).inputValue()
        );
        await this.page.setContent(widgetHTML);
    }
}
