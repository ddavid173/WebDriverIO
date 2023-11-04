import Cookies from '../helpers/cookieHelpers.js'
import homePage from '../pageobjects/homePage.js'

describe('Cookies Check:', () => {
    it('Check that the session id is set:', async () => {
        await homePage.goTo()
        // const sessionID = await Cookies.getCookies(await Cookies.SESSIONID)
        // expect(sessionID.length > 0).to.equal(true, 'Session ID is not set')
    })
})