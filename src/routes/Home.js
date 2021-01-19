import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeMain from "../Home/HomeMain";
import HomeStatistics from "../Home/HomeStatistics";
import HomeDetail from "../Home/HomeDetail";
import HomeSubscribe from "../Home/HomeSubscribe";
import HomeSample from "../Home/HomeSample";

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
                        <HomeMain />
                        <HomeStatistics />
                        <HomeDetail />
                        <HomeSubscribe />
                        <HomeSample />
                    </div>
                    
                )}
            </section>
        )
    }


}


export default Home;