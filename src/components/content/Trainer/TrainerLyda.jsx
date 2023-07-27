import React from "react";

import "../Trainer/trainer.css";

const TrainerLyda = ({ name, photos, info, instagramLink, instagramSvg }) => {
  return (
    <div className="block-main__Lyda">
      <div className="block-main__items_Lyda">
        <div className="item__img1">
          <img src={photos[0]} alt="Фото"></img>
        </div>
        <div className="item__img2">
          <img src={photos[1]} alt="Фото"></img>
        </div>
        <div className="item__img3">
          <img src={photos[2]} alt="Фото"></img>
        </div>
		  <div className="info-item_Lyda">
			<div className="info-item__title vetrino">{name}</div>
			<div className="info-item__text">
				<ul className="info-item__text_item">
					{info.map((item, index) => (
					<li key={index}>{item}</li>
					))}
				</ul>
			</div>
			<div className="info-item__inst">
				<a href={instagramLink}>
					<img src={instagramSvg} alt="Instagram"></img>
				</a>
			</div>
		  </div>
      </div>
    </div>
  );
};

export default TrainerLyda;
