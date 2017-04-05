'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DesignsSchema = new Schema ({
  designer: String,
  text: String
})

module.exports = mongoose.model('Design', DesignsSchema)
