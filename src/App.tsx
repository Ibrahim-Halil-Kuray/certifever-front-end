import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import baselhack from './assests/images/logohack.png';
import certifever from './assests/images/certifever.svg';
import './App.css';
import Language from './components/Language';
import Difficulty from './components/Difficulty';
import Questions from './components/Questions';


const App: React.FunctionComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );
  const [apiUrl, setApiUrl] = useState<string | null>(null);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);

    // difficulty lvl depending on users choice
    if (difficulty === 'Beginner') {
      setApiUrl('http://localhost:3000/expert.json');
    } else if (difficulty === 'Advanced') {
      setApiUrl('http://localhost:3000/advanced.json');
    } else if (difficulty === 'Expert') {
      setApiUrl('https://www.api.org/sda125');
    }
  };


  return (
<body data-theme="cmyk" className="  ">
      <header className="bg-neutral flex justify-between w-full h-32 p-2">
      
      <div className=''>
        <a className="link link-hover" href="./">
           <img src={certifever} alt="Logo Certifever" className='h-full' />
        </a>
      </div>
        
        <div className='uppercase font-bolid text-white align-middle text-3xl place-self-center w-full'>
           Certifever  for ever
        </div>
        <div className=''>
          <a className="link link-hover" href="https://www.baselhack.ch/" target="_blank" rel="noreferrer">
            <img src={baselhack} alt="HackBasel" className="h-full float-right " />
          </a>
        </div>  
        
      </header>
      <div className="bg-slate-200 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      
    
        <main className=" md:w-2/3 lg:w-3/4 px-5 py-40">
          <p>

          {!selectedLanguage ? (
        <Language onSelectLanguage={handleLanguageSelect} />
      ) : !selectedDifficulty ? (
        <Difficulty onSelectDifficulty={handleDifficultySelect} />
      ) : apiUrl ? (
        <Questions apiUrl={apiUrl} />
      ) : (
        <div>
          <h2>Uploading...</h2>
        </div>
      )}
          </p>
        </main>
      </div>

      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">AI Prompters Team</header>
          <a className="link link-hover" href="./">Anurag Grag</a>
          <a className="link link-hover" href="./">Liam Hoo</a>
          <a className="link link-hover" href="./">Martin Mraz</a>
          <a className="link link-hover" href="./">Ibrahim Kuray</a>
        </nav>
        <nav>
          <header className="footer-title">AI Prompters Team</header>
          <a className="link link-hover" href="./">Chris Vogel</a>
          <a className="link link-hover" href="./">David Zimmerli</a>
          <a className="link link-hover"href="./">Joel Zimmerli</a>
        </nav>
        <nav>
          <header className="footer-title">Created 2023</header>
          <a className="link link-hover" href="https://www.baselhack.ch/" target="_blank" rel="noreferrer">
            BaselHack
          </a>
          <a className="link link-hover" href="./">Project Idea of Roland Brand</a>
          <a
            className="link link-hover" target="_blank" rel="noreferrer"
            href="https://github.com/zimmj/certifever-ai-prompt"
          >
            GitHub Reposotory
          </a>
        </nav>
      </footer>
    </body>
  );
};

export default App;
