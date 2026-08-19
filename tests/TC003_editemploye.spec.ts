import {test} from "@playwright/test"
import { general} from "../lib/General"
test('editemployee', async ({page}) => {
    let obj = new general(page);
    console.log(obj.code);
   await  obj.openapplication();
     await obj.login();
    await  obj.Edit_empl();
     await  obj.waitstmt();
    await   obj.logout();


    
})