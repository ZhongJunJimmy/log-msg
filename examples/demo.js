const logMessage = require('../index');

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