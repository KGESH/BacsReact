import React from "react";
import "./TrialFlavor.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import trialFlavorImg from "../Bacs_Images/home.png";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", right: "3%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", left: "3%", zIndex: "1" }}
        onClick={onClick}
      />
    );
  }

  const sliderSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
}

const TrialFlavor = () => {

    return (
        <section className="section__trial_flavor">
            <div className="trial__flavor_title_wrapper">
                <div className="trial__flavor_title">취향껏 맛을 고르세요</div>
                <div className="tiral__flavor_subtitle">BACS가 제안하는 4가지 컬러</div>
            </div>
            <div>
                <Slider {...sliderSettings}>
                    <div>
                        <div className="trial__flavor_slider_item">
                            <div>yellow box</div>
                            <div className="trial_flavor_slider_item_text">새콤한 맛<br/>설명<br/>설명<br/>설명</div>
                        </div>
                    </div>

                    <div>
                        <div className="trial__flavor_slider_item">
                            <div>red box</div>
                            <div className="trial_flavor_slider_item_text">달콤한 맛<br/>설명<br/>설명<br/>설명</div>
                        </div>
                    </div>

                    <div>
                        <div className="trial__flavor_slider_item">
                            <div>blue box</div>
                            <div className="trial_flavor_slider_item_text">고소한 맛<br/>설명<br/>설명<br/>설명</div>
                        </div>
                    </div>

                    <div>
                        <div className="trial__flavor_slider_item">
                            <div>grey box</div>
                            <div className="trial_flavor_slider_item_text">디카페인<br/>설명<br/>설명<br/>설명</div>
                        </div>
                    </div>
                </Slider>
                <div className="trial__flavor_description_wrapper">
                    <span className="trial__flavor_description">설명을 합니다. <br/>
                        뭐라고 적을지는 생각이 안나요
                        <br/>대충 어떤 말을 적습니당.
                    </span>
                </div>
                <img className="trial__flavor_img" src={trialFlavorImg} />
            </div>


        </section>
    )
}

export default TrialFlavor;
