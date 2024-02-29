class Open5e {
  constructor() {
    this.baseUrl = "https://api.open5e.com";
    this.searchLimit = 50;
    this.lastUrl = "";
  }

  async searchMonsters(query) {
    if (!query) throw new Error("You must provide a search query.");
    let url = `${this.baseUrl}/monsters/?search=${query}&limit=${this.searchLimit}&ordering=cr&page=1`;
    this.lastUrl = url;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    const monsters = await response.json();
    return monsters;
  }

  async changePage(page) {
    if (this.lastUrl === "")
      throw new Error("You must perform a search first.");
    this.lastUrl = this.lastUrl.slice(0, -1) + page;
    const response = await fetch(this.lastUrl, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    const result = await response.json();
    return result;
  }
}

module.exports = { Open5e };
