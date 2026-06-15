import { useState } from "react";
import TaxSlabCard from "../components/TaxSlabCard";

export default function TaxSlabPage() {
 const [slabs, setSlabs] = useState([
  {
    id: 1,
    rate: 0,
    start: 0,
    end: 400000,
  },
  {
    id: 2,
    rate: 5,
    start: 400001,
    end: 800000,
  },
  {
    id: 3,
    rate: 10,
    start: 800001,
    end: 1200000,
  },
  {
    id: 4,
    rate: 15,
    start: 1200001,
    end: 1600000,
  },
  {
    id: 5,
    rate: 20,
    start: 1600001,
    end: 2000000,
  },
  {
    id: 6,
    rate: 30,
    start: 2000001,
    end: 99999999,
  },
]);

  const addSlab = () => {
    setSlabs([
      ...slabs,
      {
        id: Date.now(),
        rate: "",
        start: "",
        end: "",
      },
    ]);
  };

  const removeSlab = (id) => {
    setSlabs(slabs.filter((s) => s.id !== id));
  };

  const updateSlab = (id, field, value) => {
    setSlabs(
      slabs.map((slab) =>
        slab.id === id
          ? { ...slab, [field]: value }
          : slab
      )
    );
  };

  return (
    <>
      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Tax Slab Management
        </h1>

        <button
          onClick={addSlab}
          className="bg-indigo-600 text-white px-5 py-3 rounded-lg"
        >
          Add Slab
        </button>

      </div>

      <div className="space-y-4">

        {slabs.map((slab, index) => (
          <TaxSlabCard
            key={slab.id}
            slab={slab}
            index={index}
            updateSlab={updateSlab}
            removeSlab={removeSlab}
            canDelete={slabs.length > 1}
          />
        ))}

      </div>
    </>
  );
}