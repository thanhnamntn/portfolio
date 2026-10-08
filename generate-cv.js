const { chromium } = require('/Users/namnguyen/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'cv.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

  await page.pdf({
    path: path.resolve(__dirname, 'NamNguyen_CV.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log('PDF generated: NamNguyen_CV.pdf');
})();
