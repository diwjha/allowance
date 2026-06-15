import { useState } from "react";
import "./App.css";

function App() {
  const [slabs, setSlabs] = useState([
    {
      id: 1,
      slabName: "Slab 1",
      startAmount: 0,
      endAmount: 300000,
      taxRate: 5,
    },
    {
      id: 2,
      slabName: "Slab 2",
      startAmount: 300001,
      endAmount: 700000,
      taxRate: 10,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    slabName: "",
    startAmount: "",
    endAmount: "",
    taxRate: "",
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSlab = () => {
    if (
      !formData.slabName ||
      !formData.startAmount ||
      !formData.endAmount ||
      !formData.taxRate
    ) {
      alert("Please fill all fields");
      return;
    }

    if (Number(formData.startAmount) >= Number(formData.endAmount)) {
      alert("Start Amount should be less than End Amount");
      return;
    }

    const newSlab = {
      id: Date.now(),
      slabName: formData.slabName,
      startAmount: Number(formData.startAmount),
      endAmount: Number(formData.endAmount),
      taxRate: Number(formData.taxRate),
    };

    setSlabs([...slabs, newSlab]);

    setFormData({
      slabName: "",
      startAmount: "",
      endAmount: "",
      taxRate: "",
    });

    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this tax slab?")) {
      setSlabs(slabs.filter((slab) => slab.id !== id));
    }
  };

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div>
            <h1>Tax Slab Configuration</h1>
            <p>Manage tax slabs and income tax rates</p>
          </div>

          <button
            className="add-btn"
            onClick={() => setShowModal(true)}
          >
            + Add Slab
          </button>
        </div>

        {/* Summary Card */}
        <div className="stats-card">
          <h2>{slabs.length}</h2>
          <span>Total Tax Slabs</span>
        </div>

        {/* Table */}
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Slab Name</th>
                <th>Start Amount</th>
                <th>End Amount</th>
                <th>Tax Rate</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {slabs.length > 0 ? (
                slabs.map((slab) => (
                  <tr key={slab.id}>
                    <td>
                      <span className="slab-badge">
                        {slab.slabName}
                      </span>
                    </td>

                    <td>{formatCurrency(slab.startAmount)}</td>

                    <td>{formatCurrency(slab.endAmount)}</td>

                    <td>
                      <span className="rate-badge">
                        {slab.taxRate}%
                      </span>
                    </td>

                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(slab.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="empty-state">
                    No tax slabs found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Add Tax Slab</h2>

              <div className="form-group">
                <label>Slab Name</label>
                <input
                  type="text"
                  name="slabName"
                  placeholder="e.g. Slab 3"
                  value={formData.slabName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Start Amount (₹)</label>
                <input
                  type="number"
                  name="startAmount"
                  value={formData.startAmount}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>End Amount (₹)</label>
                <input
                  type="number"
                  name="endAmount"
                  value={formData.endAmount}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Tax Rate (%)</label>
                <input
                  type="number"
                  name="taxRate"
                  value={formData.taxRate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="modal-actions">
                <button
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="save-btn"
                  onClick={handleAddSlab}
                >
                  Save Slab
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;