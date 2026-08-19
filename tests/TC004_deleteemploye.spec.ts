import{test} from "@playwright/test"
import { general } from "../lib/General"
test('deleteemp', async ({page}) => {
    let obj = new general(page);
    await obj.openapplication();
    await   obj.login();
    await obj.waitstmt();
    await obj.addemploye();
    await obj.deleteemp();
    await obj.waitstmt();
    await obj.logout();
   })