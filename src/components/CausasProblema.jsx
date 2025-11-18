import './CausasProblema.css';

function CausasProblema() {
  return (
    <section className="causas-section">
      <div className="causas-container">
        <div className="section-header">
          <h1 className="section-title">Causas do Problema</h1>
          <p className="section-subtitle">
            Entender as raízes do problema é o primeiro passo para encontrar soluções efetivas
          </p>
        </div>

        <div className="cards-container">
          <div className="causa-card">
            <div className="icon-container icon-blue">
              <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M82.7708 39.9583L54.2292 68.4999" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.8333 111.313V25.6876C22.8333 21.9027 24.3369 18.2729 27.0132 15.5966C29.6895 12.9203 33.3193 11.4167 37.1042 11.4167H108.458C109.972 11.4167 111.424 12.0182 112.495 13.0887C113.565 14.1592 114.167 15.6111 114.167 17.1251V119.875C114.167 121.389 113.565 122.841 112.495 123.911C111.424 124.982 109.972 125.583 108.458 125.583H37.1042C33.3193 125.583 29.6895 124.08 27.0132 121.404C24.3369 118.727 22.8333 115.097 22.8333 111.313ZM22.8333 111.313C22.8333 107.528 24.3369 103.898 27.0132 101.222C29.6895 98.5453 33.3193 97.0417 37.1042 97.0417H114.167" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M54.2292 39.9583L82.7708 68.4999" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">Falta de Conhecimento</h3>
              <p className="card-description">
                A população não recebe informações adequadas sobre os riscos do descarte incorreto e alternativas disponíveis.
              </p>
            </div>
          </div>

          <div className="causa-card causa-card-reverse">
            <div className="card-content card-content-right">
              <h3 className="card-title card-title-right">Acúmulo nas Residências</h3>
              <p className="card-description card-description-right">
                Celulares antigos, computadores obsoletos e outros eletrônicos velhos se acumulam em residências sem saber onde descartar.
              </p>
            </div>
            <div className="icon-container icon-purple">
              <svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M101.25 141.75V87.75C101.25 85.9598 100.539 84.2429 99.273 82.977C98.0071 81.7112 96.2902 81 94.5 81H67.5C65.7098 81 63.9929 81.7112 62.727 82.977C61.4612 84.2429 60.75 85.9598 60.75 87.75V141.75" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.25 67.5001C20.2495 65.5363 20.6775 63.596 21.5041 61.8147C22.3306 60.0333 23.5359 58.4537 25.0358 57.1861L72.2858 16.6861C74.7224 14.6267 77.8097 13.4968 81 13.4968C84.1903 13.4968 87.2776 14.6267 89.7143 16.6861L136.964 57.1861C138.464 58.4537 139.669 60.0333 140.496 61.8147C141.323 63.596 141.75 65.5363 141.75 67.5001V128.25C141.75 131.83 140.328 135.264 137.796 137.796C135.264 140.328 131.83 141.75 128.25 141.75H33.75C30.1696 141.75 26.7358 140.328 24.2041 137.796C21.6723 135.264 20.25 131.83 20.25 128.25V67.5001Z" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="causa-card">
            <div className="icon-container icon-orange">
              <svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.5 81H94.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M67.5 54H94.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M94.5 141.75V121.5C94.5 117.92 93.0777 114.486 90.5459 111.954C88.0142 109.422 84.5804 108 81 108C77.4196 108 73.9858 109.422 71.4541 111.954C68.9223 114.486 67.5 117.92 67.5 121.5V141.75" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M40.5 67.5H27C23.4196 67.5 19.9858 68.9223 17.4541 71.4541C14.9223 73.9858 13.5 77.4196 13.5 81V128.25C13.5 131.83 14.9223 135.264 17.4541 137.796C19.9858 140.328 23.4196 141.75 27 141.75H135C138.58 141.75 142.014 140.328 144.546 137.796C147.078 135.264 148.5 131.83 148.5 128.25V60.75C148.5 57.1696 147.078 53.7358 144.546 51.2041C142.014 48.6723 138.58 47.25 135 47.25H121.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M40.5 141.75V33.75C40.5 30.1696 41.9223 26.7358 44.4541 24.2041C46.9858 21.6723 50.4196 20.25 54 20.25H108C111.58 20.25 115.014 21.6723 117.546 24.2041C120.078 26.7358 121.5 30.1696 121.5 33.75V141.75" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">Pouco Incentivo do Governo</h3>
              <p className="card-description">
                Falta de ações governamentais efetivas e pontos de coleta mais acessíveis para incentivar a reciclagem.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default CausasProblema;
