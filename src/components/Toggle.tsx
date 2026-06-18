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
  const sizeStyles = {
    sm: {
      track: "w-10 h-6",
      thumb: "w-4 h-4",
      active: "translate-x-4",
    },

    md: {
      track: "w-14 h-8",
      thumb: "w-6 h-6",
      active: "translate-x-6",
    },

    lg: {
      track: "w-16 h-9",
      thumb: "w-7 h-7",
      active: "translate-x-7",
    },
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={onChange}
        className={`
          relative
          flex
          items-center
          px-1
          rounded-full
          transition-all
          duration-300
          shadow-inner
          ${
            checked
              ? "bg-linear-to-r from-emerald-500 to-green-600"
              : "bg-slate-300"
          }
          ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:scale-105"
          }
          ${sizeStyles[size].track}
        `}
      >
        <span
          className={`
            flex
            items-center
            justify-center
            bg-white
            rounded-full
            shadow-lg
            transition-all
            duration-300
            ${sizeStyles[size].thumb}
            ${
              checked
                ? sizeStyles[size].active
                : ""
            }
          `}
        >
          {checked ? (
            <span className="text-[10px]">
              ✓
            </span>
          ) : null}
        </span>
      </button>

      {showLabel && (
        <span
          className={`
            text-sm
            font-semibold
            transition-colors
            duration-300
            ${
              checked
                ? "text-green-600"
                : "text-slate-500"
            }
          `}
        >
          {checked
            ? activeLabel
            : inactiveLabel}
        </span>
      )}
    </div>
  );
}