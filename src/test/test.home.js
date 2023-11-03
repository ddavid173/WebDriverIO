import homePage from '../pageobjects/homePage.js'

describe('Home Page Check', () => {
    it('Check that the landing page is loading', async () => {
        await homePage.goTo()
        expect(await homePage.banner.isDisplayed()).to.equal(true, 'Banner is not displayed')
        console.log(`Banner is displayed. Text is: ${await homePage.banner.getText()}`)
    })
})

