package data;

/**
 * Created by Sanderson on 05/09/2018.
 */
public class JsonData {

    private String FirstName;
    private String LastName;
    private String UserName;
    private String Password;
    private String Email;


    public String getFirstName() {
        return FirstName;
    }

    public JsonData setFirstName(String firstName) {
        this.FirstName = firstName;
        return this;
    }

    public String getLastName() {
        return LastName;
    }

    public JsonData setLastName(String lastName) {
        this.LastName = lastName;
        return this;
    }

    public String getUserName() {
        return UserName;
    }

    public JsonData setUserName(String userName) {
        this.UserName = userName;
        return this;
    }

    public String getPassword() {
        return Password;
    }

    public JsonData setPassword(String password) {
        this.Password = password;
        return this;
    }

    public String getEmail() {
        return Email;
    }

    public JsonData setEmail(String email) {
        this.Email = email;
        return this;
    }
}
