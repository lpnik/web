import React from "react";
import imageKokoHS from './images/helsinginsanomatLogo.jpg';
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderMain() {
    return (
    <div className="headerOuter">
        <div className="headerInner">
            <div className="kuvaKokoHS">
                <img src={imageKokoHS} alt={""} width={273} />
            </div>
            <div className="menuElement">Etusivu</div>
            <div className="menuElement">Uutiset</div>
            <div className="menuElement">Lehdet</div>
            <div className="menuElement">Asiakaspalvelu</div>

        <div className="vasenPuoli"></div>

            <div className="nappiTilaa">Tilaa</div>
            <div className="nappiKirjaudu">Kirjaudu</div>
            <div className="nappiValikko"><MenuIcon/>Valikko</div>
            
        </div>

    </div>
    );
}
/*
import React from 'react';
import { FaGripLines, FaIdBadge } from "react-icons/fa"
export default function Header(props) {

    console.log(props);

  return <div>  
          <div class="Topmenu-container">
                <div class="flex-item Title">Helsingin sanomat</div>
                <div class="flex-item">Etusivu</div>
                <div class="flex-item">Uutiset</div>
                <div class="flex-item">Lehdet</div>
                <div class="flex-item">Asiakaspalvelu</div>

            <div class="flex-item left"></div>

              
                  <div class="flex-item SubscribeButton">Tilaa <FaIdBadge/></div>
                  <div class="flex-item">Kirjaudu</div>
                  <div class="flex-item OptionsButton">Valikko <FaGripLines/></div>
              
          </div>  
  </div>;

}
*/