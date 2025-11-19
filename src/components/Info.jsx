import './Info.css';

function Info() {
  return (
    <section id="Info" className="info-section">
      <div className="info-background-primary"></div>
      <div className="info-background-secondary"></div>
      
      <img 
        className="info-image info-image-left" 
        src="https://f.feridinha.com/OBnBI.png" 
        alt="" 
      />
      <img 
        className="info-image info-image-center" 
        src="https://f.feridinha.com/GzKon.png" 
        alt="" 
      />
      <img 
        className="info-image info-image-right" 
        src="https://f.feridinha.com/DFGmH.png" 
        alt="" 
      />


      <div className="stats-card stats-card-top">
        <div className="stats-card-content">
          <h1 className="main-title-card">O Problema</h1>
          <p className="subtitle-card">
            Os resíduos eletrônicos representam uma das maiores ameaças ambientais do século XXI.
            As peças de computadores, baterias, pilhas e muitos outros são um grande risco, mas
            poucos conhecem a sua verdadeira dimensão.
          </p>
        </div>
      </div>

      <div className="stats-card stats-card-left">
        <div className="stats-card-content">
          <h3 className="stats-card-title">Baixa Divulgação</h3>
          <p className="stats-card-text">
            Apesar de ser uma pauta cada vez mais importante, os impactos do descarte incorreto 
            são extremamente negligenciados em nossa sociedade.
          </p>
        </div>
      </div>

      <div className="stats-card stats-card-center">
        <div className="stats-card-content">
          <h3 className="stats-card-title">Desconhecimento Geral</h3>
          <p className="stats-card-text">
            A maioria da população não conhece os graves riscos ambientais e de saúde causados 
            pelo descarte incorreto.
          </p>
        </div>
      </div>

      <div className="stats-card stats-card-right">
        <div className="stats-card-content">
          <h3 className="stats-card-title">Impacto Ambiental</h3>
          <p className="stats-card-text">
            Componentes eletrônicos contêm substâncias tóxicas que contaminam o solo, água e ar 
            quando descartados inadequadamente.
          </p>
        </div>
      </div>

      <div className="danger-section">
        <div className="danger-content">
          
          
        </div>
      </div>

      <h2 className="importa-title">Por que isso importa?</h2>
      
      <svg className="emoji-icon" width="183" height="183" viewBox="0 0 183 183" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M75.1502 1.38082C18.2381 11.8867 28.4218 64.2789 28.5747 65.1176C34.8744 99.1054 46.3884 146.649 63.5446 163.025C70.3336 169.521 80.869 167.996 80.869 167.996L104.417 163.62L127.98 159.305C127.98 159.305 138.362 156.956 142.384 148.478C152.521 127.07 146.222 78.5663 139.906 44.5785C139.769 43.7398 132.078 -9.12507 75.1502 1.38082Z" fill="#543930"/>
        <path d="M75.1502 1.38082C18.2381 11.8867 28.4218 64.2789 28.5747 65.1176C34.8744 99.1054 46.3884 146.649 63.5446 163.025C70.3336 169.521 80.869 167.996 80.869 167.996L104.417 163.62L127.98 159.305C127.98 159.305 138.362 156.956 142.384 148.478C152.521 127.07 146.222 78.5663 139.906 44.5785C139.769 43.7398 132.078 -9.12507 75.1502 1.38082Z" fill="url(#paint0_radial_29_87)"/>
        <path d="M33.6512 89.0109C30.2458 86.4809 27.1283 83.5869 24.3544 80.3805C22.9018 78.7795 20.0271 76.1416 17.1831 76.3855C16.602 76.4313 15.8528 76.6295 15.1341 77.1632C13.1922 74.6625 8.71199 67.9534 6.47955 62.0372C5.57739 60.1617 4.00245 59.8567 2.91681 60.1617C0.990175 60.7258 -0.248373 63.1655 0.0421505 65.8644C0.990176 74.8607 8.05449 85.8241 10.6998 88.401L10.6539 88.4315C15.8528 94.7442 16.3421 103.954 16.3421 104.045C16.3726 104.762 16.9078 105.357 17.6112 105.479L32.1527 107.903C32.2444 107.918 32.3209 107.918 32.4126 107.918C33.0548 107.918 33.6512 107.507 33.8499 106.882C34.8133 104.061 37.0457 97.3516 37.0763 95.8268C37.168 91.3744 34.3393 89.4226 33.6512 89.0109Z" fill="url(#paint1_linear_29_87)"/>
        <path d="M180.136 60.1923C179.051 59.8569 177.43 60.1618 176.451 62.1898C174.265 67.9841 169.784 74.6779 167.843 77.1786C167.243 76.7386 166.535 76.4698 165.794 76.401C162.95 76.157 160.075 78.7949 158.607 80.4112C155.838 83.6075 152.725 86.4913 149.325 89.0111C148.637 89.4228 145.809 91.3593 145.9 95.8422C145.931 97.367 148.163 104.091 149.127 106.897C149.341 107.522 149.922 107.934 150.564 107.934C150.656 107.934 150.732 107.934 150.824 107.919L165.365 105.494C165.742 105.434 166.083 105.234 166.318 104.934C166.553 104.635 166.666 104.257 166.635 103.878C166.635 103.802 166.115 95.6592 172.307 88.4622L172.262 88.4317C174.907 85.87 181.742 74.6627 182.935 65.9103C183.301 63.2419 182.094 60.7718 180.136 60.1923Z" fill="url(#paint2_linear_29_87)"/>
        <path d="M170.289 101.454C170.272 100.864 170.035 100.302 169.625 99.8766C169.216 99.4511 168.662 99.1926 168.072 99.1513L148.484 98.0077H148.316C147.124 98.0077 146.099 98.9073 145.962 100.112L141.864 129.037C135.472 123.579 126.649 119.568 114.524 119.568C110.533 119.568 72.3519 119.385 68.3458 119.385C56.2202 119.385 47.3975 123.396 41.006 128.854L36.9233 99.9289C36.7857 98.7243 35.7612 97.8247 34.5533 97.8247H34.3851L14.7976 98.9683C13.5744 99.0598 12.6264 100.051 12.5805 101.271L12.4123 163.086C12.1982 173.928 20.9445 182.817 31.8162 182.817C39.3393 182.817 45.3638 177.191 46.2813 170.146L46.3271 170.177V183H136.512V170.36L136.573 170.329C137.49 177.374 143.515 183 151.038 183C161.91 183 170.656 174.095 170.442 163.269L170.289 101.454Z" fill="url(#paint3_linear_29_87)"/>
        <path d="M144.891 181.673C143.994 181.282 143.147 180.786 142.368 180.194C141.28 179.384 140.308 178.429 139.478 177.358C137.895 175.327 136.887 172.91 136.558 170.359L136.527 170.374L135.946 154.089C135.946 154.089 136.909 168.041 144.891 181.673Z" fill="#4A00ED"/>
        <path d="M46.8318 154.089L46.2508 170.237V170.252C45.5933 175.177 42.4281 179.401 38.0091 181.475C45.8685 167.904 46.8318 154.089 46.8318 154.089Z" fill="#4A00ED"/>
        <path d="M77.4438 113.377V128.595C77.4438 135.471 82.979 141.052 91.3278 141.052C99.6765 141.052 105.212 135.471 105.212 128.595V113.377H77.4438Z" fill="#E59600"/>
        <path d="M78.3766 16.8574C54.2784 21.0353 35.0733 42.779 41.6942 80.6856C47.0154 111.121 69.0493 125.85 86.5266 128.793C90.6857 129.494 94.6001 129.54 97.9488 128.961C101.282 128.381 104.921 127.04 108.591 124.996C124.05 116.351 139.861 95.0492 134.539 64.5684C127.919 26.6618 102.475 12.6794 78.3766 16.8574Z" fill="#FFCA28"/>
        <path d="M102.108 109.397C102.444 113.636 98.7286 114.811 94.0496 115.176C89.3707 115.542 85.5174 114.856 85.181 110.724C84.8446 106.363 88.4226 103.375 93.0863 103.009C97.7653 102.643 101.756 104.96 102.108 109.397Z" fill="#795548"/>
        <path d="M96.068 89.1026C95.9151 89.0569 95.7622 89.0416 95.6093 89.0416L85.7621 90.231C85.6092 90.2615 85.4716 90.3225 85.334 90.3987C84.4777 90.8714 84.1107 91.8473 84.6459 92.7774C85.1811 93.7075 87.4747 96.2234 91.435 95.7508C95.38 95.2781 97.0008 92.2742 97.3066 91.2526C97.5971 90.2157 97.0008 89.3618 96.068 89.1026Z" fill="#E59600"/>
        <path d="M67.0238 87.0531C70.7885 86.6021 73.4606 83.0847 72.9922 79.1967C72.5237 75.3088 69.0922 72.5227 65.3275 72.9737C61.5628 73.4248 58.8907 76.9422 59.3591 80.8301C59.8276 84.718 63.2592 87.5042 67.0238 87.0531Z" fill="#404040"/>
        <path d="M112.544 81.5955C116.308 81.1444 118.981 77.627 118.512 73.7391C118.044 69.8512 114.612 67.065 110.847 67.5161C107.083 67.9671 104.411 71.4845 104.879 75.3725C105.348 79.2604 108.779 82.0465 112.544 81.5955Z" fill="#404040"/>
        <path d="M74.7679 66.1392C73.2695 64.5839 69.9514 62.4492 64.1256 63.1354C58.2998 63.8368 55.5934 66.6882 54.4924 68.5637C54.0031 69.3871 54.2631 70.241 54.7218 70.7289C55.1499 71.1711 56.2967 71.5065 57.4436 70.9576C58.5904 70.4087 60.8075 68.9144 64.7525 68.4112C68.6975 67.969 71.2052 68.8991 72.4438 69.1584C73.6976 69.4176 74.7374 68.8381 75.0432 68.3045C75.3949 67.725 75.4407 66.8254 74.7679 66.1392Z" fill="#6D4C41"/>
        <path d="M120.304 60.6805C118.805 59.1252 115.487 56.9905 109.662 57.6766C103.836 58.3781 101.129 61.2294 100.044 63.1049C99.5543 63.9283 99.8143 64.7822 100.273 65.2702C100.701 65.7123 101.848 66.0478 103.01 65.4989C104.172 64.95 106.374 63.4556 110.319 62.9525C114.264 62.5103 116.772 63.4404 118.01 63.6996C119.264 63.9588 120.304 63.3794 120.61 62.8457C120.931 62.2663 120.961 61.3667 120.304 60.6805Z" fill="#6D4C41"/>
        <path d="M75.1502 1.38082C18.2381 11.8867 28.4218 64.2789 28.5747 65.1175C30.5625 75.8521 33.0854 87.9438 36.1283 99.9745L45.4556 98.2362C44.6299 94.2108 42.8256 68.7008 50.9297 65.2548C80.6702 52.5684 95.1811 32.9137 95.1811 32.9137C101.588 42.0168 117.674 49.0766 123.484 51.8213C128.255 54.078 134.432 76.3553 135.335 81.6769L145.335 79.8319V79.6032C143.867 67.359 141.879 55.2521 139.906 44.5785C139.769 43.7398 132.078 -9.12506 75.1502 1.38082Z" fill="#543930"/>
        <path d="M75.1502 1.38082C18.2381 11.8867 28.4218 64.2789 28.5747 65.1175C30.5625 75.8521 33.0854 87.9438 36.1283 99.9745L45.4556 98.2362C44.6299 94.2108 42.8256 68.7008 50.9297 65.2548C80.6702 52.5684 95.1811 32.9137 95.1811 32.9137C101.588 42.0168 117.674 49.0766 123.484 51.8213C128.255 54.078 134.432 76.3553 135.335 81.6769L145.335 79.8319V79.6032C143.867 67.359 141.879 55.2521 139.906 44.5785C139.769 43.7398 132.078 -9.12506 75.1502 1.38082Z" fill="url(#paint4_radial_29_87)"/>
        <defs>
          <radialGradient id="paint0_radial_29_87" cx="0" cy="0" r="1" gradientTransform="matrix(65.9707 -12.1698 -14.5252 -78.2975 88.6329 78.4388)" gradientUnits="userSpaceOnUse">
            <stop offset="0.794" stopColor="#6D4C41" stopOpacity="0"/>
            <stop offset="1" stopColor="#6D4C41"/>
          </radialGradient>
          <linearGradient id="paint1_linear_29_87" x1="18.5409" y1="98.5836" x2="18.5409" y2="63.6839" gradientUnits="userSpaceOnUse">
            <stop offset="0.5" stopColor="#FFCA28"/>
            <stop offset="1" stopColor="#FFB300"/>
          </linearGradient>
          <linearGradient id="paint2_linear_29_87" x1="164.451" y1="98.5838" x2="164.451" y2="63.6841" gradientUnits="userSpaceOnUse">
            <stop offset="0.5" stopColor="#FFCA28"/>
            <stop offset="1" stopColor="#FFB300"/>
          </linearGradient>
          <linearGradient id="paint3_linear_29_87" x1="91.4302" y1="119.009" x2="91.4302" y2="187.732" gradientUnits="userSpaceOnUse">
            <stop stopColor="#651FFF"/>
            <stop offset="0.705" stopColor="#5914F2"/>
            <stop offset="1" stopColor="#530EEB"/>
          </linearGradient>
          <radialGradient id="paint4_radial_29_87" cx="0" cy="0" r="1" gradientTransform="matrix(69.1026 -12.7475 -15.517 -83.6193 90.1311 83.9227)" gradientUnits="userSpaceOnUse">
            <stop offset="0.794" stopColor="#6D4C41" stopOpacity="0"/>
            <stop offset="1" stopColor="#6D4C41"/>
          </radialGradient>
        </defs>
      </svg>

      <p className="danger-description danger-description-left">
        Metais pesados como chumbo, mercúrio e cádmio presentes em dispositivos eletrônicos 
        podem causar danos irreversíveis ao meio ambiente e à saúde humana;
      </p>

      <p className="danger-description danger-description-right">
        Quando descartados em lixões comuns, esses materiais contaminam o solo, prejudicam 
        a biodiversidade e afetam diretamente comunidades que vivem próximas a esses locais.
      </p>
    </section>
  );
}

export default Info;
