'use strict'; // Required to use class in node v4

var fs = require('fs');
var moment = require('moment');
var Timestamp = Date.now();
//log lavel: DEBUG, INFO, WARN, ERROR

class LogMsg{
	constructor(options){
		this.options = options || {};
		this.writeLog = options.writeLog || false;
		this.logPath = options.logPath || './log';
		this.prefixName = options.prefixName || 'log_';
		this.logFileName = `${this.prefixName}${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}.log`;
		this.DEBUG_MODE = options.DEBUG_MODE || false;
		this.INFO_MODE = options.INFO_MODE || false;
		this.WARN_MODE = options.WARN_MODE || false;
		this.ERROR_MODE = options.ERROR_MODE || false;
	}

	/**
	 * 
	 * @param {String} logType The log's type: DEBUG, INFO, WARN, ERROR
	 * @param {String} logMsg The message that you would like to print
	 */
	log(logType, logMsg){
		switch(logType){
			case "DEBUG":
				this.writeLogFile(`[${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}] DEBUG: ${logMsg}\n`);
				if(this.DEBUG_MODE) console.log("\x1b[94m",`[${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}] DEBUG: ${logMsg}`);
				break;
			case "INFO":
				this.writeLogFile(`[${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}] INFO: ${logMsg}\n`);
				if(this.INFO_MODE) console.log("\x1b[92m",	`[${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}] INFO: ${logMsg}`);
				break;
			case "WARN":
				this.writeLogFile(`[${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}] WARN: ${logMsg}\n`);
				if(this.WARN_MODE) console.log("\x1b[93m",`[${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}] WARN: ${logMsg}`);
				break;
			case "ERROR":
				this.writeLogFile(`[${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}] ERROR: ${logMsg}\n`);
				if(this.ERROR_MODE) console.log("\x1b[91m",`[${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}] ERROR: ${logMsg}`);
				break;
			default:
				this.writeLogFile(`[${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}] Error: The log type does not existed\n`);
				console.log("\x1b[91m",`[${moment(Timestamp).format('YYYY-MM-DDTHH:mm:ss.SSS')}] Error: The log type does not existed`);
		}
			
	}

	/**
	 * 
	 * @param {String} msg The message that you would like to write in log file
	 */
	writeLogFile(msg){
		if(this.writeLog){
			if(!fs.existsSync(this.logPath)) fs.mkdirSync(this.logPath);
			fs.appendFile(this.logPath+"/"+this.logFileName, msg, function (err) {
				if (err) console.log(err);
			});
		}
	}
	
} // class logMsg

module.exports.LogMsg = LogMsg;