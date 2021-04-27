var express = require('express');
var router = express.Router();
import controller from "../controller/index";
const {
  session,
  ruleset,
  cashback,
  transaction
} = controller;
const Session = new session();
const Ruleset = new ruleset();
const Cashback = new cashback();
const Transaction = new transaction();

router
  .post('/login', async function (req, res, next) {
    const response = await Session.create(req.body);
    res.send(response);
  })
  .post('/ruleset', async function (req, res, next) {
    const response = await Ruleset.create(req.body);
    res.send(response);
  })
  .post('/transaction', async function (req, res, next) {
    const response = await Transaction.create(req.user);
    res.send(response);
  })
  .get('/cashback', async function (req, res, next) {
    const response = await Cashback.get(req.user);
    res.send(response);
  });

module.exports = router;
