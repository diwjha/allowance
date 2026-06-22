import {
  useEffect,
  useMemo,
  useState,
} from "react";

import EmployeeWizardPage from "./EmployeeWizardPage";

import {
  getEmployees,
  deleteEmployee,
} from "../../services/employeeService";

interface Employee {
  employeeCode: string;
  firstName: string;
  lastName: string;
  position: string;
  departmentName: string;
  ministryName: string;
  mobileNumber: string;
  dateOfJoining: string;
  employmentType: string;
}

export default function EmployeeListPage() {
  const [search, setSearch] = useState("");

  const [showWizard, setShowWizard] =
    useState(false);

  const [employees, setEmployees] =
    useState<Employee[]>([]);

  const [loading, setLoading] =
    useState(false);

  // ===========================
  // LOAD EMPLOYEES
  // ===========================

  const loadEmployees = async () => {
    try {
      setLoading(true);

      const response =
        await getEmployees();

      console.log(
        "Employee API Response",
        response
      );

      setEmployees(
        response.content || []
      );
    } catch (error) {
      console.error(
        "Failed to load employees",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // ===========================
  // DELETE EMPLOYEE
  // ===========================

  const handleDelete = async (
    employeeCode: string
  ) => {
    const confirmDelete =
      window.confirm(
        "Delete this employee?"
      );

    if (!confirmDelete) return;

    try {
      await deleteEmployee(
        employeeCode
      );

      await loadEmployees();

      alert(
        "Employee deleted successfully"
      );
    } catch (error) {
      console.error(error);

      alert("Delete failed");
    }
  };

  // ===========================
  // SEARCH FILTER
  // ===========================

  const filteredEmployees =
    useMemo(() => {
      return employees.filter(
        (emp) => {
          const fullName =
            `${emp.firstName} ${emp.lastName}`;

          return (
            emp.employeeCode
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            fullName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            emp.position
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            emp.departmentName
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            emp.ministryName
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              )
          );
        }
      );
    }, [employees, search]);

  // ===========================
  // SHOW WIZARD
  // ===========================

  if (showWizard) {
    return (
      <div className="space-y-6">
        <button
          onClick={() =>
            setShowWizard(false)
          }
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
            Manage employee lifecycle
            and payroll.
          </p>
        </div>

        <button
          onClick={() =>
            setShowWizard(true)
          }
          className="
          bg-white
          text-indigo-600
          px-6
          py-3
          rounded-xl
          font-semibold
          shadow
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
            {employees.length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-slate-500">
            Permanent
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-2">
            {
              employees.filter(
                (e) =>
                  e.employmentType ===
                  "PERMANENT"
              ).length
            }
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-slate-500">
            Contract
          </p>

          <h2 className="text-4xl font-bold text-yellow-600 mt-2">
            {
              employees.filter(
                (e) =>
                  e.employmentType ===
                  "CONTRACT"
              ).length
            }
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-slate-500">
            Departments
          </p>

          <h2 className="text-4xl font-bold text-indigo-600 mt-2">
            {
              new Set(
                employees.map(
                  (e) =>
                    e.departmentName
                )
              ).size
            }
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
            setSearch(
              e.target.value
            )
          }
          className="
          w-full
          border
          rounded-xl
          p-3
          outline-none
          focus:ring-2
          focus:ring-indigo-500
          "
        />
      </div>

      {/* TABLE */}

      <div className="bg-white rounded-3xl shadow-xl overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-5 text-left">
                Employee Code
              </th>

              <th className="p-5 text-left">
                Name
              </th>

              <th className="p-5 text-left">
                Position
              </th>

              <th className="p-5 text-left">
                Department
              </th>

              <th className="p-5 text-left">
                Ministry
              </th>

              <th className="p-5 text-left">
                Mobile
              </th>

              <th className="p-5 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={7}
                  className="
                  p-10
                  text-center
                  "
                >
                  Loading...
                </td>
              </tr>
            ) : filteredEmployees.length ===
              0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="
                  p-10
                  text-center
                  text-slate-500
                  "
                >
                  No Employees Found
                </td>
              </tr>
            ) : (
              filteredEmployees.map(
                (emp) => (
                  <tr
                    key={
                      emp.employeeCode
                    }
                    className="
                    border-t
                    hover:bg-slate-50
                    "
                  >
                    <td className="p-5">
                      {
                        emp.employeeCode
                      }
                    </td>

                    <td className="p-5">
                      {emp.firstName}{" "}
                      {emp.lastName}
                    </td>

                    <td className="p-5">
                      {emp.position}
                    </td>

                    <td className="p-5">
                      {
                        emp.departmentName
                      }
                    </td>

                    <td className="p-5">
                      {
                        emp.ministryName
                      }
                    </td>

                    <td className="p-5">
                      {
                        emp.mobileNumber
                      }
                    </td>

                    <td className="p-5 flex gap-2">
                      <button
                        className="
                        bg-blue-500
                        text-white
                        px-3
                        py-2
                        rounded-lg
                        "
                      >
                        View
                      </button>

                      <button
                        className="
                        bg-green-500
                        text-white
                        px-3
                        py-2
                        rounded-lg
                        "
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(
                            emp.employeeCode
                          )
                        }
                        className="
                        bg-red-500
                        text-white
                        px-3
                        py-2
                        rounded-lg
                        "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}