/* eslint-disable prettier/prettier */
import { BasePage } from "./base-page";
import { ElementHandle } from "playwright";

const EL_SELECTORS = {
    execAllButton: "button:text('exec all')",
};
const cronsUrl =
    "https://payment-gateway-stage-cron.dev.limitlex.io/htdocs/cron/";

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
        // const caca = await this.page.getByText(
        //     "checkUnconfirmedTransactions BTC exec □ [* * * * *]"
        // );

        // const child = caca.innerText().valueOf();
        // this.expect(child).toContainText()(
        //     "Running test run !!one time check only!!"
        // );
    }
}
