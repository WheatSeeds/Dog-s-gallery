import { dogType } from "../helpers/types.ts";

type masonryGridTypes = {
  dogData: dogType[];
  setSelectedModal: React.Dispatch<React.SetStateAction<number | null>>;
};

const MansonryGrid = ({ dogData, setSelectedModal }: masonryGridTypes) => {
  const handleImgClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const imgIndex = Number((e.target as HTMLElement).dataset.index);
    setSelectedModal(imgIndex);
  };

  return (
    <div className="mansonry-wrapper">
      {dogData.map((img, i) => (
        <a key={`mansonry-${img.id}-${i}`} onClick={handleImgClick}>
          <img
            alt={`Picture ${i} of ${img.breeds[0].name} breed`}
            data-index={i}
            className="mansonry-image"
            src={img.url}
          />
        </a>
      ))}
    </div>
  );
};

export default MansonryGrid;
