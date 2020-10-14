const moment = require('moment')

module.exports.formatDateOnSlug = date => {
    return moment(date).format('DD-MMMM-YYYY')
}

module.exports.formatDatePublished = date => {
    return moment(date).format('DD MMM, YYYY')
}
