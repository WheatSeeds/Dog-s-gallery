import { dogType } from "../helpers/types.ts";
import { modalVariants } from "../helpers/motionConstants.ts";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "jquery";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type modalType = {
  dogData: dogType[];
  selectedModal?: number | null;
  setSelectedModal: React.Dispatch<React.SetStateAction<number | null>>;
};

const Modal = ({ dogData, selectedModal, setSelectedModal }: modalType) => {
  const carouselRef = useRef(null);

  let images
  if (dogData) {
    images = dogData.map((img, i) => (
      <img
        alt={`Picture ${i} of ${img.breeds[0].name} breed, inside modal window`}
        className="carousel-img"
        key={`modal-${i}`}
        src={img.url}
      />
    ));
  }

  useEffect(() => {
    if (carouselRef.current) {
      $(carouselRef.current).slick({
        nextArrow: `<button class="modal-next-btn">></button>`,
        prevArrow: '<button class="modal-prev-btn"><</button>',
      });
      $(carouselRef.current).slick("slickGoTo", selectedModal, true);
    }
  }, [selectedModal]);

  const closeModal = () => {
    setSelectedModal(null);
  };

  return (
    <>
      {typeof selectedModal == "number" ? (
        <div onClick={closeModal} className="modal-bg">
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            onClick={(e) => e.stopPropagation()}
            className="modal-wrapper"
          >
            <button onClick={closeModal} className="modal-close-btn">
              x
            </button>
            <div ref={carouselRef} className="carousel-wrapper">
              {images}
            </div>
          </motion.div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
