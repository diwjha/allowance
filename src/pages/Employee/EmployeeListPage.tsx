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
      <div className="mb-4">
        <button
          onClick={() =>
            setShowWizard(false)
          }
          className="btn btn-secondary btn-sm"
        >
          ← Back To Employee List
        </button>

        <div className="mt-3">
          <EmployeeWizardPage />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5">
      {/* HERO */}

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
                Employee Management
              </h1>

              <p className="text-white-50 mb-0">
                Manage employee lifecycle
                and payroll.
              </p>
            </div>

            <button
              onClick={() =>
                setShowWizard(true)
              }
              className="btn btn-light btn-sm fw-bold"
            >
              + Add Employee
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}

      <div className="row mb-5 g-3">
        <div className="col-lg-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-2">
                Total Employees
              </p>

              <h2 className="h2 fw-bold mb-0">
                {employees.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-2">
                Permanent
              </p>

              <h2 className="h2 fw-bold text-success mb-0">
                {
                  employees.filter(
                    (e) =>
                      e.employmentType ===
                      "PERMANENT"
                  ).length
                }
              </h2>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-2">
                Contract
              </p>

              <h2 className="h2 fw-bold text-warning mb-0">
                {
                  employees.filter(
                    (e) =>
                      e.employmentType ===
                      "CONTRACT"
                  ).length
                }
              </h2>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted small mb-2">
                Departments
              </p>

              <h2 className="h2 fw-bold text-primary mb-0">
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
        </div>
      </div>

      {/* SEARCH */}

      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="form-control"
          />
        </div>
      </div>

      {/* TABLE */}

      <div className="card shadow-lg overflow-auto">
        <div className="table-responsive">
          <table className="table table-sm table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th className="fw-bold">
                  Employee Code
                </th>

                <th className="fw-bold">
                  Name
                </th>

                <th className="fw-bold">
                  Position
                </th>

                <th className="fw-bold">
                  Department
                </th>

                <th className="fw-bold">
                  Ministry
                </th>

                <th className="fw-bold">
                  Mobile
                </th>

                <th className="fw-bold">
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
                    p-4
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
                    p-4
                    text-center
                    text-muted
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
                    >
                      <td>
                        {
                          emp.employeeCode
                        }
                      </td>

                      <td>
                        {emp.firstName}{" "}
                        {emp.lastName}
                      </td>

                      <td>
                        {emp.position}
                      </td>

                      <td>
                        {
                          emp.departmentName
                        }
                      </td>

                      <td>
                        {
                          emp.ministryName
                        }
                      </td>

                      <td>
                        {
                          emp.mobileNumber
                        }
                      </td>

                      <td className="d-flex gap-2">
                        <button
                          className="btn btn-info btn-sm"
                        >
                          View
                        </button>

                        <button
                          className="btn btn-success btn-sm"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              emp.employeeCode
                            )
                          }
                          className="btn btn-danger btn-sm"
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
    </div>
  );
}