const backstop = require('./backstop')
const cs = backstop.scenario

const viewport = 'viewport'

module.exports = backstop.config({
    id: 'main',
    viewports: [{
        label: 'large-view',
        width: 1024,
        height: 768
    }],
    scenarios: [
        cs({label: 'start-page'})
    ]
})