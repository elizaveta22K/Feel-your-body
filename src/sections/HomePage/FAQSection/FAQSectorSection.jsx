import React, { useState, useEffect, useRef } from 'react';

import Button from '../../../components/Button/Button';

import { MOCKED_FAQ_DATA } from './constants';

import './FAQSectorSection.css';

import faqIcon from './images/icon1.png';

const FAQSection = () => {
    // TODO: use https://www.npmjs.com/package/react-animate-height
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
        <section id='FAQ' className='faq'>
            <div className='container'>
                <div className='faq__title tlt vetrino'>
                    <h2>FAQ</h2>
                </div>
                <div className='faq__block' ref={refHeight}>
                    {MOCKED_FAQ_DATA.map((faqItem, index) => (
                        <div className='block-main' key={index}>
                            <Button
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
                            </Button>
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
        </section>
    );
};

export default FAQSection;
