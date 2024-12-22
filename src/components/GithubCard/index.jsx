/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const GitHubCard = ({ owner, repo }) => {
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`,
      );
      const data = await response.json();
      setRepoData(data);
      setLoading(false);
    };

    fetchRepoData();
  }, [owner, repo]);

  if (loading) {
    return (
      <div className='border p-4 rounded-lg shadow-md max-w-md min-h-[200px]'>
        <div className='h-6 bg-gray-300 rounded w-3/4 mb-2'></div>{' '}
        {/* Placeholder for title */}
        <div className='h-4 bg-gray-300 rounded w-2/3 mb-4'></div>{' '}
        {/* Placeholder for description */}
        <div className='flex justify-between mt-4'>
          <div className='h-4 bg-gray-300 rounded w-1/4'></div>{' '}
          {/* Placeholder for stars */}
          <div className='h-4 bg-gray-300 rounded w-1/4'></div>{' '}
          {/* Placeholder for forks */}
          <div className='h-4 bg-gray-300 rounded w-1/4'></div>{' '}
          {/* Placeholder for language */}
        </div>
      </div>
    );
  }

  if (!repoData) {
    return <div>Project not found.</div>;
  }

  return (
    <div className='border p-4 rounded-lg shadow-md max-w-md'>
      <h2 className='text-xl font-semibold'>{repoData.name}</h2>
      <p className='text-gray-500 break-words'>
        {repoData.description || 'No description available.'}
      </p>
      <div className='flex justify-between mt-4'>
        <span> {repoData.stargazers_count} Stars</span>
        <span> {repoData.forks_count} Forks</span>
        <span> {repoData.language}</span>
      </div>
      <a
        href={repoData.html_url}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 mt-2 inline-block'
      >
        View on GitHub
      </a>
    </div>
  );
};

export default GitHubCard;
