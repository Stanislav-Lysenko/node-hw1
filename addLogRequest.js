let fs = require('fs');

exports.addLogRequest = (req) => {
	let jsonLogFile = fs.readFileSync('./log.json', 'utf-8');
	let contentLogFile = JSON.parse(jsonLogFile);
	let log = {};
	log.method = req.method;
	log.url = req.url;
	log.time = (new Date()).getTime();
	contentLogFile.logs.push(log);
	fs.writeFileSync('./log.json', JSON.stringify(contentLogFile), 'utf-8');
}
