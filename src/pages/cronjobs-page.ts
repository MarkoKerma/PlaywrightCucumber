/* eslint-disable prettier/prettier */
import { BasePage } from "./base-page";
import config from "../../config";
import { ElementHandle } from "playwright";

const EL_SELECTORS = {
    execAllButton: "button:text('exec all')",
};
const cronsUrl = config.cronJobsUrl;
export class CronJobsPage extends BasePage {
    public async openCronJobsPage(): Promise<
        ElementHandle<HTMLElement | SVGElement>> {
        await this.page.goto(cronsUrl);
        return this.page.waitForSelector(EL_SELECTORS.execAllButton);
    }

    public async execAllCrons(): Promise<void> {
        await this.page.locator(EL_SELECTORS.execAllButton).click();
    }

    public async waitCronsToFinish(): Promise<void> {
        await this.page.waitForTimeout(5000);
        // const fatherElement = await this.page.getByText(
        //     "checkUnconfirmedTransactions BTC exec □ [* * * * *]"
        // );

        // const child = fatherElement.innerText().valueOf();
        // this.expect(child).toContainText()(
        //     "Running test run !!one time check only!!"
        // );
    }
}
