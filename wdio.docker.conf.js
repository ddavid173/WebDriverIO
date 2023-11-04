import * as main from './wdio.conf.js';
const browserVersion = process.env.CHROME_BROWSER_VERSION || 'stable';

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
    });