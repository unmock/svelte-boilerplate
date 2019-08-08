import "@babel/polyfill";
import dotenv from 'dotenv';
import unmock from 'unmock-node';

dotenv.config({path: './.test.env'});
unmock.on();