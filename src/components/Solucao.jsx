import './Solucao.css';

function Solucao({ onNavigateToMap }) {
  return (
    <section className="solucao-section">
      <img
        className="solucao-background"
        src="https://f.feridinha.com/PWV5d.png"
        alt=""
      />
      
      

      <div className="solucao-header">
        <h1 className="solucao-title">Você faz a diferença</h1>
        <p className="solucao-subtitle">
          Cada pequena ação conta. Descarte seus eletrônicos de forma adequada e ajude a construir um futuro mais sustentável.
        </p>
      </div>

      <div className="action-cards">
        <div className="action-card">
          <svg className="action-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4394 49.5853H12.6127C11.7716 49.5877 10.9441 49.3727 10.2105 48.9611C9.47698 48.5494 8.86228 47.9552 8.42608 47.236C8.00717 46.5136 7.78567 45.6937 7.78379 44.8587C7.78192 44.0237 7.99975 43.2028 8.41541 42.4786L18.9621 24.252" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.1061 49.5857H50.9807C51.8179 49.5792 52.6392 49.3575 53.3659 48.9418C54.0926 48.5262 54.7001 47.9306 55.1301 47.2124C55.5432 46.492 55.7605 45.6761 55.7605 44.8457C55.7605 44.0153 55.5432 43.1994 55.1301 42.479L51.8607 36.8257" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M37.1061 41.5859L29.1061 49.5859L37.1061 57.5859" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.8874 35.1746L18.9621 24.252L8.0394 27.18" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.6901 14.415L27.6048 9.36962C28.0233 8.64001 28.6233 8.03097 29.3466 7.60158C30.0698 7.1722 30.8918 6.93705 31.7328 6.91895C32.5673 6.9174 33.3875 7.13538 34.1111 7.55102C34.8347 7.96666 35.4363 8.56534 35.8554 9.28695L46.3701 27.535" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M35.4474 24.607L46.3701 27.535L49.2954 16.6123" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="action-card-content">
            <h3 className="action-card-title">Descarte Corretamente</h3>
            <p className="action-card-description">Procure pontos de coleta certificados em sua cidade</p>
          </div>
        </div>

        <div className="action-card">
          <svg className="action-icon" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.1756 21.4116C52.6101 21.4116 56.2049 17.8167 56.2049 13.3823C56.2049 8.94786 52.6101 5.35303 48.1756 5.35303C43.7412 5.35303 40.1464 8.94786 40.1464 13.3823C40.1464 17.8167 43.7412 21.4116 48.1756 21.4116Z" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.0585 40.1464C20.493 40.1464 24.0878 36.5516 24.0878 32.1172C24.0878 27.6827 20.493 24.0879 16.0585 24.0879C11.6241 24.0879 8.02927 27.6827 8.02927 32.1172C8.02927 36.5516 11.6241 40.1464 16.0585 40.1464Z" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M48.1756 58.8813C52.6101 58.8813 56.2049 55.2865 56.2049 50.852C56.2049 46.4176 52.6101 42.8228 48.1756 42.8228C43.7412 42.8228 40.1464 46.4176 40.1464 50.852C40.1464 55.2865 43.7412 58.8813 48.1756 58.8813Z" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22.9905 36.1587L41.2705 46.8109" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M41.2437 17.4233L22.9905 28.0755" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="action-card-content">
            <h3 className="action-card-title">Compartilhe</h3>
            <p className="action-card-description">Divulgue informações sobre descarte adequado</p>
          </div>
        </div>

        <div className="action-card">
          <svg className="action-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56 56.0001L44.4266 44.4268" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.3333 50.6667C41.1154 50.6667 50.6667 41.1154 50.6667 29.3333C50.6667 17.5513 41.1154 8 29.3333 8C17.5513 8 8 17.5513 8 29.3333C8 41.1154 17.5513 50.6667 29.3333 50.6667Z" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="action-card-content">
            <h3 className="action-card-title">Se Informe</h3>
            <p className="action-card-description">Continue aprendendo sobre sustentabilidade</p>
          </div>
        </div>
      </div>

      <button className="find-locations-button" onClick={onNavigateToMap}>
        <span>Encontrar Pontos de Coleta</span>
      </button>
    </section>
  );
}

export default Solucao;
