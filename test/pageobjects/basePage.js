import { browser } from '@wdio/globals'

class Page {

    async goTo (path = '') {
        await browser.url(`https://server-production-8aa75.up.railway.app/${path}`)
        await browser.waitUntil(async () => {
            let loadState = await browser.execute(() => document.readyState)
            return loadState === 'complete'
        })
    }
}

export default Page;
