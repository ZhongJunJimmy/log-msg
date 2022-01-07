const logMsg = require('../index');

const logMsgObject = logMsg({
    DEBUG_MODE: true,
    INFO_MODE: true,
    WARN_MODE: true,
    ERROR_MODE: true
});

logMsgObject.log("DEBUG", "test debug message");
logMsgObject.log("INFO", "test info message");
logMsgObject.log("WARN", "test warn message");
logMsgObject.log("ERROR", "test error message");