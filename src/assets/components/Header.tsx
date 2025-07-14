import data from "../API/dogBreedsData.ts";
import { useEffect, useRef } from "react";
import "jquery";
import $ from "jquery";
import select2 from "select2";
import "select2/dist/css/select2.css";

// @ts-expect-error
select2();

type headerType = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setCategory }: headerType) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
      const $select = $(selectRef.current).select2({
        data: data,
      });
      $select.empty().select2({
        data: data,
      });
      $select.on("change", (e) => {
        const target = e.target as HTMLSelectElement;
        setCategory(target.value);
      });
    }
  }, [setCategory]);

  return (
    <header className="header-main">
      <h1>
        Dog's Gallery
      </h1>
      <div>
        <select
          className="header-category-select "
          ref={selectRef}
          id="category-select"
        ></select>
      </div>
    </header>
  );
};

export default Header;
