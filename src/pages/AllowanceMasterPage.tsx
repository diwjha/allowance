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
    <div className="space-y-8">
      {/* HEADER */}

      <div
        className="
bg-linear-to-r
from-indigo-600
via-purple-600
to-pink-500
rounded-3xl
p-8
text-white
shadow-xl
flex
justify-between
items-center
flex-wrap
gap-5
"
      >
        <div>
          <h1 className="text-4xl font-bold">Allowance Master</h1>

          <p
            className="
text-indigo-100
mt-2
"
          >
            Manage payroll allowance configuration globally
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="
bg-white
text-indigo-600
px-6
py-3
rounded-xl
font-semibold
shadow
hover:scale-105
transition
"
        >
          + Add Allowance
        </button>
      </div>

      {/* FILTER */}

      <div
        className="
bg-white
rounded-2xl
shadow-lg
p-6
"
      >
        <div
          className="
grid
lg:grid-cols-3
gap-5
"
        >
          <input
            placeholder="Search allowance..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
border
rounded-xl
p-3
focus:ring-2
focus:ring-indigo-400
outline-none
"
          />

          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="
border
rounded-xl
p-3
"
          >
            <option value="ALL">All Countries</option>

            <option value="IN">India</option>

            <option value="US">USA</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="
border
rounded-xl
p-3
"
          >
            <option value="ALL">All Status</option>

            <option value="ACTIVE">Active</option>

            <option value="INACTIVE">Inactive</option>
          </select>
        </div>
      </div>

      {/* TABLE */}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <p className="text-gray-500">Loading allowances...</p>
        </div>
      ) : (
        <div
          className="
bg-white
rounded-3xl
shadow-xl
overflow-x-auto
"
        >
          <table className="w-full">
          <thead
            className="
bg-linear-to-r
from-indigo-100
to-purple-100
"
          >
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
                <th
                  key={head}
                  className="
p-5
text-left
text-slate-700
"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr
                key={item.id}
                className="
border-t
hover:bg-slate-50
transition
"
              >
                <td className="p-5 font-medium">{item.allowanceName}</td>

                <td className="p-5">
                  <span
                    className="
bg-indigo-100
text-indigo-700
px-3
py-1
rounded-full
text-sm
"
                  >
                    {item.allowanceCode}
                  </span>
                </td>

                <td className="p-5">{item.allowanceCountryCode}</td>

                <td className="p-5">{item.allowanceValueType}</td>

                <td className="p-5 font-semibold">{item.allowanceDefaultValue}</td>

                <td className="p-5">
                  <Toggle
                    checked={item.taxableStatus}
                    onChange={() => {
                      setAllowances((prev) =>
                        prev.map((a) =>
                          a.id === item.id
                            ? {
                                ...a,
                                taxableStatus: !a.taxableStatus,
                              }
                            : a,
                        ),
                      );
                    }}
                  />
                </td>

                <td className="p-5">
                  <span
                    className={`

px-3
py-1
rounded-full
text-sm

${item.allowanceStatus ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}

`}
                  >
                    {item.allowanceStatus ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="p-5 flex gap-3">
                  <button
                    onClick={() => openEditModal(item)}
                    className="
bg-blue-500
text-white
px-4
py-2
rounded-lg
hover:bg-blue-600
"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteAllowance(item.id)}
                    className="
bg-red-500
text-white
px-4
py-2
rounded-lg
hover:bg-red-600
"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}

      {/* MODAL */}

      <Modal
        title={editingId ? "Edit Allowance" : "Create Allowance"}
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          resetForm();
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {["allowanceName", "allowanceCode", "allowanceDefaultValue", "allowanceMinValue", "allowanceMaxValue"].map(
            (field) => (
              <input
                key={field}
                type={field.includes("Value") ? "number" : "text"}
                placeholder={field}
                value={(form as any)[field]}
                onChange={(e) =>
                  setForm({
                    ...form,

                    [field]: field.includes("Value")
                      ? Number(e.target.value)
                      : e.target.value,
                  })
                }
                className="
border
rounded-xl
p-3
"
              />
            ),
          )}

          <select
            className="
border
rounded-xl
p-3
"
            value={form.allowanceValueType}
            onChange={(e) =>
              setForm({
                ...form,

                allowanceValueType: e.target.value as any,
              })
            }
          >
            <option value="PERCENTAGE">Percentage</option>

            <option value="FIXED_AMOUNT">Fixed Amount</option>

            <option value="UNIT">Unit</option>
          </select>
        </div>

        <button
          onClick={saveAllowance}
          className="
mt-6
bg-linear-to-r
from-indigo-600
to-purple-600
text-white
px-6
py-3
rounded-xl
shadow
"
        >
          Save Allowance
        </button>
      </Modal>
    </div>
  );
}
