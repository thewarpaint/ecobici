const puppeteer = require('puppeteer');

const pageSize = 640;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.setViewport({
    deviceScaleFactor: 2,
    width: pageSize,
    height: pageSize,
  });

  await page.goto('https://thewarpaint.github.io/ecobici/', {
    waitUntil: 'networkidle0',
  });

  await sleep(2500);

  await page.screenshot({
    path: getScreenshotFilename(),
  });

  await browser.close();
})();

function getScreenshotFilename() {
  const currentDateTime = new Date().toISOString().replace(/[:\.]/g, '-');

  return `screenshots/${currentDateTime}.png`;
}

function sleep(timeMs) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeMs);
  });
}
