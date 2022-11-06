import {test,expect} from '@playwright/test'

const baseUrl = "https://research-software-directory.org"

test.beforeEach(async({page})=>{
  // navigate
  await page.goto(`${baseUrl}/software`)
})

test("Software page title",async({page})=>{
  // navigate
  // await page.goto(`${baseUrl}/software`)
  // check title
  await expect(page).toHaveTitle("Software | Research Software Directory")
  // assert filter on element
  const filter = page.getByTestId('FilterAltIcon')
  // only one filter element on page
  await expect(filter).toHaveCount(1)
  // filter is visible
  await expect(filter).toBeVisible()
})

test.skip("Software page cards",async({page})=>{
  const location = page.url()
  console.log("location...",location)
  // this selection does not work!
  const cards = await page
    .getByRole("grid")
    .getByRole("link")
  await expect(cards).toHaveCount(12)
})