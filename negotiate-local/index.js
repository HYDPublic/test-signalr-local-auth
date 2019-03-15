module.exports = async function (context, req, connectionInfo) {
    if (process.env.WEBSITE_AUTH_ENABLED) {
        throw "App Service Auth enabled!";
    }
    context.res.body = connectionInfo;
};