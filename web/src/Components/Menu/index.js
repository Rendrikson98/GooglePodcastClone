import React,  {useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { IoIosKeypad } from 'react-icons/io'

import LateralMenu from '../lateralMenu';
import MenuGoogle from '../MenuGoogle';

import Profile from '../../assets/download.png';
import LogoGoogle from '../../assets/google-logo-1.png';

import './styles.css'

export default function Menu(){

    const [searchBar, setSearchBar] = useState(true);
    const [lateralMenuButton, setLateralMenuButton] = useState(false);
    const [menuGoogle, setMenuGoogle] = useState(false)

    function handleInput(){
        setSearchBar(!searchBar);
    }

    function handleLateralMenu(){
        setLateralMenuButton(true);
    }

    function handleMenuGoogle(){
        setMenuGoogle(true);
    }

    function handleLateralMenuOff(){
        if(lateralMenuButton){
            setLateralMenuButton(false);
        }
        if(menuGoogle){
            setMenuGoogle(false);
        }
        if(!searchBar){
            setSearchBar(true);
        }
        
    }

    document.addEventListener('mousedown', handleLateralMenuOff);


    return(
        <div className='container'>
            <div className='row'> 
                <div className='logo'>
                    <button type='button' id='buttonMenu' onClick={() => handleLateralMenu()}><HiMenu size={25} color={'#5f6368'} /></button>
                    <img src={LogoGoogle} />
                    <button type='button' id='podcast'>Podcasts</button>
                </div>

                <div className={searchBar ? 'search' : 'searchOn'} onClick={() => handleInput()}>
                    <button type='button' ><AiOutlineSearch size={21} id='searchButton'/></button>
                    <input type='search' className={searchBar ? 'inputSearch' : 'inputSearchOn'} placeholder='Pesquisar Podcast' />
                </div>

                <div className='profileBar'>
                    <button type='button' onClick={() => handleMenuGoogle()} ><IoIosKeypad size={23} color={'#5f6368'}/></button>
                    <MenuGoogle StatusMenuGoogle={menuGoogle} />
                    <img src={Profile} className='profile' />
                </div>
            </div>
            <LateralMenu statusMenu={lateralMenuButton}/>
        </div>
    )
}