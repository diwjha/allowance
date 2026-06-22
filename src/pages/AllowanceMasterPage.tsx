import { useMemo, useState, useEffect } from "react";
import Modal from "../components/Modal";
import Toggle from "../components/Toggle";
import { AllowanceMaster } from "../types/master";
import {
  fetchAllowances,
  createAllowance,
  updateAllowance,
  deleteAllowance as deleteAllowanceApi,
} from "../services/allowanceService";

const defaultForm: AllowanceMaster = {
  id: "",
  allowanceName: "",
  allowanceCode: "",
  allowanceCountryCode: "IN",
  allowanceValueType: "PERCENTAGE",
  allowanceDefaultValue: 0,
  allowanceMinValue: 0,
  allowanceMaxValue: 0,
  taxableStatus: true,
  allowanceStatus: true,
};

export default function AllowanceMasterPage() {
  const [showModal, setShowModal] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  const [countryFilter, setCountryFilter] = useState("ALL");

  const [statusFilter, setStatusFilter] = useState("ALL");

  const [allowances, setAllowances] = useState<AllowanceMaster[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // Fetch allowances from API on component mount
  useEffect(() => {
    const loadAllowances = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchAllowances();
        setAllowances(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Failed to load allowances");
        console.error("Error fetching allowances:", err);
      } finally {
        setLoading(false);
      }
    };

    loadAllowances();
  }, []);

  const [form, setForm] = useState<AllowanceMaster>(defaultForm);

  const filteredData = useMemo(() => {
    const allowanceList = Array.isArray(allowances) ? allowances : [];

    return allowanceList.filter((item) => {
      const searchMatch =
        item.allowanceName.toLowerCase().includes(search.toLowerCase()) ||
        item.allowanceCode.toLowerCase().includes(search.toLowerCase());

      const countryMatch =
        countryFilter === "ALL" || item.allowanceCountryCode === countryFilter;

      const statusMatch =
        statusFilter === "ALL" ||
        (statusFilter === "ACTIVE" ? item.allowanceStatus : !item.allowanceStatus);

      return searchMatch && countryMatch && statusMatch;
    });
  }, [allowances, search, countryFilter, statusFilter]);

  const resetForm = () => {
    setForm({ ...defaultForm });
    setEditingId(null);
  };

  const openCreateModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (item: AllowanceMaster) => {
    setForm(item);
    setEditingId(item.id);
    setShowModal(true);
  };

  const saveAllowance = async () => {
    if (!form.allowanceName.trim() || !form.allowanceCode.trim()) {
      alert("Name and Code required");
      return;
    }

    try {
      if (editingId !== null) {
        // Update existing allowance
        await updateAllowance(editingId, form);
        setAllowances((prev) =>
          prev.map((item) =>
            item.id === editingId ? { ...form, id: editingId } : item,
          ),
        );
      } else {
        // Create new allowance
        const newAllowance = await createAllowance(form);
        setAllowances((prev) => [...prev, newAllowance]);
      }

      setShowModal(false);
      resetForm();
    } catch (err) {
      console.error("Error saving allowance:", err);
      alert("Failed to save allowance");
    }
  };

  const deleteAllowance = async (id: string) => {
    if (window.confirm("Delete Allowance?")) {
      try {
        await deleteAllowanceApi(id);
        setAllowances((prev) => prev.filter((item) => item.id !== id));
      } catch (err) {
        console.error("Error deleting allowance:", err);
        alert("Failed to delete allowance");
      }
    }
  };

  return (
    <div className="mb-5">
      {/* HEADER */}

      <div
        className="card shadow-lg mb-5"
        style={{
          backgroundColor: "#0d3b66",
        }}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <h1 className="h1 fw-bold text-white mb-2">
                Allowance Master
              </h1>

              <p className="text-white-50 mb-0">
                Manage payroll allowance configuration globally
              </p>
            </div>

            <button
              onClick={openCreateModal}
              className="btn btn-light btn-sm fw-bold"
            >
              + Add Allowance
            </button>
          </div>
        </div>
      </div>

      {/* FILTER */}

      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-lg-4">
              <input
                placeholder="Search allowance..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="form-control"
              />
            </div>

            <div className="col-lg-4">
              <select
                value={countryFilter}
                onChange={(e) =>
                  setCountryFilter(e.target.value)
                }
                className="form-select"
              >
                <option value="ALL">All Countries</option>

                <option value="IN">India</option>

                <option value="US">USA</option>
              </select>
            </div>

            <div className="col-lg-4">
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
                className="form-select"
              >
                <option value="ALL">All Status</option>

                <option value="ACTIVE">Active</option>

                <option value="INACTIVE">
                  Inactive
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}

      {error && (
        <div className="alert alert-danger mb-3">
          {error}
        </div>
      )}

      {loading ? (
        <div className="card shadow-lg p-5 text-center">
          <p className="text-muted mb-0">
            Loading allowances...
          </p>
        </div>
      ) : (
        <div className="card shadow-lg overflow-auto">
          <div className="table-responsive">
            <table className="table table-sm table-hover mb-0">
              <thead className="table-light">
                <tr>
                  {[
                    "Name",
                    "Code",
                    "Country",
                    "Type",
                    "Default",
                    "Taxable",
                    "Status",
                    "Actions",
                  ].map((head) => (
                    <th key={head} className="fw-bold">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td className="fw-bold">
                      {item.allowanceName}
                    </td>

                    <td>
                      <span className="badge bg-primary">
                        {item.allowanceCode}
                      </span>
                    </td>

                    <td>
                      {item.allowanceCountryCode}
                    </td>

                    <td>
                      {item.allowanceValueType}
                    </td>

                    <td className="fw-bold">
                      {
                        item.allowanceDefaultValue
                      }
                    </td>

                    <td>
                      <Toggle
                        checked={
                          item.taxableStatus
                        }
                        onChange={() => {
                          setAllowances(
                            (prev) =>
                              prev.map(
                                (a) =>
                                  a.id ===
                                  item.id
                                    ? {
                                        ...a,
                                        taxableStatus:
                                          !a.taxableStatus,
                                      }
                                    : a
                              )
                          );
                        }}
                      />
                    </td>

                    <td>
                      <span
                        className={`badge ${
                          item.allowanceStatus
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {item.allowanceStatus
                          ? "Active"
                          : "Inactive"}
                      </span>
                    </td>

                    <td className="d-flex gap-2">
                      <button
                        onClick={() =>
                          openEditModal(item)
                        }
                        className="btn btn-info btn-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteAllowance(
                            item.id
                          )
                        }
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL */}

      <Modal
        title={
          editingId
            ? "Edit Allowance"
            : "Create Allowance"
        }
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          resetForm();
        }}
      >
        <div className="row g-3">
          {[
            "allowanceName",
            "allowanceCode",
            "allowanceDefaultValue",
            "allowanceMinValue",
            "allowanceMaxValue",
          ].map((field) => (
            <div key={field} className="col-md-6">
              <input
                type={
                  field.includes("Value")
                    ? "number"
                    : "text"
                }
                placeholder={field}
                value={(form as any)[field]}
                onChange={(e) =>
                  setForm({
                    ...form,

                    [field]: field.includes(
                      "Value"
                    )
                      ? Number(e.target.value)
                      : e.target.value,
                  })
                }
                className="form-control form-control-sm"
              />
            </div>
          ))}

          <div className="col-md-6">
            <select
              className="form-select form-select-sm"
              value={form.allowanceValueType}
              onChange={(e) =>
                setForm({
                  ...form,

                  allowanceValueType: e.target
                    .value as any,
                })
              }
            >
              <option value="PERCENTAGE">
                Percentage
              </option>

              <option value="FIXED_AMOUNT">
                Fixed Amount
              </option>

              <option value="UNIT">Unit</option>
            </select>
          </div>
        </div>

        <button
          onClick={saveAllowance}
          className="btn btn-primary btn-sm mt-4"
        >
          Save Allowance
        </button>
      </Modal>
    </div>
  );
}
