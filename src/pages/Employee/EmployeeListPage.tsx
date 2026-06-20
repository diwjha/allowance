import { useMemo, useState } from "react";
import EmployeeWizardPage from "./EmployeeWizardPage";

export default function EmployeeListPage() {
  const [search, setSearch] = useState("");
  const [showWizard, setShowWizard] = useState(false);

  const employees = [
    {
      id: 1,
      employeeId: "EMP001",
      name: "Rahul Sharma",
      designation: "Software Engineer",
      department: "IT",
      joiningDate: "2024-01-15",
      status: "ACTIVE",
    },
    {
      id: 2,
      employeeId: "EMP002",
      name: "Amit Kumar",
      designation: "HR Manager",
      department: "HR",
      joiningDate: "2023-09-10",
      status: "ON_LEAVE",
    },
  ];

  const filteredEmployees = useMemo(() => {
    return employees.filter(
      (emp) =>
        emp.employeeId
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        emp.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        emp.designation
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search]);

  // ============================
  // SHOW WIZARD
  // ============================

  if (showWizard) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setShowWizard(false)}
          className="
          bg-slate-200
          hover:bg-slate-300
          px-5
          py-3
          rounded-xl
          font-semibold
          "
        >
          ← Back To Employee List
        </button>

        <EmployeeWizardPage />
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* HERO */}

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
        gap-4
        "
      >
        <div>
          <h1 className="text-4xl font-bold">
            Employee Management
          </h1>

          <p className="text-indigo-100 mt-2">
            Manage employee lifecycle, payroll,
            service records and compliance.
          </p>
        </div>

        <button
          onClick={() => setShowWizard(true)}
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
          + Add Employee
        </button>
      </div>

      {/* STATS */}

      <div className="grid lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-slate-500">
            Total Employees
          </p>

          <h2 className="text-4xl font-bold mt-2">
            250
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-slate-500">
            Active
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-2">
            220
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-slate-500">
            On Leave
          </p>

          <h2 className="text-4xl font-bold text-yellow-600 mt-2">
            18
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-slate-500">
            Retired
          </p>

          <h2 className="text-4xl font-bold text-red-600 mt-2">
            12
          </h2>
        </div>

      </div>

      {/* SEARCH */}

      <div className="bg-white rounded-3xl shadow-lg p-6">

        <input
          type="text"
          placeholder="Search Employee..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
          w-full
          border
          rounded-xl
          p-3
          focus:ring-2
          focus:ring-indigo-400
          outline-none
          "
        />

      </div>

      {/* TABLE */}

      <div
        className="
        bg-white
        rounded-3xl
        shadow-xl
        overflow-x-auto
        "
      >
        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="p-5 text-left">
                Employee ID
              </th>

              <th className="p-5 text-left">
                Name
              </th>

              <th className="p-5 text-left">
                Designation
              </th>

              <th className="p-5 text-left">
                Department
              </th>

              <th className="p-5 text-left">
                Joining Date
              </th>

              <th className="p-5 text-left">
                Status
              </th>

              <th className="p-5 text-left">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>

            {filteredEmployees.map((emp) => (
              <tr
                key={emp.id}
                className="
                border-t
                hover:bg-slate-50
                "
              >
                <td className="p-5">
                  {emp.employeeId}
                </td>

                <td className="p-5">
                  {emp.name}
                </td>

                <td className="p-5">
                  {emp.designation}
                </td>

                <td className="p-5">
                  {emp.department}
                </td>

                <td className="p-5">
                  {emp.joiningDate}
                </td>

                <td className="p-5">
                  {emp.status}
                </td>

                <td className="p-5 flex gap-2">

                  <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">
                    View
                  </button>

                  <button className="bg-green-500 text-white px-3 py-2 rounded-lg">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
                    Delete
                  </button>

                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
}