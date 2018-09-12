package featuresrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Sanderson on 05/09/2018.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/feature"},
        glue = {"stepdefinitions"},
        format = {"pretty","html:target/results"}
)
public class CucumberRunner{

}
