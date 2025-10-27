
const API_KEY = 'YOUR_API_KEY';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const container = document.getElementById('news-container');
const sample = [{ title: "Sample News Article 1:", description: "Description of article 1", url: "https://example.com/news1" },
                { title: "Sample News Article 2:", description: "Description of article 2", url: "https://example.com/news2" }];
const articleHTML = ({ title, description, url }) => `
  <div style="margin-bottom:20px; border-bottom:1px solid #ccc; padding-bottom:10px;">
    <h2>${title}</h2>
    <p>${description || 'No description available.'}</p>
    <a href="${url}" target="_blank" rel="noopener noreferrer">Read more<hr></a>
  </div>`;
fetch(url)
  .then(res => res.json())
  .then(data => {
    if (data.status !== 'ok') throw new Error(data.message);
    container.innerHTML = (data.articles.length ? data.articles : sample).map(articleHTML).join('');
  })
  .catch(() => {
    container.innerHTML = sample.map(articleHTML).join('');
  });