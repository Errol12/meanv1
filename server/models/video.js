const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const videoScheme = new Schema({
	title: String,
	url: String,
	description: String
});

module.exports = mongoose.model('video',videoScheme,'videos');