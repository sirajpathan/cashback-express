# Cashback-express App

## Description
This is an assignment project developed using express and mysql database. This assignment is about creating rules for cashback and when user makes transaction then based on rule he can get cashback.<br><br>
This has very basic login machanism with hard-coded password which generates JWT token and based on that rulesets are created. The same user is being used for transaction as it is just an assignment.<br><br>
Steps that we have to follow to use APIs are:<br>
<li>Make POST /Login call with username and password in body. This will return JWT token. Use this token as bearer token for other API calls.</li>
<li>Use POST /ruleset to create rule for cashback</li>
<li>Use POST /transaction to create transaction entry in database</li>
<li>Use GET /cashback to get all the list of applicable cashback on transaction of logged in user</li><br>


## Start server
``` bash
# install dependencies
npm i
```

``` bash
# start server
npm run start
```

## API details
This contains below APIs to login, create ruleset, create transaction and get information about cashback. You can get Postman collection from this file *./Cashback.postman_collection.json*
```API
POST - /login 
POST - /ruleset 
POST - /transaction 
GET - /cashback
```