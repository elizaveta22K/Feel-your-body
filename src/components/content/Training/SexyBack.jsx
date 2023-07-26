import React from "react";
import "../Training/training.css";
import sexyPhoto from "../../../img/photo/training/photo2.jpg";

export default function SexyBack() {
  return (
    <div className="training-block">
      <div className="training-block__items items-training sexy">
        <div className="items-training__img">
          <img className="img-training" src={sexyPhoto} alt="Photo"></img>
        </div>
        <div className="items-training__info info-training">
          <div className="info-training__title vetrino">SEXY сідниці</div>
          <div className="info-training__subtitle">
            Ефективні тренування від яких дійсно збільшуються сідниці!
          </div>
          <div className="info-training__picture picture-training">
            <div className="picture-training__number2 picture-training__text">
              8 тренувань
            </div>
            <div className="picture-training__time picture-training__text">
              2 місяці доступу
            </div>
            <div className="picture-training__gift picture-training__text">
              + харчування в подарунок
            </div>
          </div>
          <div className="info-training__price vetrino">600 грн</div>
          <div className="info-training__button button-training ">
            <div className="btn button-training__white">
              <a href="">Купити</a>
            </div>
            <div className="button-training__blu">
              <a href="" className="">
                Детальніше
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
