class Cookies {

    get SESSIONID() {
        return 'session_id'
    }

    async setCookie(name, value) {
        await browser.setCookies({
            name: name,
            value: value,
            domain: 'server-production-8aa75.up.railway.app',
            path: '/',
            httpOnly: false,
            secure: false,
            sameSite: 'noRestriction'
        })
    }
    async getCookies(name) {
        return await browser.getCookies([name])
    }
    async deleteCookie(name) {
        await browser.deleteCookies([name])
    }
    async deleteAllCookies() {
        await browser.deleteAllCookies()
    }
}

export default new Cookies();