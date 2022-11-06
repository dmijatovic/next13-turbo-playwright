
import {test, expect} from '@playwright/test'
const {beforeEach} = test

const baseUrl = "https://research-software-directory.org"

beforeEach(async({page})=>{
  // naviagte to page
  await page.goto(baseUrl)
})

test('Homepage h1 title contains "...impact of research software..."',async({page})=>{
  const pageTitle = await page.locator('h1')
  // console.log(await pageTitle.innerText())
  // validate h1 has part of the text
  await expect(pageTitle).toContainText("impact of research software")
})

test('Uses discover button to navigate to software page', async({page})=>{
  // to click on element use selector
  // normal css selectors
  // plus text=
  await page.click("text=Discover Software")

  await expect(page).toHaveURL(`${baseUrl}/software`)
  await expect(page).toHaveTitle("Software | Research Software Directory")
  // const pageTitle = await page.locator("h1")
  // const title = await pageTitle.innerText()
  // expect(title).toEqual("Software")
})