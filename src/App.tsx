import Header from "./assets/components/Header.tsx";
import MansonryGrid from "./assets/components/MansonryGrid.tsx";
import Modal from "./assets/components/Modal.tsx";
import ErrorElement from "./assets/components/helperElements/ErrorElement.tsx";
import LoaderElement from "./assets/components/helperElements/LoaderElement.tsx";

import useFetch from "./assets/API/useFetch.ts";
import { mansonryGridVariants } from "./assets/helpers/motionConstants.ts";
import data from './assets/API/dogBreedsData.ts'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { dogType } from "./assets/helpers/types.ts";

const App = () => {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);
  const [category, setCategory] = useState(data[0].children[0].id);

  const params = useMemo(() => {
    return {
      breed_id: category,
      limit: 20,
    };
  }, [category]);

  const [isLoading, dogData, isError] = useFetch<dogType[]>(
    "images/search",
    params
  );

  return (
    <>
      <Modal
        dogData={dogData}
        selectedModal={selectedModal}
        setSelectedModal={setSelectedModal}
      />
      <Header setCategory={setCategory} />
      <main>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoaderElement />
          ) : isError ? (
            <ErrorElement />
          ) : (
            <motion.div
              key={category}
              variants={mansonryGridVariants}
              initial="initial"
              exit="exit"
              animate="animate"
            >
              <MansonryGrid
                dogData={dogData}
                setSelectedModal={setSelectedModal}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default App;
