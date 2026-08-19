//To provide Test Data & objects / elements related to the entire project
import{Page} from "@playwright/test"
export  class global {
    constructor( public page : Page){

    }

    //***********************testData******* */
    public url: string = "https://sureshitacademy.in/hrms/login.php";
    public username: string ="sureshit";
    public password : string ="sureshit";
    public empfirst_Name : string = "suresh";
    public  emplast_name : string = "hyderabad";
    




  //***************************objects/elements********************** */
      public textbox_loginname :string = "//input[@name='txtUserName']";
      public textbox_password : string ="//input[@name ='txtPassword']";
      public button_login  : string ="//input[@name='Submit']";
       public link_logout :string ="Logout";
    // public link_logout ="'link',{name:'Logout'}"
      public emp_frame : string ="//iframe[@id ='rightMenu']"
      public button_add : string ="//input[@onclick ='returnAdd();']";
      public textbox_firstname : string ="//input[@name='txtEmpFirstName']";
      public textbox_lastname : string = "//input[@name ='txtEmpLastName']";
      public button_addempsave : string = "//input[@id='btnEdit']";
      public textbox_code : string ="//input[@id ='txtEmployeeId']";
      public dropdown_search_By : string ="//select[@name='loc_code']";
      public textbox_search_for : string ="//input[@id ='loc_name']";
      public button_search : string ="//input[@onclick ='returnSearch();']";
      public link_name: string ="//*[@id='standardView']/table/tbody/tr/td[3]/a" ;
      public button_edit : string="//*[@id='btnEditPers']";
      public button_editempsave : string ="//*[@id='btnEditPers']";
      public checkbox_delteemp : string ="//input[@onclick='unCheckMain();']"
      public button_delete : string ="//input[@onclick='returnDelete();']"
  }