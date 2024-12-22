import groos from './assets/groos.svg';
import GitHubCard from './components/GithubCard';
import './index.css';
import './App.css';
const App = () => {
  return (
    <>
      <div className='bg-[#d3d3d3] min-h-screen flex justify-center'>
        <div className='bg-[#f6f6f6] rounded-tl-3xl rounded-tr-3xl mt-8 shadow-lg w-11/12 max-w-5xl'>
          <div className=' flex justify-between '>
            <div className='ml-8 w-a mt-4'>
              <div className='flex'>
                <div className='flex w-10 h-10 '>
                  <img src={groos}></img>
                  <div className='flex items-center ml-3'>
                    <strong>
                      <span className='text-gray-800'>Groos</span>
                    </strong>
                  </div>
                </div>
                <div className='flex ml-20 gap-4 w-auto bg-red-500 h-10 items-center'></div>
                <div className='flex justify-center items-center'>
                  <a
                    href='https://web3.career/'
                    className='underline-animation cursor-pointer text-blue-500 hover:text-blue-700'
                  >
                    Web3
                  </a>
                </div>
              </div>
            </div>
            <div className='h-10 flex items-center mt-4 mr-8'>
              <h1>About me</h1>
            </div>
          </div>
          <div className='flex  justify-around ml-20 mt-24'>
            <div className='size-36'>
              <h1 className='font-sans text-6xl'>
                I've been following recently.
              </h1>
            </div>
            <div>
              <div className='m-4'>
                <GitHubCard
                  owner={'Groos-dev'}
                  repo={'github-cli'}
                ></GitHubCard>
              </div>
              <div className='m-4'>
                <GitHubCard
                  owner={'helloqingfeng'}
                  repo={'Awsome-Front-End-learning-resource'}
                ></GitHubCard>
              </div>
            </div>
          </div>
          <div className='ml-20 mt-11'>
            <p className='text-3xl m-8'>contributions in the last year!</p>
            <div className=''>
              <div className='w-11/12'>
                <img
                  src='https://ghchart.rshah.org/Groos-dev'
                  alt='GitHub Contribution Chart'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
