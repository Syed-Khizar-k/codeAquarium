import CountUpContent from "@/utils/CountUpContent";
import React from "react";
const CounterDefault = () => {
    const counters = [
        {
            countIcon: 'fas fa-check-square',
            countIconPrefix: 'fas',
            countNum: 100,
            countTitle: 'Project Complete'
        },
        {
            countIcon: 'fas fa-heart',
            countIconPrefix: 'fas',
            countNum: 80,
            countTitle: 'Happy Clients'
        },
        {
            countIcon: 'fas fa-users',
            countIconPrefix: 'fas',
            countNum : 10,
            countTitle: 'Years of Experience'
        },
        {
            countIcon: 'fas fa-trophy',
            countIconPrefix: 'fas',
            countNum : 5,
            countTitle: 'Active Projects'
        }


    ];

    return(
        <div className="counter-area pt-100 pb-100">
            <div className="container">
                {counters &&
                <div className="row turon-counter-content">
                    {counters.map( (item, num) => (
                    <div key={num} className="col-xl-3 col-lg-3 col-md-6">
                        <div className="counter-wrapper text-center">
                            <div className="counter-icon">
                                <i className={item.countIcon}></i>
                            </div>
                            <div className="counter-text ">
                                <h1 className="counter-title d-flex justify-content-center"><span className="counter">
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
    )
}
export default CounterDefault;