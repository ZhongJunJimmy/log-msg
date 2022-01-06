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

- writeLog (bool): If set true, create and append log message in log file under logPath, default value is false
- logPath (String): Set the path that the log file storage, default value is './log',
- prefixName (String): Set the prefix name that the log file name, default value is 'log_',
- DEBUG_MODE (bool): If set true, print the debug msg, default value is false,
- INFO_MODE (bool): If set true, print the info msg, default value is false,
- WARN_MODE (bool): If set true, print the warn msg, default value is false,
- ERROR_MODE (bool): If set true, print the error msg, default value is false

## LogMessage.log()

## LogMessage.writeLogFile