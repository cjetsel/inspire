export default class Quote {
  constructor(data) {
    this.quote_id = data.quote.id,
      this.author = data.quote.author,
      this.quote = data.quote.body
  }

  QuoteTemplate() {
    return `
    <h6 class="quote">${this.quote}</h6>
    <footer class="blockquote-footer quote">${this.author}</footer>`
  }
}