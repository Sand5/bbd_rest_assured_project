$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GobalWeather.feature");
formatter.feature({
  "line": 1,
  "name": "Get a countries weather details",
  "description": "In order to see what weather status is for country\nAs a user of the weather app\nI want to be able to search for a country current weather status",
  "id": "get-a-countries-weather-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Search for a given city weather details",
  "description": "",
  "id": "get-a-countries-weather-details;search-for-a-given-city-weather-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I enter_a \"\u003cCity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the correct \"\u003cCity\u003e\" details are returned",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "get-a-countries-weather-details;search-for-a-given-city-weather-details;",
  "rows": [
    {
      "cells": [
        "City"
      ],
      "line": 15,
      "id": "get-a-countries-weather-details;search-for-a-given-city-weather-details;;1"
    },
    {
      "cells": [
        "Leeds"
      ],
      "line": 16,
      "id": "get-a-countries-weather-details;search-for-a-given-city-weather-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "The user has navigated to the weather app",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the country search endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "GlobalWeatherStepDef.i_am_on_the_country_search_endpoint()"
});
formatter.result({
  "duration": 1048707223,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search for a given city weather details",
  "description": "",
  "id": "get-a-countries-weather-details;search-for-a-given-city-weather-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I enter_a \"Leeds\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the correct \"Leeds\" details are returned",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds",
      "offset": 11
    }
  ],
  "location": "GlobalWeatherStepDef.iEnter_a(String)"
});
formatter.result({
  "duration": 1492388697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds",
      "offset": 13
    }
  ],
  "location": "GlobalWeatherStepDef.the_correct_country_details_are_returned(String)"
});
formatter.result({
  "duration": 564307409,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "The user has navigated to the weather app",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the country search endpoint",
  "keyword": "Given "
});
formatter.match({
  "location": "GlobalWeatherStepDef.i_am_on_the_country_search_endpoint()"
});
formatter.result({
  "duration": 409522,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search for a valid city",
  "description": "",
  "id": "get-a-countries-weather-details;search-for-a-valid-city",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I enter a city",
  "rows": [
    {
      "cells": [
        "London"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The a status code of \"200\" is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "GlobalWeatherStepDef.i_enter_a_city(DataTable)"
});
formatter.result({
  "duration": 1119853022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "GlobalWeatherStepDef.the_a_status_code_of_is_returned(int)"
});
formatter.result({
  "duration": 34493321,
  "status": "passed"
});
formatter.uri("RegisterCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Register a new customer",
  "description": "In order to register new users to the customer registration\nAs a super user of the customer registration system\nI would like to be able enter the details of any new customer and register them",
  "id": "register-a-new-customer",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "The super user is on the registration system",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the customer register end point",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterCustomerStepDef.i_am_on_the_customer_register_end_point()"
});
formatter.result({
  "duration": 341119,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Add a new user to the registration system",
  "description": "",
  "id": "register-a-new-customer;add-a-new-user-to-the-registration-system",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I send the details the of the new customer",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "UserName",
        "Password",
        "Email"
      ],
      "line": 13
    },
    {
      "cells": [
        "Simon",
        "long",
        "sil",
        "lo",
        "ps@hotmail.com"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The status code is \"201\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The SuccessCode is \"OPERATION_SUCCESS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterCustomerStepDef.i_send_the_details_the_of_the_new_customer(DataTable)"
});
formatter.result({
  "duration": 565839126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 20
    }
  ],
  "location": "RegisterCustomerStepDef.the_status_code_is(int)"
});
formatter.result({
  "duration": 20672458,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e doesn\u0027t match actual status code \u003c200\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:470)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:632)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:497)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:121)\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:129)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\n\tat stepdefinitions.RegisterCustomerStepDef.the_status_code_is(RegisterCustomerStepDef.java:54)\n\tat ✽.And The status code is \"201\"(RegisterCustomer.feature:16)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "OPERATION_SUCCESS",
      "offset": 20
    }
  ],
  "location": "RegisterCustomerStepDef.the_SuccessCode_is(String)"
});
formatter.result({
  "status": "skipped"
});
});