#Easy form validation

Easy form validation is a combination of two directives.

* The directive blur adds a class 'invalid' when the element is invalid or you try to submit the form with an invalid element 
* The directive error-message adds a custom message in order to give a custom feedback to the user

##HOw to use it
Import on your file html the following files:
* blur/blur.css
* blur/blur.js
* error/error.css
* errorMessage.js

Inject into your main module the two modules:
* 'blurModule',
* 'errorMessageModule'

##Example

            <form name="emailform" action="">
                ...
                <label class="item item-input">
                    <span class="input-labe>Nuova email</span>
                    <input type="email"  ng-model="newEmail" name="newEmail" blur required>
                </label>
                <error-message server-error="serverError" field="emailform.newEmail" invalid-message="mail non corretta" template-url="js/vendor/error/error.tpl.html"></error-message>
            </form>

As you can see we have added the directive blur to the input field and a error-message tag with the following attributes:
* field= the filed to be watched
* invalid-message= the message to show when the field is invalid
* template-url= the template that the directive should use

In this example error.tpl.html looks like that:
```
<p ng-repeat="(key, value) in field.$error" class="messageError" ng-class="{in: field.$showErr}">
    <span class="fa fa-info-circle"></span>
    {{ getErrMsg(key) }}
</p>
<p class="messageError" ng-repeat="message in serverError.messages[field.$name]" ng-class="{
    in: field.$showErr && serverError.messages[field.$name]}">
    <span class="fa fa-info-circle"></span>
    {{message }}
</p>
```


##What does it mean

* blur: triggers error when user leaves field or form is submitted

* error-message: show errors here

* server-error: variable in scope containing server errors, it must be structured like:

```
    {
        messages : {

                <field_name_1> : <error_text_1>,
                <field_name_2> : <error_text_2>,
                
            }
    }
```

* field: the form control name whose errors should be displayed

* invalid-message: the error text to be displayed


