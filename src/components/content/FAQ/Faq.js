import React, { useState, useEffect, useRef } from 'react';
import '../FAQ/faq.css';

import faqIcon from '../../../img/components/icon1.png';

export default function Faq() {
    const [heights, setHeights] = useState({});

    const refHeight = useRef();

    useEffect(() => {
        const initialHeights = {};
        refHeight.current.childNodes.forEach((node, index) => {
            initialHeights[index] = '0px';
        });
        setHeights(initialHeights);
    }, []);

    const toggleState = (index) => {
        setHeights((prevHeights) => {
            return {
                ...prevHeights,
                [index]: prevHeights[index] === '0px' ? 'auto' : '0px',
            };
        });
    };

    return (
        <div className='faq'>
            <div className='container'>
                <div className='faq__title tlt vetrino'>
                    <h2>FAQ</h2>
                </div>
                <div className='faq__block' ref={refHeight}>
                    <div className='block-main'>
                        <button
                            className='block-main__question'
                            onClick={() => toggleState(0)}
                        >
                            <span>Який інвентар потрібен для тренувань?</span>
                            <img
                                className={heights[0] === '0px' ? '' : 'active'}
                                src={faqIcon}
                            ></img>
                        </button>
                        <div
                            className={
                                heights[0] === '0px'
                                    ? 'block-main__answer'
                                    : 'block-main__answer animated'
                            }
                            style={{ height: heights[0] }}
                        >
                            <p>
                                Всі вправи націлені на навантаження із
                                використанням власної ваги. Вам знадобиться
                                лише: килимок, 2 йога блоки та для більшого
                                відчуття м‘язів - резинки або гантелі.
                            </p>
                        </div>
                    </div>
                    <div className='block-main'>
                        <button
                            className='block-main__question'
                            onClick={() => toggleState(1)}
                        >
                            <span>
                                Чи підійдуть тренування для початківців або
                                любителів?
                            </span>
                            <img
                                className={heights[1] === '0px' ? '' : 'active'}
                                src={faqIcon}
                            ></img>
                        </button>
                        <div
                            className={
                                heights[1] === '0px'
                                    ? 'block-main__answer'
                                    : 'block-main__answer animated'
                            }
                            style={{ height: heights[1] }}
                        >
                            <p>
                                Програми тренувань розраховані на різні рівні
                                фізичної підготовки.
                            </p>
                        </div>
                    </div>
                    <div className='block-main'>
                        <button
                            className='block-main__question'
                            onClick={() => toggleState(2)}
                        >
                            <span>Скільки тривають тренування?</span>
                            <img
                                className={heights[2] === '0px' ? '' : 'active'}
                                src={faqIcon}
                            ></img>
                        </button>
                        <div
                            className={
                                heights[2] === '0px'
                                    ? 'block-main__answer'
                                    : 'block-main__answer animated'
                            }
                            style={{ height: heights[2] }}
                        >
                            <p>Тривалість тренування 40-50 хв.</p>
                        </div>
                    </div>
                    <div className='block-main'>
                        <button
                            className='block-main__question'
                            onClick={() => toggleState(3)}
                        >
                            <span>
                                Які є протипоказання до проходження курсу?
                            </span>
                            <img
                                className={heights[3] === '0px' ? '' : 'active'}
                                src={faqIcon}
                            ></img>
                        </button>
                        <div
                            className={
                                heights[3] === '0px'
                                    ? 'block-main__answer'
                                    : 'block-main__answer animated'
                            }
                            style={{ height: heights[3] }}
                        >
                            <p>
                                проблеми зі здоров‘ям, якісь травми, грижі в
                                стані запалення, варикоз,запальні процеси.
                                Обов‘язково проконсультуйтеся з лікарем.
                            </p>
                        </div>
                    </div>
                    <div className='block-main'>
                        <button
                            className='block-main__question'
                            onClick={() => toggleState(4)}
                        >
                            <span>Коли я досягну бажаного результату?</span>
                            <img
                                className={heights[4] === '0px' ? '' : 'active'}
                                src={faqIcon}
                            ></img>
                        </button>
                        <div
                            className={
                                heights[4] === '0px'
                                    ? 'block-main__answer'
                                    : 'block-main__answer animated'
                            }
                            style={{ height: heights[4] }}
                        >
                            <p>
                                Результат залежить від еластичності
                                м‘язів,суглобів, також від регулярності
                                тренувань і вашої індивідуальності. Велику роль
                                відіграє харчування в процессі схуднення меню
                                харчування.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
