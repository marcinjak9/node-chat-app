var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate a correct message', ()=>{
		var from = 'Marco';
		var text = 'Hello all to this chat';
		var message = generateMessage(from, text);

		expect(message.createAt).toBeA('number');
		expect(message).toInclude({from, text});

	});
});