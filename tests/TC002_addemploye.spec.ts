import{test} from "@playwright/test";
import { general } from "../lib/General";
test("addemployee",async ({page}) => {
    let obj = new general(page);
    await obj.openapplication();
     await obj.login();
     await obj.addemploye();
     await obj.waitstmt();
     await obj.logout();
     
})