# Ng Form Errors

Easy form validation is a combination of two directives.

* The directive blur adds a class 'invalid' when the element is invalid or you try to submit the form with an invalid element 
* The directive error-message adds a custom message in order to give a realtime feedback to the user and show eventual errors from the server

##How to use it
Import on your file html the following files:
* src/blur/blur.css
* src/blur/blur.js
* src/error/error.css
* src/errorMessage.js
* src/errorMessageTemplate.js
* src/index.js

Inject into your main module the module:

```javascript
angular.module('app',[
    'ngFormErrors'
])
```

Then just append the `blur` directive to an input field, this is really important because will also the trigger the `error-message` directive.

```html
<input class="form-control" name="email" type="email" ng-model="email" placeholder="email" blur>
```

##Example

```html   
<form name="sampleForm">
    <div class="form-group">
        <label>Email:</label>
        <input class="form-control" name="email" type="email" ng-model="email" placeholder="email" blur>
        <error-message server-error="errors" field="sampleForm.email" invalid-message="mail non corretta"></error-message> 
    </div>
    <div class="form-group">
        <label>Number:</label>
        <input class="form-control" name="size" type="number" ng-model="size" placeholder="number" blur required>
        <error-message server-error="errors" field="sampleForm.size" invalid-message="This should be a number"></error-message>
    </div>
</form>
```

As you can see we have added the directive blur to the input field and a error-message tag with the following attributes:
* field = the filed to be watched
* invalid-message = the message to show when the field is invalid (for client side validatio)
* server-error = a $scope variable containing errors from the server

The base `error.tpl.html` is:

```html
<p class="validationErrors alert alert-danger" ng-class="{in: field.$showErr}" ng-show="invalidMessage">
    <span class="fa fa-info-circle"></span>

    {{ invalidMessage }}
</p>

<p class="validationErrors alert alert-danger" ng-repeat="(key, value) in field.$error" ng-class="{in: field.$showErr}" ng-show="!invalidMessage &&!serverError">
    <span class="fa fa-info-circle"></span>

    {{ getErrMsg(key) }}
</p>

<p class="alert alert-danger validationErrors" ng-repeat="message in serverError.messages[field.$name]" ng-class="{
    in: field.$showErr && serverError.messages[field.$name]}" ng-show="!invalidMessage">

    <span class="fa fa-info-circle"></span>
    {{message}}
</p>

```

## Configure the template

You can use a custom template just configuring in you module's config section:

```javascript
.config(function(validationErrorsProvider){
    validationErrorsProvider.template = 'myTemplate.html';
})
```

**Note** You should not call your template `error.tpl.html` as this name is cached in the module with `$templateCache`.

## Configure Error Messages

You can define you custom messages to override the default:

**defaultMsg** 'Invalid Field'
**required** 'Mandatory Field',
**pattern** 'Invalid Format',
**number** 'This should be a number',
**email** 'Invalid email address'

```javascript
.config(function(validationErrorsProvider){
    validationErrorsProvider.errorMessages = {
        default: 'Invalid Field',
        required : 'Mandatory Field',
        pattern : 'Invalid Format',
        number : 'This should be a number',
        email : 'Invalid email address'
    };
})
```

**Note** 

Unless you will change all messages use the `dot` notation:

```javascript
.config(function(validationErrorsProvider){
    validationErrorsProvider.errorMessages.default = 'My Custom Message';
})
```

## Server Errors Handling

The errors from the server should be structured in this way:

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

