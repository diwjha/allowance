import { EmployeeRequestDto } from "../../../types/employeeApi";

interface Props {
  formData: EmployeeRequestDto;
}

export default function ReviewAndSubmitStep({
  formData,
}: Props) {
  return (
    <div>

      <h4 className="fw-bold mb-4">
        Review Employee Information
      </h4>

      <div className="list-group list-group-flush">

        <ReviewRow
          label="Employee Code"
          value={formData.employeeCode}
        />

        <ReviewRow
          label="Name"
          value={`${formData.title} ${formData.firstName} ${formData.lastName}`}
        />

        <ReviewRow
          label="Email"
          value={formData.email}
        />

        <ReviewRow
          label="Mobile"
          value={formData.mobileNumber}
        />

        <ReviewRow
          label="Position"
          value={formData.position}
        />

        <ReviewRow
          label="Employment Type"
          value={formData.employmentType}
        />

        <ReviewRow
          label="Department"
          value={formData.departmentId}
        />

        <ReviewRow
          label="Division"
          value={formData.division}
        />

        <ReviewRow
          label="Branch"
          value={formData.branchId}
        />

      </div>

    </div>
  );
}

function ReviewRow({
  label,
  value,
}: {
  label: string;
  value: any;
}) {
  return (
    <div
      className="list-group-item d-flex justify-content-between py-2"
    >
      <span className="fw-semibold small">
        {label}
      </span>

      <span className="small">{value}</span>
    </div>
  );
}