import React, { useEffect } from "react";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgHash from "lightgallery/plugins/hash";

import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "./LightGal.css";

import gallery1 from "../../assets/gallery_1.jpg";
import gallery2 from "../../assets/gallery_2.jpg";
import gallery3 from "../../assets/gallery_3.jpg";
import gallery4 from "../../assets/gallery_4.jpg";
import gallery5 from "../../assets/gallery_5.jpg";
import gallery6 from "../../assets/gallery_6.jpg";

const LightGal = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  useEffect(() => {
    const container = document.querySelector(".masonry-gallery-demo");
    if (container) {
      const msnry = new Masonry(container, {
        itemSelector: ".gallery-item",
        columnWidth: ".gallery-item",
        percentPosition: true,
      });

      imagesLoaded(container).on("progress", function () {
        msnry.layout();
      });
    }
  }, []);

  return (
    <div className="gallery-container">
      <LightGallery
        elementClassNames={"masonry-gallery-demo row g-0"}
        plugins={[lgZoom, lgHash, lgThumbnail]}
        speed={500}
        thumbnail={true}
        animateThumb={true}
        showThumbByDefault={true}
      >
        {images.map((img, i) => (
          <a
            key={i}
            data-lg-size="1600-1067"
            data-src={img}
            href={img}
            className="gallery-item col-4 col-md-4 col-lg-2"
          >
            <div className="ratio ratio-1x1 img-hover-wrap">
              <img alt={`Gallery ${i + 1}`} className="img-fluid" src={img} />
              <div className="hover-overlay">
                <span className="plus-icon">+</span>
              </div>
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default LightGal;
