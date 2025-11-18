import React from "react";
import "./Impacto.css";

function Impacto() {
  return (
    <section className="impacto-section">
      <div className="impacto-background"></div>



      <div className="impacto-header">
        <h1 className="impacto-title">E como isso impacta?</h1>
        <p className="impacto-subtitle">
          O descarte inadequado de resíduos eletrônicos afeta diferentes níveis da sociedade e do planeta
        </p>
      </div>

      <div className="impact-card-row">

        <div className="impact-card impact-card-vulnerable">
          <div className="impact-card-top">
            <div className="impact-icon-circle">
              <svg width="40" height="40" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.5796 39.0378C56.875 34.7424 59.5834 31.1457 59.5834 25.7291C59.5833 22.7152 58.669 19.7723 56.9613 17.289C55.2536 14.8057 52.8328 12.8988 50.0186 11.8201C47.2044 10.7415 44.1292 10.5419 41.1992 11.2477C38.2691 11.9535 35.6221 13.5315 33.6077 15.7732M52.5796 39.0378C52.0454 39.5721 51.4112 39.9959 50.7133 40.285C50.0153 40.5741 49.2672 40.723 48.5117 40.723C47.7562 40.723 47.0081 40.5741 46.3101 40.285C45.6121 39.9959 44.978 39.5721 44.4438 39.0378C45.0221 39.5608 45.4881 40.1959 45.8135 40.9046C46.1388 41.6132 46.3166 42.3806 46.3362 43.1601C46.3558 43.9396 46.2167 44.715 45.9274 45.439C45.638 46.1631 45.2045 46.8208 44.6532 47.3722C44.1018 47.9236 43.4441 48.3571 42.72 48.6464C41.9959 48.9357 41.2206 49.0748 40.4411 49.0553C39.6615 49.0357 38.8942 48.8578 38.1855 48.5325C37.4769 48.2072 36.8418 47.7412 36.3188 47.1628C36.8534 47.6954 37.2778 48.3281 37.5677 49.0248C37.8577 49.7214 38.0074 50.4685 38.0084 51.2231C38.0094 51.9777 37.8617 52.7251 37.5736 53.4225C37.2855 54.12 36.8628 54.7538 36.3296 55.2878C35.815 55.8026 35.2018 56.2084 34.5268 56.4809C33.8518 56.7535 33.1289 56.8872 32.401 56.874C31.6732 56.8609 30.9555 56.7012 30.2908 56.4044C29.6261 56.1077 29.028 55.68 28.5323 55.147L13.5417 40.6249C9.47919 36.5624 5.41669 31.9582 5.41669 25.7291C5.41729 22.7155 6.33195 19.7729 8.03987 17.29C9.74779 14.8071 12.1686 12.9006 14.9827 11.8224C17.7968 10.7441 20.8718 10.5447 23.8015 11.2506C26.7313 11.9565 29.3781 13.5344 31.3923 15.7759C31.6934 16.0558 32.0895 16.2111 32.5006 16.2106C32.9117 16.2101 33.3073 16.0538 33.6077 15.7732M52.5796 39.0378C53.5951 38.022 54.1655 36.6445 54.1655 35.2082C54.1655 33.7719 53.5951 32.3944 52.5796 31.3786L47.4852 26.2816C46.8791 25.6752 46.1594 25.1941 45.3673 24.8659C44.5753 24.5377 43.7263 24.3688 42.8689 24.3688C42.0115 24.3688 41.1625 24.5377 40.3704 24.8659C39.5783 25.1941 38.8587 25.6752 38.2525 26.2816L33.6213 30.9128C32.6055 31.9283 31.228 32.4987 29.7917 32.4987C28.3554 32.4987 26.9779 31.9283 25.9621 30.9128C24.9466 29.897 24.3762 28.5195 24.3762 27.0832C24.3762 25.6469 24.9466 24.2694 25.9621 23.2536L33.6077 15.7732" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h3 className="impact-content-title">Pessoas Vulneráveis</h3>
          </div>

          <p className="impact-content-description">
            Comunidades de baixa renda próximas a lixões sofrem com doenças causadas por substâncias tóxicas.
          </p>

          <p className="impact-stat">Milhares de famílias em situação de risco</p>

          <img
            className="impact-card-image"
            src="https://f.feridinha.com/AvsTv.png"
            alt="Pessoas vulneráveis"
          />
        </div>

        <div className="impact-card impact-card-society">
          <div className="impact-card-top">
            <div className="impact-icon-circle">
              <svg width="40" height="40" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.3333 56.875V51.4583C43.3333 48.5852 42.192 45.8297 40.1603 43.798C38.1287 41.7664 35.3732 40.625 32.5 40.625H16.25C13.3768 40.625 10.6213 41.7664 8.58968 43.798C6.55803 45.8297 5.41667 48.5852 5.41667 51.4583V56.875" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M43.3333 8.47168C45.6564 9.07393 47.7138 10.4305 49.1825 12.3285C50.6512 14.2265 51.448 16.5585 51.448 18.9583C51.448 21.3582 50.6512 23.6902 49.1825 25.5882C47.7138 27.4862 45.6564 28.8428 43.3333 29.445" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M59.5833 56.875V51.4583C59.5815 49.058 58.7826 46.7262 57.312 44.8292C55.8414 42.9321 53.7824 41.5771 51.4583 40.9771" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24.375 29.7917C30.3581 29.7917 35.2083 24.9414 35.2083 18.9583C35.2083 12.9752 30.3581 8.125 24.375 8.125C18.3919 8.125 13.5417 12.9752 13.5417 18.9583C13.5417 24.9414 18.3919 29.7917 24.375 29.7917Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h3 className="impact-content-title">A Sociedade em Geral</h3>
          </div>

          <p className="impact-content-description">
            Todos somos afetados pela poluição do ar, água contaminada e degradação dos recursos naturais.
          </p>

          <p className="impact-stat">Impacto na qualidade de vida de bilhões de pessoas</p>

          <img
            className="impact-card-image"
            src="https://f.feridinha.com/8fMbO.png"
            alt="Sociedade"
          />
        </div>

        <div className="impact-card impact-card-environment">
          <div className="impact-card-top">
            <div className="impact-icon-circle">
              <svg width="40" height="40" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.7917 54.1667C25.036 54.1812 20.4486 52.4077 16.9393 49.1981C13.43 45.9885 11.2552 41.5772 10.8462 36.8391C10.4371 32.1011 11.8238 27.3823 14.731 23.6188C17.6383 19.8552 21.8539 17.3218 26.5417 16.5209C41.9792 13.5417 46.0417 12.1334 51.4584 5.41675C54.1667 10.8334 56.875 16.7376 56.875 27.0834C56.875 41.9792 43.9292 54.1667 29.7917 54.1667Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.41669 56.875C5.41669 48.75 10.4271 42.3583 19.175 40.625C25.7292 39.325 32.5 35.2083 35.2084 32.5" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h3 className="impact-content-title">O Meio Ambiente</h3>
          </div>

          <p className="impact-content-description">
            Contaminação de solos, rios e oceanos. Destruição de ecossistemas e perda de biodiversidade.
          </p>

          <p className="impact-stat">50 milhões de toneladas de lixo eletrônico por ano</p>

          <img
            className="impact-card-image"
            src="https://f.feridinha.com/NZG6U.png"
            alt="Meio ambiente"
          />
        </div>
      </div>

      <img
        className="center-image"
        src="https://f.feridinha.com/8fMbO.png"
        alt=""
      />

      <img
        className="bottom-image bottom-image-left"
        src="https://f.feridinha.com/AvsTv.png"
        alt=""
      />

      <img
        className="bottom-image bottom-image-right"
        src="https://f.feridinha.com/NZG6U.png"
        alt=""
      />
    </section>
  );
}

export default Impacto;
