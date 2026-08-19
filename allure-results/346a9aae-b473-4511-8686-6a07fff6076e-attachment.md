# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001_loginlogout.spec.ts >> loginlogout
- Location: tests\TC001_loginlogout.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://sureshitacademy.in/hrms/login.php
Call log:
  - navigating to "https://sureshitacademy.in/hrms/login.php", waiting until "load"

```

# Test source

```ts
  1  | //All Re-usable functions / methods related to the entire project
  2  | import { global } from "./Global";
  3  | export class general extends global {
  4  |      //*************Reusable Functions/Methods********************* */
  5  |     //userdefine methods 
  6  |     frame = this.page.frameLocator(this.emp_frame);
  7  |     code!:string;
  8  |     //code : string ="";
  9  | 
  10 |     //open application
  11 |     async openapplication() {
> 12 |         await this.page.goto(this.url);
     |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://sureshitacademy.in/hrms/login.php
  13 |         console.log("application got opened");
  14 |  }
  15 |   // login application
  16 |   async login() {
  17 |     await this.page.locator(this.textbox_loginname).fill(this.username);
  18 |     await this.page.locator(this.textbox_password).fill(this.password);
  19 |     await this.page.locator(this.button_login).click();
  20 |     console.log("login complted");
  21 |     
  22 | }
  23 | //logout application
  24 | async logout() {
  25 |     await this.page.getByText(this.link_logout).click();
  26 |     console.log("logout complted");
  27 | 
  28 | }
  29 | async addemploye(){
  30 |   // const frame = this.page.frameLocator(this.emp_frame);
  31 |     await this.frame.locator(this.button_add).click();
  32 |   this.code = await this.frame.locator(this.textbox_code).inputValue();
  33 |   console.log(this.code);
  34 |     await this.frame.locator(this.textbox_firstname).fill(this.empfirst_Name);
  35 |     await this.frame.locator(this.textbox_lastname).fill(this.emplast_name);
  36 |     await this.frame.locator(this.button_addempsave).click();
  37 |     console.log("employee got added successfully")
  38 |     }
  39 |     async Edit_empl(){
  40 |     await this.frame.locator(this.dropdown_search_By).selectOption({index:1});
  41 |     //await this.frame.locator(this.dropdown_search_By).selectOption({value:'0'});
  42 |     await this.frame.locator(this.textbox_search_for).fill(this.code);
  43 |     await this.frame.locator(this.button_search).click();
  44 |     await this.page.waitForTimeout(1000);
  45 |     await this.frame.locator(this.link_name).click();
  46 |     await this.frame.locator(this.button_edit).click();
  47 |     await this.frame.locator(this.textbox_lastname).clear();
  48 |      await this.page.waitForTimeout(1000);
  49 |      await this.frame.locator(this.textbox_lastname).fill(this.emplast_name);
  50 |     await this.frame.locator(this.button_editempsave).click();
  51 |   }
  52 |   async deleteemp() {
  53 |     await this.frame.locator(this.dropdown_search_By).selectOption({index:1});
  54 |     await this.frame.locator(this.textbox_search_for).fill(this.code);
  55 |     await this.frame.locator(this.button_search).click();
  56 |     await this.page.waitForTimeout(2000);
  57 |     await this.frame.locator(this.checkbox_delteemp).click();
  58 |     await this.frame.locator(this.button_delete).click();
  59 |    console.log("employee got deleted successfully");
  60 | 
  61 | 
  62 |   }
  63 |  async waitstmt() {
  64 |         await this.page.waitForTimeout(5000);
  65 |         console.log("wait statemt got executed for 5 sec");
  66 |      }
  67 | }
```