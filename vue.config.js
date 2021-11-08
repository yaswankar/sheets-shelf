module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/sheets-shelf/'
        : '/'
}