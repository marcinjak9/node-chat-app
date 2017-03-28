var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate a correct message', ()=>{
		var from = 'Marco';
		var text = 'Hello all to this chat';
		var message = generateMessage(from, text);

		expect(message.createAt).toBeA('number');
		expect(message).toInclude({from, text});

	});
});

describe('generateLocationMessage', ()=> {
	it('should generate correct location object', () => {
		var from = 'Martin';
		var latitude = 1.23125;
		var longitude = 2.714671;
		var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
		var location = generateLocationMessage(from, latitude, longitude);
		expect(location).toInclude({from,url});
		expect(location.createAt).toBeA('number');
	});
});