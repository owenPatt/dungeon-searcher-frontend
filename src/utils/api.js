class Open5e {
  constructor() {
    this.baseUrl = "https://api.open5e.com";
    this.searchLimit = 50;
  }

  async searchMonsters(query) {
    if (!query) throw new Error("You must provide a search query.");
    let url = `${this.baseUrl}/monsters/?search=${query}&limit=${this.searchLimit}&ordering=cr`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    const monsters = await response.json();
    return monsters;
  }
}

module.exports = { Open5e };
