import {test} from "@playwright/test"
import { general } from "../lib/General"
test("loginlogout", async ({page}) => {

    let obj = new general(page);
    await obj.openapplication();
    await obj.login();
    await obj.logout();
})