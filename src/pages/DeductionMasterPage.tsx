import { useEffect, useMemo, useState } from "react";
import Modal from "../components/Modal";
import Toggle from "../components/Toggle";
import { DeductionMaster } from "../types/master";
import {
  fetchDeductions,
  createDeduction,
  updateDeduction,
  deleteDeduction as deleteDeductionApi,
} from "../services/deductionService";

const defaultForm: DeductionMaster = {
  id: "0",
  deductionName: "",
  deductionCode: "",
  deductionCountryCode: "IN",
  deductionValueType: "PERCENTAGE",
  deductionDefaultValue: 0,
  deductionMinValue: 0,
  deductionMaxValue: 0,
  taxableStatus: true,
  deductionStatus: true,
};

export default function DeductionMasterPage() {
  const [showModal, setShowModal] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  const [countryFilter, setCountryFilter] = useState("ALL");

  const [deductions, setDeductions] = useState<DeductionMaster[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // Fetch deductions from API on component mount
  useEffect(() => {
    const loadDeductions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchDeductions();
        setDeductions(data);
      } catch (err) {
        setError("Failed to load deductions");
        console.error("Error fetching deductions:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDeductions();
  }, []);

  const [form, setForm] = useState<DeductionMaster>(defaultForm);

  const filteredData = useMemo(() => {
    return deductions.filter((item) => {
      const searchMatch =
        item.deductionName.toLowerCase().includes(search.toLowerCase()) ||
        item.deductionCode.toLowerCase().includes(search.toLowerCase());

      const countryMatch =
        countryFilter === "ALL" || item.deductionCountryCode === countryFilter;

      return searchMatch && countryMatch;
    });
  }, [deductions, search, countryFilter]);



  const resetForm = () => {
    setForm({ ...defaultForm });
    setEditingId(null);
  };

  const openCreateModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (item: DeductionMaster) => {
    setForm(item);
    setEditingId(item.id);
    setShowModal(true);
  };

  const saveDeduction = async () => {
    if (!form.deductionName.trim() || !form.deductionCode.trim()) {
      alert("Name and Code required");
      return;
    }

    try {
      if (editingId !== null) {
        // Update existing deduction
        await updateDeduction(editingId, form);
        setDeductions((prev) =>
          prev.map((item) =>
            item.id === editingId ? { ...form, id: editingId } : item,
          ),
        );
      } else {
        // Create new deduction
        const newDeduction = await createDeduction(form);
        setDeductions((prev) => [...prev, newDeduction]);
      }

      setShowModal(false);
      resetForm();
    } catch (err) {
      console.error("Error saving deduction:", err);
      alert("Failed to save deduction");
    }
  };

  const deleteDeduction = async (id: string) => {
    if (window.confirm("Delete Deduction?")) {
      try {
        await deleteDeductionApi(id);
        setDeductions((prev) => prev.filter((item) => item.id !== id));
      } catch (err) {
        console.error("Error deleting deduction:", err);
        alert("Failed to delete deduction");
      }
    }
  };

  return (
    <div className="mb-5">
      <div className="card shadow-lg mb-5" style={{ backgroundColor: "#0d3b66" }}>
        <div className="card-body text-white">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <h1 className="h1 fw-bold mb-2">Deduction Master</h1>
              <p className="mb-0 text-white-50">Manage payroll deduction configuration globally</p>
            </div>
            <button onClick={openCreateModal} className="btn btn-light btn-sm fw-bold">+ Add Deduction</button>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted small mb-2">Total Deductions</p>
              <h2 className="h2 fw-bold text-primary mb-0">{deductions.length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted small mb-2">Active Deductions</p>
              <h2 className="h2 fw-bold text-success mb-0">{deductions.filter((d) => d.deductionStatus).length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted small mb-2">Mandatory</p>
              <h2 className="h2 fw-bold text-secondary mb-0">N/A</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="card border shadow-sm mb-5">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <input
                placeholder="Search deduction..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="form-select"
              >
                <option value="ALL">All Countries</option>
                <option value="IN">India</option>
                <option value="US">USA</option>
                <option value="GB">UK</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card border shadow-sm mb-5 overflow-auto">
        <div className="table-responsive">
          <table className="table table-sm table-hover mb-0 align-middle">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Code</th>
                <th>Country</th>
                <th>Type</th>
                <th>Default</th>
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td className="fw-semibold">{item.deductionName}</td>
                  <td>
                    <span className="badge bg-primary text-white">{item.deductionCode}</span>
                  </td>
                  <td>{item.deductionCountryCode}</td>
                  <td>{item.deductionValueType}</td>
                  <td className="fw-semibold">{item.deductionDefaultValue}</td>
                  <td>
                    <Toggle
                      checked={item.deductionStatus}
                      onChange={() =>
                        setDeductions((prev) =>
                          prev.map((d) =>
                            d.id === item.id
                              ? { ...d, deductionStatus: !d.deductionStatus }
                              : d,
                          )
                        )
                      }
                    />
                  </td>
                  <td className="d-flex gap-2">
                    <button onClick={() => openEditModal(item)} className="btn btn-info btn-sm">Edit</button>
                    <button onClick={() => deleteDeduction(item.id)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={editingId ? "Edit Deduction" : "Create Deduction"}
        onSave={saveDeduction}
      >
        <div className="mb-3">
          <label className="form-label">Deduction Name</label>
          <input
            type="text"
            value={form.deductionName}
            onChange={(e) => setForm({ ...form, deductionName: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Deduction Code</label>
          <input
            type="text"
            value={form.deductionCode}
            onChange={(e) => setForm({ ...form, deductionCode: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <select
            value={form.deductionCountryCode}
            onChange={(e) => setForm({ ...form, deductionCountryCode: e.target.value })}
            className="form-select"
          >
            <option value="IN">India</option>
            <option value="US">USA</option>
            <option value="GB">UK</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Value Type</label>
          <select
            value={form.deductionValueType}
            onChange={(e) => setForm({ ...form, deductionValueType: e.target.value })}
            className="form-select"
          >
            <option value="PERCENTAGE">Percentage</option>
            <option value="FIXED">Fixed Amount</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Default Value</label>
          <input
            type="number"
            value={form.deductionDefaultValue}
            onChange={(e) => setForm({ ...form, deductionDefaultValue: parseFloat(e.target.value) })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Min Value</label>
          <input
            type="number"
            value={form.deductionMinValue}
            onChange={(e) => setForm({ ...form, deductionMinValue: parseFloat(e.target.value) })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Max Value</label>
          <input
            type="number"
            value={form.deductionMaxValue}
            onChange={(e) => setForm({ ...form, deductionMaxValue: parseFloat(e.target.value) })}
            className="form-control"
          />
        </div>
        <div className="form-check form-switch mb-3">
          <input
            type="checkbox"
            checked={form.taxableStatus}
            onChange={(e) => setForm({ ...form, taxableStatus: e.target.checked })}
            className="form-check-input"
          />
          <label className="form-check-label">Taxable</label>
        </div>
      </Modal>
    </div>
  );
}
