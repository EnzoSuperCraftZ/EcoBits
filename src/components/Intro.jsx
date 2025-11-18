import './Intro.css';

function Intro({ onNavigateToMap }) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: 988,
      behavior: 'smooth'
    });
  };

  const handleLearnMore = () => {
    handleScrollDown();
  };

  return (
    <div className="intro-container">
      <img
        className="background-image"
        src="https://f.feridinha.com/VmAHc.png"
        alt=""
      />
      <img
        className="logo-image"
        src="https://f.feridinha.com/O4Hxt.png"
        alt="Ecobits Logo"
      />
      <div className="main-heading">
        <span>Como o lixo eletrônico afeta o nosso dia-a-dia</span>
      </div>
      <button className="pagination-button pagination-button-right" onClick={handleLearnMore}>
        <span>Saiba Mais</span>
        <svg className="arrow-right" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.125 19.5H30.875M30.875 19.5L19.5 8.125M30.875 19.5L19.5 30.875" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <svg className="arrow-down" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleScrollDown}>
        <g filter="url(#filter0_f_7_113)">
          <path d="M24 10V38M24 38L38 24M24 38L10 24" stroke="#767676" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <filter id="filter0_f_7_113" x="-1.5" y="-1.5" width="51" height="51" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="0.75" result="effect1_foregroundBlur_7_113"/>
          </filter>
        </defs>
      </svg>
      <button className="pagination-button pagination-button-left" onClick={onNavigateToMap}>
        <span>Encontrar Pontos de Coleta</span>
      </button>
      <div className="section-heading section-heading-left">
        <span>Já está ciente?</span>
      </div>
      <div className="section-heading section-heading-right">
        <span>Quer Aprender Sobre?</span>
      </div>
    </div>
  );
}

export default Intro;
