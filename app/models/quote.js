export default class Quote {
  constructor(data) {
    this.quote_id = data.quote.id,
      this.author = data.quote.author,
      this.quote = data.quote.body
  }

  QuoteTemplate() {
    return `
    <h6>${this.quote}</h6>
    <h6>${this.author}</h6>`
  }
}