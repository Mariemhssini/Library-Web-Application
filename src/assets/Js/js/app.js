var express=require('express');
var bodyParser =require('body-parser');
var app =express();
var urlencodedParser = bodyParser.urlencodedParser({})