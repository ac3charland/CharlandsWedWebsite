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
        cs({label: 'start-page'}),
        cs({label: 'basic-info', selectors: ['.basic-info']}),
        cs({label: 'registry', selectors: ['#registry']}),
        cs({label: 'story', selectors: ['#story']}),
        cs({label: 'places-to-stay', selectors: ['#places']}),
        cs({label: 'things-to-do', selectors: ['#things']}),
    ]
})