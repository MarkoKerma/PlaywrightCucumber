/* eslint-disable prettier/prettier */
import { BasePage } from "./base-page";
import config from "../../config";
import { ElementHandle } from "playwright";

const EL_SELECTORS = {
    execAllButton: "button:text('exec all')",
    cronText: "xpath=/html/body/pre",
    btcCron: "#cron-3",
    setFeesByMonthlyVolumeCron: "#cron-56",
};
const cronsUrl = config.cronJobsUrl;
const btcCronExpectedText = "Running test run !!one time check only!!";
const setFeesCronExpectedText = "Starting fee recalculation for MERCHANTS";
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
     * Waits for all CronJobs to be executed by checking two crons
     * first with id 3 - checkUnconfirmedTransactions BTC and
     * second with id 56 - setFeesByMonthlyVolume
     */
    public async waitCronsToFinish(): Promise<void> {
        const textOfCronJob = EL_SELECTORS.cronText;
        const btcFrameLocator = this.page.frameLocator(EL_SELECTORS.btcCron);
        const btcCronText = btcFrameLocator.locator(textOfCronJob);
        await this.expect(btcCronText).toContainText(
            btcCronExpectedText, { timeout: 30000 }
        );

        const exExchangeFrameLocator = this.page.frameLocator(
            EL_SELECTORS.setFeesByMonthlyVolumeCron
        );
        const externalCronText = exExchangeFrameLocator.locator(textOfCronJob);
        await this.expect(externalCronText).toContainText(
            setFeesCronExpectedText, { timeout: 30000 }
        );
    }
}
