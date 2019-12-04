class GitHub {
  constructor() {
    this.client_id = '61c0445b211ebcce9a36';
    this.client_secret = '61f6f4ea3562994486c98751b1ac300c76768cdc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}