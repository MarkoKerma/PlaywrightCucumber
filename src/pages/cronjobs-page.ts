/* eslint-disable prettier/prettier */
import { BasePage } from "./base-page";
import config from "../../config";
import { ElementHandle } from "playwright";

const EL_SELECTORS = {
    execAllButton: "button:text('exec all')",
};
const cronsUrl = config.cronJobsUrl;
export class CronJobsPage extends BasePage {
    /**
     * Opens CronJobs page on ForumPay
     */
    public async openCronJobsPage(): Promise<
        ElementHandle<HTMLElement | SVGElement>> {
        await this.page.goto(cronsUrl);
        return this.page.waitForSelector(EL_SELECTORS.execAllButton);
    }

    /**
     *  Executes all CronJobs on CronJobs Page
     */
    public async execAllCrons(): Promise<void> {
        await this.page.locator(EL_SELECTORS.execAllButton).click();
    }

    /**
     * Waits for all CronJobs to be executed
     * WIP - need to replace implicit timeout
     */
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
