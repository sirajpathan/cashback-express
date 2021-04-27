import express from "express";
import {responseInterceptor, errorModifier} from "./src/utils";
import RequestValidator from "./src/controller/request-validator";
const request = new RequestValidator();
import indexRouter from "./src/routes/index";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Content-Type",'application/json');
  next();
});

app.use(function (req, res, next) {
  request.validate(req, res, next);
});

app.use(responseInterceptor);
app.use('/', indexRouter);

// error handler
app.use(errorModifier);

module.exports = app;
