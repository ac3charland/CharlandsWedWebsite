const baseConfig = {
    debugWindow: false,
    engine: 'puppeteer',
    fileNameTemplate: '{scenarioLabel}',
    reseembleOutputOptions: {
        transparency: 0.25
    }
}

const baseScenario = {
    url: 'http://localhost:3000',
    hideSelectors: [],
    removeSelectors: [],
    selectorExpansion: true,
    selectors: ['document'],
    misMatchThreshold: 0,
    delay: 1000
}

const config = overrides => {
    const config = Object.assign({}, baseConfig, overrides)
    config.paths = {
        bitmaps_reference: `backstop/${overrides.id}/images/reference`,
        bitmaps_test: `backstop/${overrides.id}/images/test`,
        engine_scripts: 'backstop/scripts',
        html_report: `backstop/${overrides.id}/reports/html`,
        ci_report: `backstop/${overrides.id}/reports/ci`
    }
    return config
}

const scenario = overrides => {
    const scenario = Object.assign({}, baseScenario, overrides)
    scenario.onBeforeScript = overrides.onBeforeScript || 'set-cookies.js'
    scenario.url = baseScenario.url + (overrides.url || '')
    return scenario
}

module.exports = {
    config,
    scenario
}