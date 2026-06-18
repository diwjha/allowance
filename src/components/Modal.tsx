import {
  ReactNode,
  useEffect,
} from "react";

type ModalSize =
  | "sm"
  | "md"
  | "lg"
  | "xl";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: ModalSize;
};

export default function Modal({
  title,
  isOpen,
  onClose,
  children,
  size = "lg",
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow =
        "hidden";

      document.addEventListener(
        "keydown",
        handleEscape
      );
    }

    return () => {
      document.body.style.overflow =
        "auto";

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClass = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-900/50
        backdrop-blur-md
        p-4
      "
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) =>
          e.stopPropagation()
        }
        className={`
          relative
          bg-white
          rounded-3xl
          shadow-[0_25px_80px_rgba(0,0,0,0.25)]
          w-full
          ${sizeClass[size]}
          max-h-[90vh]
          overflow-hidden
          border
          border-slate-100
        `}
      >
        {/* Decorative Top Bar */}
        <div className="h-2 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600" />

        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b bg-slate-50">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {title}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Complete the information below
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              w-11
              h-11
              rounded-full
              bg-white
              border
              border-slate-200
              shadow-sm
              hover:bg-red-50
              hover:text-red-600
              transition-all
              duration-300
              flex
              items-center
              justify-center
              text-lg
            "
          >
            ✕
          </button>

        </div>

        {/* Content */}
        <div className="p-7 overflow-y-auto max-h-[75vh] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}