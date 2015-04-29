# Ng Form Errors
Easy form validation is a combination of two directives.

* The directive blur adds a class 'invalid' when the element is invalid or you try to submit the form with an invalid element 
* The directive error-message adds a custom message in order to give a custom feedback to the user

##HOw to use it
Import on your file html the following files:
* src/blur/blur.css
* src/blur/blur.js
* src/error/error.css
* src/errorMessage.js
* src/index.js

Inject into your main module the module:
* 'validationErrors',

```javascript
angular.module('app',[
    'ngFormErrors'
])
```


##Example

```         
<form name="sampleForm">
                <div class="form-group">
                    <label>Email:</label>
                    <input class="form-control" name="email" type="email" ng-model="email" placeholder="email" blur>
                    <error-message server-error="errors" field="sampleForm.email" invalid-message="mail non corretta"></error-message> 
                </div>
                <div class="form-group">
                    <label>Number:</label>
                    <input class="form-control" name="size" type="number" ng-model="size" placeholder="number" blur>
                    <error-message server-error="errors" field="sampleForm.size" invalid-message="This should be a number"></error-message>
                </div>
            </form>
```

As you can see we have added the directive blur to the input field and a error-message tag with the following attributes:
* field= the filed to be watched
* invalid-message= the message to show when the field is invalid (for client side validatio)

In this example error.tpl.html looks like that:

```
<p class="validationErrors alert alert-danger" ng-repeat="(key, value) in field.$error" ng-class="{in: field.$showErr}">
    <span class="fa fa-info-circle"></span>

    {{ getErrMsg(key) }}
</p>

<p class="alert alert-danger validationErrors" ng-repeat="message in serverError.messages[field.$name]" ng-class="{
	in: field.$showErr && serverError.messages[field.$name]}">

    <span class="fa fa-info-circle"></span>
    {{message}}
</p>
```
## Configure the template

You can use a custom template just configuring in you module's config section:

```javascript
.config(function(ngFormErrorsProvider){
    ngFormErrorsProvider.template = 'error.tpl.html';
})
```

##What does it mean

* blur: triggers error when user leaves field or form is submitted

* error-message: show errors here

* server-error: variable in scope containing server errors, it must be structured like:

```javascript
    {
        messages : {

                <field_name_1> : <error_text_1>,
                <field_name_2> : <error_text_2>,
                
            }
    }
```

* field: the form control name whose errors should be displayed

* invalid-message: the error text to be displayed

## Demo

A demo is present in the demo folder, to view it:

- `git@github.com:linkmesrl/ng-form-errors.git`
- `cd ng-form-errors`
- `npm install`
- `bower install`
- `grunt serve`

## TODO

- Rename the module accordingly to the repo
- Make client side validation messages configurable trough the provider
- Write test
