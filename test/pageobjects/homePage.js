import Page from './basePage.js'

class homePage extends Page {
    get banner() {
        return $('body > h1')
    }
}

export default new homePage();