import React from 'react'
import { TiHome } from 'react-icons/ti';
import { BsListUl } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import './style.css';

import LogoGoogle from '../../assets/google-logo-1.png';

export default function LateralMenu({statusMenu}){
    return(
        <div className={!statusMenu ? 'containerLateralMenu' : 'containerLateralActive'}>
            <div className='rowLateralMenu'>
                <div className='logoLateralMenu'>
                    <img src={LogoGoogle} />
                    <button type='button' id='podcast'>Podcasts</button>
                </div>
                <div className='firstButton'>
                    <button type='button' className='backgroundColorButton'>
                        <TiHome size={20} id='icon' className='colorIcon'/>
                        <p className='colorP'>Ver Programas</p>    
                    </button>
                    <button type='button' className='colorIconDefault'>
                        <p className='colorPDefault'>
                             <BsListUl size={20} id='icon'/>Inscrições
                        </p>    
                    </button>
                </div>
                <div className='secondButton' >
                    <button type='button'>
                        <p className='colorPDefault'>Ajuda</p>
                    </button>
                    <button type='button'>
                        <p className='colorPDefault'>Diretrizes para Editores</p>
                    </button>
                    <button type='button'>
                        <p className='colorPDefault'>Enviar Feedback</p>
                    </button>
                </div>
                <div className='thirdButton'>
                    <button type='button'>
                        <p className='colorPDefault'>
                            <BiLinkExternal size={18} id='iconP' />
                            Instalar o App Android
                        </p>
                    </button>
                    <button type='button'>
                        <p className='colorPDefault'>
                            <BiLinkExternal size={18} id='iconP'/>
                            Instalar o App iOS
                        </p>
                    </button>
                </div>
                <div className='fourButton'>
                    <button type='button'>Privacidade</button>
                    <p>.</p>
                    <button type='button'>Sobre</button>
                </div>
            </div>
        </div>
    )
}