import { BasePage } from "./base-page";
import config from "../../config";

const EL_SELECTORS = {
    widgetPageButton: "Widget",
};
const widgetPageUrl = config.baseUrl + "payWidget.create";
export class DashboardPage extends BasePage {
    /**
     * Selects Widget section from Header menu
     * waits for url to be url of widgets page
     */
    public async openWidgetPage(): Promise<void> {
        await this.page
            .getByRole("link", { name: EL_SELECTORS.widgetPageButton })
            .click();
        await this.expect(this.page).toHaveURL(widgetPageUrl);
    }
}
