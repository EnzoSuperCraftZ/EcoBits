import './SiteMapa.css';

function SiteMapa({ onBack }) {
  return (
    <div className="site-map">
      <div className="map-background"></div>
      

      


      <div className="sidebar-menu">
        <div className="menu-container">
          <div className="menu-list">
            <div className="menu-list-item">
              <div className="menu-item-state-layer">
                <div className="menu-item-content">
                  <div className="menu-item-label menu-item-label-disabled">Ponto de Coleta Magalhões</div>
                </div>
              </div>
            </div>

            <div className="menu-list-item">
              <div className="menu-item-state-layer">
                <div className="menu-item-content"></div>
              </div>
            </div>

            <div className="menu-list-item">
              <div className="menu-item-state-layer">
                <div className="menu-item-content"></div>
              </div>
            </div>

            <div className="menu-list-item menu-list-item-selected">
              <div className="menu-item-state-layer menu-item-state-layer-selected">
                <div className="menu-item-content"></div>
              </div>
            </div>

            <div className="menu-list-item">
              <div className="menu-item-state-layer"></div>
            </div>
          </div>
        </div>

        

        <div className="sidebar-header">
          <svg className="back-icon" width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onBack}>
            <g clipPath="url(#clip0_86_443)">
              <path d="M19.8771 4.20668C20.3396 3.71588 20.5664 3.08055 20.5575 2.44521C20.5485 1.80988 20.3068 1.18056 19.8294 0.701801L19.7935 0.665672C19.3221 0.214012 18.7193 -0.00579834 18.1195 0.00323486C17.5197 0.0122681 16.9229 0.250141 16.4633 0.716858C11.1934 6.0344 5.98022 11.4393 0.743145 16.796C0.72226 16.811 0.704353 16.8261 0.686451 16.8441C0.223919 17.3349 -0.00287628 17.9763 0.00607681 18.6116C0.0150299 19.247 0.259727 19.8793 0.737179 20.3581L0.817749 20.4363C6.03094 25.7178 11.2382 31.0172 16.4663 36.2896C16.9229 36.7533 17.5197 36.9912 18.1195 37.0002C18.7193 37.0093 19.3221 36.7894 19.7935 36.3348L19.8383 36.2896C20.3068 35.8139 20.5485 35.1876 20.5575 34.5552C20.5664 33.9229 20.3396 33.2846 19.8771 32.7938L5.78625 18.5604L19.8771 4.20668ZM35.3257 4.8089C35.7853 4.32111 36.0091 3.68577 36.0001 3.05345C35.9912 2.41811 35.7494 1.7888 35.272 1.31004L35.2362 1.27391C34.7677 0.822247 34.1619 0.602436 33.5621 0.608459C32.9623 0.617493 32.3625 0.85537 31.9059 1.32208C26.7465 6.52822 21.4169 11.647 16.1888 16.7899C16.1679 16.805 16.147 16.8231 16.1261 16.8411C15.6636 17.3319 15.4368 17.9733 15.4457 18.6086C15.4547 19.244 15.6994 19.8763 16.1768 20.355C21.396 25.4588 26.642 30.5445 31.8731 35.6422L31.9089 35.6814C32.3655 36.1451 32.9623 36.3799 33.5621 36.389C34.1619 36.398 34.7647 36.1782 35.2362 35.7265L35.2809 35.6814C35.7494 35.2056 35.9912 34.5763 36.0001 33.947C36.0091 33.3147 35.7823 32.6763 35.3197 32.1855L21.2408 18.5635L35.3257 4.8089Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_86_443">
                <rect width="36" height="37" fill="white" transform="matrix(-1 0 0 -1 36 37)"/>
              </clipPath>
            </defs>
          </svg>

          <img 
            className="sidebar-logo" 
            src="https://f.feridinha.com/QLkpc.png" 
            alt="EcoBits Logo" 
          />
        </div>

        <div className="location-label location-label-1">Ponto de Coleta Magalhões</div>
        <div className="location-label location-label-2">Lixão Correa</div>
        <div className="location-label location-label-3">Coletora Max</div>
      </div>
    </div>
  );
}

export default SiteMapa;
