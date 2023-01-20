import { BasePage } from "./base-page";
import config from "../../config";

const EL_SELECTORS = {
    widgetPageButton: "Widget",
};
export class DashboardPage extends BasePage {
    public async openWidgetPage(): Promise<void> {
        await this.page
            .getByRole("link", { name: EL_SELECTORS.widgetPageButton })
            .click();
        await this.expect(this.page).toHaveURL(
            config.baseUrl + "payWidget.create"
        );
    }
}
