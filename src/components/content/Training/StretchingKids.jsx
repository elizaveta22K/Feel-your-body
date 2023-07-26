import React from "react";
import "../Training/training.css";
import kidsPhoto from "../../../img/photo/training/photo3.jpg";

export default function StretchingKids() {
  return (
    <div className="training-block">
      <div className="training-block__items items-training kids">
        <div className="items-training__img">
          <img className="img-training" src={kidsPhoto} alt="Photo"></img>
        </div>
        <div className="items-training__info info-training">
          <div className="info-training__title vetrino">Stretching KIDS</div>
          <div className="info-training__subtitle">
            Тренування, яке включає в себе велику кількість різних вправ, що
            сприяють розвитку фізичних здібностей дитини
          </div>
          <div className="info-training__picture picture-training">
            <div className="picture-training__number3 picture-training__text">
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
