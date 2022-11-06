
import {test,expect} from '@playwright/test'

const imgFolder="tests/screenshots/"

test("Full page screenshot",async({page})=>{
  // navigate to page
  await page.goto("https://research-software-directory.org")
  // make screenshot
  await page.screenshot({path:`${imgFolder}/homepage.png`,fullPage:true})
})


test("Element screenshot",async({page})=>{
  // navigate to page
  await page.goto("https://research-software-directory.org")
  // make screenshot
  const element = await page.$("h1")
  if (element){
    await element.screenshot({path:`${imgFolder}/homepage-h1.png`})
  }
})
