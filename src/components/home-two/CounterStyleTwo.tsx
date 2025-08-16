import CountUpContent from '@/utils/CountUpContent';
import React from 'react';

const CounterStyleTwo = () => {

    const counters = [
        {
            countIcon: 'fas fa-check-square',
            countIconPrefix: 'fas',
            countNum: 569,
            countTitle: 'Projct Complate'
        },
        {
            countIcon: 'fas fa-heart',
            countIconPrefix: 'fas',
            countNum: 356,
            countTitle: 'Happy Clients'
        },
        {
            countIcon: 'fas fa-users',
            countIconPrefix: 'fas',
            countNum : 783,
            countTitle: 'Business Partners'
        },
        {
            countIcon: 'fas fa-trophy',
            countIconPrefix: 'fas',
            countNum : 894,
            countTitle: 'IT Consultant'
        }

    ];
    return (
        <>
            <div className="counter-area pb-100">
            <div className="container">
                {counters &&
                <div className="row turon-counter-content">
                    {counters.map( (item, num) => (
                    <div key={num} className="col-xl-3 col-lg-3 col-md-6">
                            <div className="counter-wrapper single-counter mb-30">
                            <div className="counter-icon">
                            <i className={item.countIcon}></i>
                            </div>
                            <div className="counter-text">
                                <h1 className='d-flex'><span className="counter">
                                <CountUpContent number={item.countNum} text="" />
                                </span><span className="plus-icon">+</span></h1>
                                <p>{item.countTitle}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div>
        </div>
        </>
    );
};

export default CounterStyleTwo;