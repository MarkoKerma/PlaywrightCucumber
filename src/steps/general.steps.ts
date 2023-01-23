import { ICustomWorld } from "../support/custom-world";
import { Then } from "@cucumber/cucumber";

Then("Snapshot {string}", async (cw: ICustomWorld, name: string) => {
    await cw.pagesObj?.basePage.screenshot(name);
});

Then("Snapshot", async (cw: ICustomWorld) => {
    const image = await cw.page?.screenshot();
    if (image) {
        await cw.attach(image, "image/png");
    }
});

Then("debug", async () => {
    // eslint-disable-next-line no-debugger
    debugger;
});
