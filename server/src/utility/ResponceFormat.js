const ResponceFormat = {
    generateResponce: (statusCode, message, isSuccess, data) => {
        return {
            statusCode: statusCode,
            message: message,
            isSuccess: isSuccess,
            data: data
        }

    }
}

module.exports = ResponceFormat;