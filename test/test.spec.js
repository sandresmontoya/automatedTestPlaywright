const { test, expect } = require('@playwright/test');
const { GoogleTranslatePage } = require('./googleTranslatePage');



test('Palabra traducida correctamente', async ({ page }) => {
   
    const googleTranslate = new GoogleTranslatePage(page);
    await googleTranslate.goto();
    await googleTranslate.textoATraducir();
    expect(googleTranslate.palabraTraducida).toBeVisible;

  
});