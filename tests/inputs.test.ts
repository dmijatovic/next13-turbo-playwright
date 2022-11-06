import {test,expect} from '@playwright/test'

test("Inputs example",async({page})=>{
  await page.goto("http://zero.webappsecurity.com/index.html")
  // click to signin
  await page.click("#signin_button")

  // type in the values
  await page.type('#user_login','some name')
  await page.type("#user_password","some password")

  // click on button with text Sign in
  await page.click("text=Sign in")

  // validate
  const msg = await page.locator('.alert-error')
  await expect(msg).toContainText("Login and/or password are wrong")
})