#Easy form validation


##Example

    <form name="RegistrationForm">

        ...

        <div class="row">
            <div ng-show="registrationLoader" class="registration-loader loader"></div>
            <div class="form-group customInput">
                <input class="form-input fullWidth" ng-model="user.email" name="email" type="email" placeholder="Email" blur required>
                <span class="iconInput">@</span>
            </div>
        </div>
        <error-message server-error="serverError" field="registrationForm.email" invalid-message="mail non corretta"></error-message>

        ...

    </form>

##What does it mean

* blur: triggers error when user leaves field or form is submitted

* error-message: show errors here

* server-error: variable in scope containing server errors, it must be structured like:

    {
        messages : {

                <field_name_1> : <error_text_1>,
                <field_name_2> : <error_text_2>,

                ...
            }
    }


* field: the form control name whose errors should be displayed

* invalid-message: the error text to be displayed


