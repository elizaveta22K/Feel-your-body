import React from 'react';
import '../Footer/footer.css';

import footerPhoto1 from '../../img/photo/photo4.jpg';
import footerPhoto2 from '../../img/photo/photo5.jpg';
import logo from '../../img/darklogo.svg';
import instagram from '../../img/instagram.svg';

export default function footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__block-main'>
                    <div className='footer__logo footer-main'>
                        <a href='/'>
                            <img src={logo} alt='Logo'></img>
                        </a>
                    </div>
                    <div className='footer__nav footer-main'>
                        <nav className='footer__menu'>
                            <ul className='footer__menu_items'>
                                <li>
                                    <a href='/'>Тренування</a>
                                </li>
                                <li>
                                    <a href='/'>Тренери</a>
                                </li>
                                <li>
                                    <a href='/'>FAQ</a>
                                </li>
                                <li>
                                    <a href='/'>Мої тренування</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='footer__instagram footer-main'>
                        <div className='footer__inst_Lyda'>
                            <a href='https://www.instagram.com/lyudastrilyk/'>
                                <img src={instagram} alt='Instagram'></img>
                                <div className='footer__inst_name vetrino'>
                                    Люда
                                </div>
                            </a>
                        </div>
                        <div className='footer__inst_Lera'>
                            <a href='https://www.instagram.com/lerysik27/'>
                                <img src={instagram} alt='Instagram'></img>
                                <div className='footer__inst_name vetrino'>
                                    Валерія
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='footer__photo footer-main'>
                        <img
                            className='footer__photo_passive'
                            src={footerPhoto1}
                            alt='Photo'
                        ></img>
                        <img
                            className='footer__photo_active'
                            src={footerPhoto2}
                            alt='Photo'
                        ></img>
                    </div>
                </div>
            </div>
        </footer>
    );
}
