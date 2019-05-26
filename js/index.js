// your code here
function getRepositories() {
  const username = document.getElementById('username').value
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}

function displayRepositories() {\
  const repos = JSON.parse(this.responseText);
  const repoList = `<ul>${repos.map(r => '<li>' + `<a href= ${r.html_url}>${r.name}</a>` + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`;
}
