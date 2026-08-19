# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC002_addemploye.spec.ts >> addemployee
- Location: tests\TC002_addemploye.spec.ts:3:5

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
  4  | 
  5  |      //*************Reusable Functions/Methods********************* */
  6  |     //userdefine methods 
  7  |     frame = this.page.frameLocator(this.emp_frame);
  8  |     code!:string;
  9  |     //code : string ="";
  10 | 
  11 |     //open application
  12 |     async openapplication() {
> 13 |         await this.page.goto(this.url);
     |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://sureshitacademy.in/hrms/login.php
  14 |         console.log("application got opened");
  15 |  }
  16 |   // login application
  17 |   async login() {
  18 |     await this.page.locator(this.textbox_loginname).fill(this.username);
  19 |     await this.page.locator(this.textbox_password).fill(this.password);
  20 |     await this.page.locator(this.button_login).click();
  21 |     console.log("login complted");
  22 |     
  23 | }
  24 | //logout application
  25 | async logout() {
  26 |     await this.page.getByText(this.link_logout).click();
  27 |     console.log("logout complted");
  28 | 
  29 | }
  30 | async addemploye(){
  31 |   // const frame = this.page.frameLocator(this.emp_frame);
  32 |     await this.frame.locator(this.button_add).click();
  33 | this.code = await this.frame.locator(this.textbox_code).inputValue();
  34 |   console.log(this.code);
  35 |     await this.frame.locator(this.textbox_firstname).fill(this.empfirst_Name);
  36 |     await this.frame.locator(this.textbox_lastname).fill(this.emplast_name);
  37 |     await this.frame.locator(this.button_addempsave).click();
  38 |     console.log("employee got added successfully");
  39 |     }
  40 |     async Edit_empl(){
  41 |    // await this.frame.locator(this.dropdown_search_By).selectOption({index:1});
  42 |     await this.frame.locator(this.dropdown_search_By).selectOption({value:'0'});
  43 |     await this.page.waitForTimeout(2000);
  44 |     await this.frame.locator(this.textbox_search_for).fill(this.code);
  45 |     await this.frame.locator(this.button_search).click();
  46 |     await this.page.waitForTimeout(1000);
  47 |     await this.frame.locator(this.link_name).click();
  48 |     await this.frame.locator(this.button_edit).click();
  49 |     await this.frame.locator(this.textbox_lastname).clear();
  50 |      await this.page.waitForTimeout(1000);
  51 |      await this.frame.locator(this.textbox_lastname).fill(this.emplast_name);
  52 |     await this.frame.locator(this.button_editempsave).click();
  53 |   }
  54 |   async deleteemp() {
  55 |     await this.frame.locator(this.dropdown_search_By).selectOption({index:1});
  56 |     await this.frame.locator(this.textbox_search_for).fill(this.code);
  57 |     await this.frame.locator(this.button_search).click();
  58 |     await this.page.waitForTimeout(2000);
  59 |     await this.frame.locator(this.checkbox_delteemp).click();
  60 |     await this.frame.locator(this.button_delete).click();
  61 |    console.log("employee got deleted successfully");
  62 | 
  63 | 
  64 |   }
  65 |  async waitstmt() {
  66 |         await this.page.waitForTimeout(5000);
  67 |         console.log("wait statemt got executed for 5 sec");
  68 |      }
  69 | }
```