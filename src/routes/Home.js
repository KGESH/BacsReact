import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
    state = {
        isLoading : true
    };

    

    LoadingPage() {
        this.setState({isLoading : false });
    }


    componentDidMount() {
        this.LoadingPage();
    }


    render() {
        const { isLoading } = this.state;
        return (
            <section className="contanier">
                { isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="home">
                        <section className="section__home">
                            <h2 className="home__title">하루를 시작하다.</h2>
                            <h2 className="home__title">스페셜티 커피 구독 서비스</h2>
                            <h3 className="home__title">집으로 배송되는 정기구독 서비스, 첫 가입시 샘플팩 4종을 드려요</h3>
                            <Link to="/trial" className="home__trialButton" type="button">더 알아보기</Link>
                        </section>

                        <section className="section__detail">
                            <h3>상세설명~~</h3>

                        </section>
                    </div>
                    
                )}
            </section>
        )
    }


}

export default Home;