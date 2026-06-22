type ToggleSize =
  | "sm"
  | "md"
  | "lg";

type ToggleProps = {
  checked: boolean;
  onChange: () => void;

  disabled?: boolean;

  showLabel?: boolean;

  activeLabel?: string;
  inactiveLabel?: string;

  size?: ToggleSize;
};

export default function Toggle({
  checked,
  onChange,

  disabled = false,

  showLabel = false,

  activeLabel = "Active",
  inactiveLabel = "Inactive",

  size = "md",
}: ToggleProps) {
  return (
    <div className="d-flex align-items-center gap-2">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="toggleSwitch"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          style={{
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.5 : 1,
          }}
        />
      </div>

      {showLabel && (
        <span
          className="small fw-semibold"
          style={{
            color: checked ? "#28a745" : "#6c757d",
          }}
        >
          {checked ? activeLabel : inactiveLabel}
        </span>
      )}
    </div>
  );
}