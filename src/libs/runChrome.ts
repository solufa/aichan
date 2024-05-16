import { chromium } from 'playwright';

export const getChrome = async () => {
  const browser = await chromium.launch({ slowMo: 500, headless: false });
  const page = await browser.newPage({ locale: 'ja-JP', viewport: { width: 1280, height: 720 } });

  return { browser, page };
};
