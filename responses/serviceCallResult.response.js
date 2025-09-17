const serviceStatus = require("../tools/serviceStatus.enum");

const notFound = (error) => {
    return { ok: false, status: serviceStatus.NOTFOUND, error };
};

const ok = (data) => {
    return { ok: true, status: serviceStatus.OK, data };
};

const noContent = () => {
    return { ok: true, status: serviceStatus.NOCONTENT };
};

const created = (data) => {
    return { ok: true, status: serviceStatus.CREATED, data };
};

const badRequest = (error) => {
    return { ok: false, status: serviceStatus.BADREQUEST, error };
};

module.exports = {
    badRequest,
    created,
    noContent,
    notFound,
    ok,
};
