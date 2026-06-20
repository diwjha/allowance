import { EmployeeRequestDto } from "../../../types/employeeApi";

interface Props {
  formData: EmployeeRequestDto;
}

export default function ReviewAndSubmitStep({
  formData,
}: Props) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Review Employee Information
      </h2>

      <div className="space-y-3">

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
      className="
      flex
      justify-between
      border-b
      py-3
      "
    >
      <span className="font-semibold">
        {label}
      </span>

      <span>{value}</span>
    </div>
  );
}