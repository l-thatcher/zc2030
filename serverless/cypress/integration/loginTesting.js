import dotenv from 'dotenv';

dotenv.config()

describe("Login page", () => {
    before(() => {
        cy.log(`Visiting https://localhost:3000`)
        cy.visit("/")
    })
    it("Login with Google", () => {
        const username = process.env.GOOGLE_USER
        const password = process.env.GOOGLE_PW
        const loginUrl = process.env.SITE_NAME
        const cookieName = process.env.COOKIE_NAME
        const socialLoginOptions = {
            username: username,
            password: password,
            loginUrl: loginUrl,
            headless: true,
            logs: false,
            isPopup: true,
            loginSelector: `a[href="${
                process.env.SITE_NAME
            }/api/auth/signin/google"]`,
            postLoginSelector: ".unread-count",
        }

        return cy
            .task("GoogleSocialLogin", socialLoginOptions)
            .then(({cookies}) => {
                cy.clearCookies()

                const cookie = cookies
                    .filter((cookie) => cookie.name === cookieName)
                    .pop()
                if (cookie) {
                    cy.setCookie(cookie.name, cookie.value, {
                        domain: cookie.domain,
                        expiry: cookie.expires,
                        httpOnly: cookie.httpOnly,
                        path: cookie.path,
                        secure: cookie.secure,
                    })

                    Cypress.Cookies.defaults({
                        preserve: cookieName,
                    })

                    // remove the two lines below if you need to stay logged in
                    // for your remaining tests
                    cy.visit("/api/auth/signout")
                    cy.get("form").submit()
                }
            })
    })
})