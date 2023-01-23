import { BasePage } from "./base-page";
import { LoginPage } from "./login-page";
import { TwoFactorPage } from "./twofactor-page";
import { DashboardPage } from "./dashboard-page";
import { WidgetPage } from "./widget-page";
import { WidgetCodePage } from "./widget-code-page";
import { CronJobsPage } from "./cronjobs-page";
import { Page, BrowserContext } from "playwright";

export class AllPagesObject {
    basePage: BasePage;
    loginPage: LoginPage;
    twoFactorPage: TwoFactorPage;
    dashboardPage: DashboardPage;
    widgetPage: WidgetPage;
    widgetCodePage: WidgetCodePage;
    cronJobsPage: CronJobsPage;

    constructor(public page: Page, public context: BrowserContext) {
        this.basePage = new BasePage(page, context);
        this.loginPage = new LoginPage(page, context);
        this.twoFactorPage = new TwoFactorPage(page, context);
        this.dashboardPage = new DashboardPage(page, context);
        this.widgetPage = new WidgetPage(page, context);
        this.widgetCodePage = new WidgetCodePage(page, context);
        this.cronJobsPage = new CronJobsPage(page, context);
    }
}
