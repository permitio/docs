import React, { useEffect, useState } from 'react';

const GitHubIcon = () => (
  <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const RepoCard = ({ repo }) => (
  <article className="col col--12 margin-bottom--lg" style={{ padding: 0 }}>
    <a 
      href={repo.html_url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="card"
      style={{ 
        textDecoration: 'none', 
        color: 'inherit',
        backgroundColor: 'var(--ifm-color-emphasis-100)'
      }}
    >
      <div className="card__header">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <GitHubIcon />
          {repo.name}
        </h3>
      </div>
      <div className="card__body">
        <p>{repo.description || 'No description available.'}</p>
      </div>
    </a>
  </article>
);

export default function GitHubExamples() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=org:permitio+example+in:name+archived:false&sort=updated&order=desc')
      .then(response => response.json())
      .then(data => {
        const filteredRepos = data.items.filter(repo => 
          repo.name.toLowerCase().includes('example') || 
          repo.name.toLowerCase().includes('demo')
        );
        setRepos(filteredRepos);
      })
      .catch(error => console.error('Error fetching repos:', error));
  }, []);

  return (
    <div className="row">
      {repos.map(repo => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
} 