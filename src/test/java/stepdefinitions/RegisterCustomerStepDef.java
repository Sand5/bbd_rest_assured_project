package stepdefinitions;

import baseurl.BaseURL;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import data.JsonData;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.Assert;

import java.io.File;
import java.util.List;
import java.util.Map;

/**
 *Created by Sanderson on 05/09/2018.
 */
public class RegisterCustomerStepDef {

    private Response response;
    private RequestSpecification requestSpecification;
    private JsonData payload;


    @Given("^I am on the customer register end point$")
    public void i_am_on_the_customer_register_end_point() throws Throwable {
        //Lets set the base URI
        RestAssured.baseURI = BaseURL.getHttpRestapidDemoComCustomer();
        requestSpecification = RestAssured.given();
    }

    @When("^I send the details the of the new customer$")
    public void i_send_the_details_the_of_the_new_customer(DataTable dataTable) throws Throwable {
        //Use a List of Map strings to store and pass in the data from the data table
        List<Map<String, String>> data = dataTable.asMaps(String.class, String.class);
        payload = new JsonData();
        payload.setFirstName(data.get(0).get("FirstName"))
                .setLastName(data.get(0).get("LastName"))
                .setUserName(data.get(0).get("UserName"))
                .setPassword(data.get(0).get("Password"))
                .setEmail(data.get(0).get("Email"));
        //File file = new File("resources/data.json")

        // Using the response object lets pass in the payload of data to the register path
        response = requestSpecification.body(payload).when().contentType(ContentType.JSON).post("/register");


    }

    @When("^The status code is \"([^\"]*)\"$")
    public void the_status_code_is(int expected) throws Throwable {
        //We then check the expected staus code wit the json response
        response.then().assertThat().statusCode(expected);
}

    @Then("^The SuccessCode is \"([^\"]*)\"$")
    public void the_SuccessCode_is(String expectedmessage) throws Throwable {
        //We then take the message from the json and check this against the expected
        String actualmessange = response.then().extract().path("SuccessCode");
        Assert.assertEquals(actualmessange, expectedmessage);
    }

}
