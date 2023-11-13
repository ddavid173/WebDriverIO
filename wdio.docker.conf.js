import * as main from './wdio.conf.js';
const browserVersion = process.env.CHROME_BROWSER_VERSION || 'stable';
const DOMAIN = process.env.DOMAIN || 'server-production-8aa75.up.railway.app';
export const config = Object.assign(main.config, {
    logLevel: 'info',
    capabilities: [
        {
            'browserName': 'chrome',
            'browserVersion': browserVersion,
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--start-maximized',
                    '--disable-infobars',
                    '--headless',
                    '--disable-gpu',
                    '--window-size=1920,1080'
                ]
            },
            'pageLoadStrategy': 'normal',
        }
    ],
    services: [
        ['chromedriver', {
            logFileName: 'wdio-chromedriver.log', // default
            outputDir: 'driver-logs', // overwrites the config.outputDir
            args: ['--silent']
        }]
      ],
    onPrepare: function (config, capabilities) {
        process.env.DOMAIN = DOMAIN;
        },
    });