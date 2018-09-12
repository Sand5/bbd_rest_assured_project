package stepdefinitions;

import baseurl.BaseURL;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.Assert;

import java.util.List;


/**
 * Created by Sanderson on 05/09/2018.
 */
public class GlobalWeatherStepDef {

     private Response response;
     private RequestSpecification request;
     private String city;

    @Given("^I am on the country search endpoint$")
    public void i_am_on_the_country_search_endpoint() throws Throwable {
        //Lets set the base URI.
        RestAssured.baseURI = BaseURL.getHttpRestapiDemoqaComUtilitiesWeatherCity();
        request = RestAssured.given();
    }


    @When("^I enter_a \"([^\"]*)\"$")
    public void iEnter_a(String city) throws Throwable {
        //Then we fetch the request the request using a path parameter.
        response = request.when().get("/"+city);
    }

    @Then("^the correct \"([^\"]*)\" details are returned$")
    public void the_correct_country_details_are_returned(String cityresponse) throws Throwable {
        //We will extract the city data using the json path method
        city = response.jsonPath().get("City");

        // Lets assert the what we found in the response with what we expect.
        Assert.assertEquals(city,cityresponse);

        //We will then extract the response as a json content type.
        Response rep = response.then().contentType(ContentType.JSON).extract().response();
        System.out.println(rep.getBody().asString());
    }

    @When("^I enter a city$")
    public void i_enter_a_city(DataTable table) throws Throwable {
        //Create a List of string to store the table data.

        List<List<String>> data = table.raw();
        //Pass in this data to the request and point the response to it.
        response = request.when().get("/"+data.get(0).get(0));
    }

    @Then("^The a status code of \"([^\"]*)\" is returned$")
    public void the_a_status_code_of_is_returned(int status) throws Throwable {
        //Using the response object lets get the status code from the json and compare this to what we expect.
        response.then().contentType(ContentType.JSON).assertThat().statusCode(status);


    }
}

