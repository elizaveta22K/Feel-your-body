import React from "react";
import "../Training/training.css";
import stretchingPhoto from "../../../img/photo/training/photo1.jpg";

export default function Stretching() {
  return (
    <div className="training-block">
      <div className="training-block__items items-training stretching">
        <div className="items-training__img">
          <img className="img-training" src={stretchingPhoto} alt="Photo"></img>
        </div>
        <div className="items-training__info info-training">
          <div className="info-training__title vetrino">Stretching</div>
          <div className="info-training__subtitle">
            Ефективні тренування для розвитку гнучкості без шкоди для здоров‘я
          </div>
          <div className="info-training__picture picture-training">
            <div className="picture-training__number1 picture-training__text">
              8 тренувань
            </div>
            <div className="picture-training__time picture-training__text">
              2 місяці доступу
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
