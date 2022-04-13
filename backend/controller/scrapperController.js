const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const puppeteer = require("puppeteer");
const fs = require("fs");

exports.getLinkedInScrapper = catchAsyncErrors(async (req, res, next) => {
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.goto(
  //   "https://www.linkedin.com/jobs/search/?geoId=102713980&keywords=coding&location=India"
  // );
  // const HackList = await page.evaluate(() => {
  //   let hotelsElms = document.querySelectorAll(".job-search-card");
  //   let results = [];
  //   hotelsElms.forEach((hack) => {
  //     results.push({
  //       name: hack.querySelector("h3").innerText.trim(),
  //       company_name: hack
  //         .querySelector("h4.base-search-card__subtitle")
  //         .innerText.trim(),
  //       location: hack
  //         .querySelector(".job-search-card__location")
  //         .innerText.trim(),
  //     });
  //   });
  //   return results;
  // });
  // await browser.close();
  // res.json(HackList);


(async function scrape() {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto('https://conferences.ieee.org/conferences_events/conferences/search?q=India&subsequent_q=&date=all&from=&to=&region=all&country=all&pos=0&sortorder=desc&sponsor=&sponsor_type=all&state=all&field_of_interest=all&sortfield=relevance&searchmode=basic&virtualflag=B&virtualConfReadOnly=N&eventformat=');

    //  await page.waitForSelector('.item-title');
    // await page.select('.item-title');

    //  await page.waitForSelector('.item-details');
     page.onLoad.listen((_) => page.waitForSelector('.conference-item'));
    //  await page.select('.conference-item');
    // await page.select('.item-details');

    // await page.click('.item-date');
    // await page.waitForSelector('.conference-item');

    // extracting information from code
    let quotes = await page.evaluate(() => {

        let quotesElement = document.body.querySelectorAll('.conference-item');
        let quotes = Object.values(quotesElement).map(x => {
            return {
                author: x.querySelector('.item-title').innerText ?? null,
                // quote: x.querySelector('.item-date').textContent ?? null,
                // tag: x.querySelector('.item-details').textContent ?? null,

            }
        });

        return quotes;

    });

    // logging results
    console.log(quotes);
    await browser.close();

})();

});

exports.getMLHScrapper = catchAsyncErrors(async (req, res, next) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://mlh.io/seasons/2022/events");
  const HackList = await page.evaluate(() => {
    let hotelsElms = document.querySelectorAll(".event");
    let results = [];
    hotelsElms.forEach((hack) => {
      results.push({
        name: hack.querySelector(".event-name").innerText.trim(),
        link: hack.querySelector("a").href,
        date: hack.querySelector("p").innerText.trim(),
      });
    });
    return results;
  });
  await browser.close();
  res.json(HackList);
});

exports.getLeetcodeContest = catchAsyncErrors(async (req, res, next) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://leetcode.com/contest/");
  const HackList = await page.evaluate(() => {
    let hotelsElms = document.querySelectorAll(".contest-title ");
    let results = [];
    hotelsElms.forEach((hack) => {
      results.push({
        name: hack.querySelector(".title").innerText.trim(),
        date: hack.querySelector(".date").innerText.trim(),
        link: hack.querySelector("a").href,
      });
    });

    return results;
  });

  res.json(HackList);

  console.log(HackList);
  await browser.close();
  res.status(200).json({
    results,
  });
});

exports.getCodechefContest = catchAsyncErrors(async (req, res, next) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.codechef.com/contests/?itm_medium=navmenu&itm_campaign=allcontests_head"
  );

  const HackList = await page.evaluate(() => {
    let hotelsElms = document.querySelectorAll("#future-contests-data > tr");
    let results = [];
    hotelsElms.forEach((hack) => {
      results.push({
        name: hack.querySelector("td:nth-child(2)").innerText.trim(),
        organizer: "Codechef",
        date: hack.querySelector("td:nth-child(3)").innerText.trim(),
        duration: hack.querySelector("td:nth-child(4)").innerText.trim(),
        link: hack.querySelector("td:nth-child(2) > a").href,
      });
    });
    return results;
  });
  res.json(HackList);
  console.log(HackList);
  await browser.close();
  res.status(200).json({
    results,
  });
});

exports.getIeeeScrapper = catchAsyncErrors(async (req, res, next) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(
    "https://conferences.ieee.org/conferences_events/conferences/search?q=*"
  );
  const HackList = await page.evaluate(() => {
    let hotelsElms = document.querySelectorAll(".conference-item");
    let results=[];
    hotelsElms.forEach((hack) => {
      results.push({
        name: hack.querySelector(".item-title").innerText,
        details: hack.querySelector(".item-about").innerText,
        date: hack.querySelector(".item-date").innerText,
      });
    });
    return results;
  });
  await browser.close();
  res.json(HackList);
});
