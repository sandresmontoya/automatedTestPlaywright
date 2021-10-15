

exports.GoogleTranslatePage = class GoogleTranslatePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.googleTraductorLink = page.locator('[aria-label="Texto original"]');
    this.palabraTraducida = page.locator('text=prueba automatizada');
  }

  async goto() {
    await this.page.goto('https://translate.google.com/?hl=es');
  }

  async textoATraducir() {
      
    await this.googleTraductorLink.click();
    await this.page.fill('[aria-label="Texto original"]', 'automated test');
    
  }
}


