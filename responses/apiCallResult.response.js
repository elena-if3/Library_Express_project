const statusToHttp = require("../tools/statusToHttpCode.tool");

module.exports = (response, result) => {
    const httpCode = statusToHttp(result.status);
    switch (httpCode) {
        case 201:
        case 204:
            return response.status(httpCode).end();
        default:
            return response
                .status(httpCode)
                .json({ data: result.data, error: result.error });
    }
};
