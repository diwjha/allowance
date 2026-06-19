// import {
//   ReactNode,
//   useEffect,
// } from "react";

// type ModalSize =
//   | "sm"
//   | "md"
//   | "lg"
//   | "xl";

// type ModalProps = {
//   title: string;
//   isOpen: boolean;
//   onClose: () => void;
//   children: ReactNode;
//   size?: ModalSize;
// };

// export default function Modal({
//   title,
//   isOpen,
//   onClose,
//   children,
//   size = "lg",
// }: ModalProps) {
//   useEffect(() => {
//     const handleEscape = (
//       event: KeyboardEvent
//     ) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.body.style.overflow =
//         "hidden";

//       document.addEventListener(
//         "keydown",
//         handleEscape
//       );
//     }

//     return () => {
//       document.body.style.overflow =
//         "auto";

//       document.removeEventListener(
//         "keydown",
//         handleEscape
//       );
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   const sizeClass = {
//     sm: "max-w-md",
//     md: "max-w-xl",
//     lg: "max-w-3xl",
//     xl: "max-w-5xl",
//   };

//   return (
//     <div
//      className="
//   fixed
//   inset-0
//   z-9999
//   flex
//   items-center
//   justify-center
//   ml-280px
//   bg-slate-900/50
//   backdrop-blur-md
//   p-4
// "
//       onClick={onClose}
//     >
//       <div
//         role="dialog"
//         aria-modal="true"
//         onClick={(e) => e.stopPropagation()}
//         className={`
//           relative
//           bg-white
//           rounded-3xl
//           shadow-[0_25px_80px_rgba(0,0,0,0.25)]
//           w-[min(96vw,100%)]
//           ${sizeClass[size]}
//           max-h-[95vh]
//           overflow-hidden
//           border
//           border-slate-100
//           flex
//           flex-col
//         `}
//       >
//         {/* Decorative Top Bar */}
//         <div className="h-2 shrink-0 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600" />

//         {/* Header */}
//         <div className="flex items-start justify-between gap-3 border-b bg-slate-50 px-4 py-4 sm:px-6 sm:py-5">
//           <div>
//             <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
//               {title}
//             </h2>
//             <p className="mt-1 text-sm text-slate-500">
//               Complete the information below
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="
//               flex
//               h-10
//               w-10
//               shrink-0
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-slate-200
//               bg-white
//               text-lg
//               shadow-sm
//               transition-all
//               duration-300
//               hover:bg-red-50
//               hover:text-red-600
//             "
//           >
//             ✕
//           </button>
//         </div>

//         {/* Content */}
//         <div className="overflow-y-auto bg-white p-4 sm:p-6">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }



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
      z-[9999]
      flex
      items-center
      justify-center
      bg-slate-900/60
      backdrop-blur-sm
      p-4
      "
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={`
          relative
          w-full
          ${sizeClass[size]}
          bg-white
          rounded-3xl
          shadow-[0_25px_80px_rgba(0,0,0,0.25)]
          border
          border-slate-100
          max-h-[90vh]
          overflow-hidden
          flex
          flex-col
          animate-in
        `}
      >
        {/* Top Gradient */}

        <div
          className="
          h-2
          shrink-0
          bg-linear-to-r
          from-indigo-600
          via-purple-600
          to-pink-500
          "
        />

        {/* Header */}

        <div
          className="
          flex
          items-start
          justify-between
          gap-4
          px-6
          py-5
          border-b
          bg-slate-50
          "
        >
          <div>
            <h2
              className="
              text-2xl
              font-bold
              text-slate-800
              "
            >
              {title}
            </h2>

            <p
              className="
              mt-1
              text-sm
              text-slate-500
              "
            >
              Complete the information below
            </p>
          </div>

          <button
            onClick={onClose}
            className="
            w-10
            h-10
            rounded-full
            border
            border-slate-200
            bg-white
            flex
            items-center
            justify-center
            text-lg
            shadow-sm
            transition-all
            hover:bg-red-50
            hover:text-red-600
            "
          >
            ✕
          </button>
        </div>

        {/* Content */}

        <div
          className="
          overflow-y-auto
          p-6
          bg-white
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}