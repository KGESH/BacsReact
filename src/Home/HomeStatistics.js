import React from "react";
import "./HomeStatistics.css";
import cursorLogo from "../Bacs_Images/home_cursor.svg";

const HomeStatistics = () => {
    return (
        <section className="home__statistics">
            <div className="statistics__source">출처: 식품의약품안전처<br/>현대경제연구원</div>
            <section className="statistics__chart_section">
                <div className="chart__instant">
                    <div className="section__chart_wrapper_instant">
                        <div className="chart__item">
                            2008년<br/>17%<br/>
                        </div>
                        <div className="chart__item">
                            <img className="chart__cursor" src={cursorLogo} />
                        </div>
                        <div className="chart__item">
                            2017년<br/>8%
                        </div>
                    </div>
                    <div className="chart__item">
                        인스턴트 커피
                    </div>
                </div>

                <div className="chart__brewed">
                    <div className="section__chart_wrapper_brewed">
                        <div className="chart__item">
                            2017년<br/>22%<br/>
                        </div>
                        <div className="chart__item">
                            <img className="chart__cursor" src={cursorLogo} />
                        </div>
                        <div className="chart__item">
                            2008년<br/>3%
                        </div>
                    </div>
                    <div className="chart__item">
                        원두 커피
                    </div>
                </div>


            </section>
            <h1>원두 커피의 시대</h1>    
            <h5>
                커피 소비 세계 6위,<br/>
                1인당 연간 약 355잔의 커피 소비.<br/>
                홈 카페족의 확대로 커피머신 수입액은<br/>
                2010년 대비 약 5배 증가했습니다.
            </h5>
        </section>
    );
}

export default HomeStatistics;