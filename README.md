# logMessage

Package for Log message util for NodeJS.

# Usage

```js
const logMessage = require('logMessage');

const logMsg = logMessage({
    DEBUG_MODE: true,
    INFO_MODE: true,
    WARN_MODE: true,
    ERROR_MODE: true
})

logMsg.log("DEBUG", "test debug message");
logMsg.log("INFO", "test info message");
logMsg.log("WARN", "test warn message");
logMsg.log("ERROR", "test error message");
```

# API Description

## LogMessage object

Creating LogMessage instance with specified configuration

```js
const logMsg = logMessage({
    writeLog: false,
    logPath: './log',
    prefixName: 'log_',
    DEBUG_MODE: false,
    INFO_MODE: false,
    WARN_MODE: false,
    ERROR_MODE: false
})
```

Configuration description

- `writeLog` (type: Bool): If set true, create and append log message in log file under logPath, default value is false
- `logPath` (type: String): Set the path that the log file storage, default value is './log'
- `prefixName` (type: String): Set the prefix name that the log file name, default value is 'log_'
- `DEBUG_MODE` (type: Bool): If set true, print the debug msg, default value is false
- `INFO_MODE` (type: Bool): If set true, print the info msg, default value is false
- `WARN_MODE` (type: Bool): If set true, print the warn msg, default value is false
- `ERROR_MODE` (type: Bool): If set true, print the error msg, default value is false

## LogMessage.log(logType, logMessage)

Print the difference format message by define difference log lavel. The function will check the configuration (include `DEBUG_MODE`, `INFO_MODE`, `WARN_MODE` and `ERROR_MODE` ) to decide message format.

- `logType` (type: String) The log's type: DEBUG, INFO, WARN, ERROR
- `logMessage` (type String) The message that you would like to print

## LogMessage.writeLogFile(msg)
Creating log file and appending text into log file. It will check the configuration `writeLog` to decide it executeing or not.

-  `msg` (type: String) The message that you would like to write in log file

# Licence
[MIT](LICENSE)
