//All Re-usable functions / methods related to the entire project
import { global } from "./Global";
export class general extends global {

     //*************Reusable Functions/Methods********************* */
    //userdefine methods 
    frame = this.page.frameLocator(this.emp_frame);
    code!:string;
    //code : string ="";

    //open application
    async openapplication() {
        await this.page.goto(this.url);
        console.log("application got opened");
 }
  // login application
  async login() {
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("login complted");
    
}
//logout application
async logout() {
    await this.page.getByText(this.link_logout).click();
    console.log("logout complted");

}
async addemploye(){
  // const frame = this.page.frameLocator(this.emp_frame);
    await this.frame.locator(this.button_add).click();
    this.code = await this.frame.locator(this.textbox_code).inputValue();
    console.log(this.code);
    await this.frame.locator(this.textbox_firstname).fill(this.empfirst_Name);
    await this.frame.locator(this.textbox_lastname).fill(this.emplast_name);
    await this.frame.locator(this.button_addempsave).click();
    console.log("employee got added successfully");
    }
    async Edit_empl(){
   // await this.frame.locator(this.dropdown_search_By).selectOption({index:1});
    await this.frame.locator(this.dropdown_search_By).selectOption({value:'0'});
    await this.page.waitForTimeout(2000);
    await this.frame.locator(this.textbox_search_for).fill("10285");
    await this.frame.locator(this.button_search).click();
    await this.page.waitForTimeout(1000);
    await this.frame.locator(this.link_name).click();
    await this.frame.locator(this.button_edit).click();
    await this.frame.locator(this.textbox_lastname).clear();
     await this.page.waitForTimeout(1000);
     await this.frame.locator(this.textbox_lastname).fill(this.emplast_name);
    await this.frame.locator(this.button_editempsave).click();
  }
  async deleteemp() {
    await this.frame.locator(this.dropdown_search_By).selectOption({index:1});
  await this.frame.locator(this.textbox_search_for).fill("10285");
    await this.frame.locator(this.button_search).click();
    await this.page.waitForTimeout(2000);
    await this.frame.locator(this.checkbox_delteemp).click();
    await this.frame.locator(this.button_delete).click();
   console.log("employee got deleted successfully");
}
 async waitstmt() {
        await this.page.waitForTimeout(5000);
        console.log("wait statemt got executed for 5 sec");
     }
}