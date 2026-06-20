interface Props {
  currentStep: number;
  totalSteps: number;

  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;

  loading: boolean;
}

export default function WizardFooter({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onSubmit,
  loading,
}: Props) {
  return (
    <div className="flex justify-between">

      <button
        onClick={onPrevious}
        disabled={currentStep === 1}
        className="
        px-5
        py-3
        rounded-xl
        bg-gray-200
        disabled:opacity-50
        "
      >
        Previous
      </button>

      {currentStep < totalSteps ? (
        <button
          onClick={onNext}
          className="
          px-5
          py-3
          rounded-xl
          bg-indigo-600
          text-white
          "
        >
          Next
        </button>
      ) : (
        <button
          onClick={onSubmit}
          disabled={loading}
          className="
          px-5
          py-3
          rounded-xl
          bg-green-600
          text-white
          "
        >
          {loading
            ? "Saving..."
            : "Create Employee"}
        </button>
      )}

    </div>
  );
}