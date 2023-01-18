import { ICustomWorld } from "../support/custom-world";
import { Given, When, Then } from "@cucumber/cucumber";

Given("I login to Limitlex Forum Pay", async function (this: ICustomWorld) {
    await this.pagesObj?.loginPage.goToLoginPage();
    await this.pagesObj?.loginPage.loginToAPP();
    await this.pagesObj?.twoFactorPage.addTwoFactorCode();
});

Given("open Widgets menu", async function (this: ICustomWorld) {
    await this.pagesObj?.dashboardPage.openWidgetPage();
});

When(
    "I input Order Amount {string}",
    async function (this: ICustomWorld, amountOfOrder: string) {
        await this.pagesObj?.widgetPage.addFIATAmountForWidget(amountOfOrder);
    }
);

When("copy widget HTML", async function () {
    // const widgetHTML = String(await page.locator('#widget_html').inputValue());
});

When("use Widget Code in browser", async function (this: ICustomWorld) {
    await this.pagesObj?.widgetPage.copyAndReplaceWidgetCode();
});

When("confirm I am not a robot", async function (this: ICustomWorld) {
    await this.pagesObj?.widgetCodePage.clickRecaptchaCheckoutBox();
});

Then(
    "widget will open with correct amount {string}",
    async function (this: ICustomWorld, amountOfOrder: string) {
        await this.pagesObj?.widgetCodePage.checkFIATAmountInWidget(
            amountOfOrder
        );
    }
);
