const puppeteer = require("puppeteer");

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({    
    headless: "new", 
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
}, 30000);


afterAll(async () => {
  await browser.close();
});

async function clickButtonWithValue(value) {
  await page.evaluate((value) => {
    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    const button = buttons.find((button) => button.value === value);
    button.click();
  }, value);
}

async function clearCalculator() {
  await page.evaluate(() => {
      const clearButton = Array.from(document.querySelectorAll('input[type="button"]')).find((button) => button.value === 'C');
      clearButton.click();
  });
}


test("2 + 3 = 5", async () => {
  await clearCalculator();
  await clickButtonWithValue("2");
  await clickButtonWithValue("+");
  await clickButtonWithValue("3");
  await clickButtonWithValue("=");
  const result = await page.evaluate(
    () => document.getElementById("result").value
  );
  expect(result).toBe("5");
});

test("6 * 7 = 42", async () => {
  await clearCalculator();
  await clickButtonWithValue("6");
  await clickButtonWithValue("*");
  await clickButtonWithValue("7");
  await clickButtonWithValue("=");
  const result = await page.evaluate(
    () => document.getElementById("result").value
  );
  expect(result).toBe("42");
});

test("9 - 4 = 5", async () => {
  await clearCalculator();
  await clickButtonWithValue("9");
  await clickButtonWithValue("-");
  await clickButtonWithValue("4");
  await clickButtonWithValue("=");
  const result = await page.evaluate(
    () => document.getElementById("result").value
  );
  expect(result).toBe("5");
});

test("8 / 2 = 4", async () => {
  await clearCalculator();
  await clickButtonWithValue("8");
  await clickButtonWithValue("/");
  await clickButtonWithValue("2");
  await clickButtonWithValue("=");
  const result = await page.evaluate(
    () => document.getElementById("result").value
  );
  expect(result).toBe("4");
});

test("2.5 + 2.5 = 5", async () => {
  await clearCalculator();
  await clickButtonWithValue("2");
  await clickButtonWithValue(".");
  await clickButtonWithValue("5");
  await clickButtonWithValue("+");
  await clickButtonWithValue("2");
  await clickButtonWithValue(".");
  await clickButtonWithValue("5");
  await clickButtonWithValue("=");
  const result = await page.evaluate(
      () => document.getElementById("result").value
  );
  expect(result).toBe("5");
});

