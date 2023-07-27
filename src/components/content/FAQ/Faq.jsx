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

    const faqData = [
        {
            question: 'Який інвентар потрібен для тренувань?',
            answer: 'Всі вправи націлені на навантаження із використанням власної ваги. Вам знадобиться лише: килимок, 2 йога блоки та для більшого відчуття м‘язів - резинки або гантелі.',
        },
        {
            question: 'Чи підійдуть тренування для початківців або любителів?',
            answer: 'Програми тренувань розраховані на різні рівні фізичної підготовки.',
        },
        {
            question: 'Скільки тривають тренування?',
            answer: 'Тривалість тренування 40-50 хв.',
        },
        {
            question: 'Які є протипоказання до проходження курсу?',
            answer: 'Проблеми зі здоров‘ям, якісь травми, грижі в стані запалення, варикоз,запальні процеси. Обов‘язково проконсультуйтеся з лікарем.',
        },
        {
            question: 'Коли я досягну бажаного результату?',
            answer: 'Результат залежить від еластичності м‘язів,суглобів, також від регулярності тренувань і вашої індивідуальності. Велику роль відіграє харчування в процессі схуднення меню харчування.',
        },
    ];

    const toggleState = (index) => {
        setHeights((prevHeights) => {
            return {
                ...prevHeights,
                [index]: prevHeights[index] === '0px' ? 'auto' : '0px',
            };
        });
    };

    return (
        <div id='FAQ' className='faq'>
            <div className='container'>
                <div className='faq__title tlt vetrino'>
                    <h2>FAQ</h2>
                </div>
                <div className='faq__block' ref={refHeight}>
                    {faqData.map((faqItem, index) => (
                        <div className='block-main' key={index}>
                            <button
                                className='block-main__question'
                                onClick={() => toggleState(index)}
                            >
                                <span>{faqItem.question}</span>
                                <img
                                    className={
                                        heights[index] === '0px' ? '' : 'active'
                                    }
                                    src={faqIcon}
                                    alt={`FAQ Toggle ${index}`}
                                />
                            </button>
                            <div
                                className={
                                    heights[index] === '0px'
                                        ? 'block-main__answer'
                                        : 'block-main__answer animated'
                                }
                                style={{ height: heights[index] }}
                            >
                                <p>{faqItem.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
