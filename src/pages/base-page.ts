import config from "../../config";
import { Page, BrowserContext } from "playwright";
import { expect, Expect, Response } from "@playwright/test";
import { join } from "path";

export class BasePage {
    page: Page;
    context: BrowserContext;
    widgetHTMLCode?: string;

    constructor(page: Page, context: BrowserContext, widgetHTMLCode?: string) {
        this.page = page;
        this.context = context;
        this.widgetHTMLCode = widgetHTMLCode;
    }

    public get expect(): Expect {
        return expect;
    }

    public goto(route = ""): Promise<null | Response> {
        return this.page.goto(join(config.baseUrl, route));
    }

    public screenshot(name: string): Promise<Buffer> | undefined {
        return this.page.screenshot({
            path: join("screenshots", `${name}.png`),
        });
    }
}
