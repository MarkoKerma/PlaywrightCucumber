import { BasePage } from "./base-page";
export class DashboardPage extends BasePage {
    public get elements() {
        return {
            widgetPageButton: "Widget",
        };
    }

    public async openWidgetPage(): Promise<void> {
        await this.page
            .getByRole("link", { name: this.elements.widgetPageButton })
            .click();
        await this.expect(this.page).toHaveURL(
            "https://payment-gateway-stage.dev.limitlex.io//payWidget.create"
        );
    }
}
