interface Props {
  currentStep: number;
  steps: string[];
}

export default function StepIndicator({
  currentStep,
  steps,
}: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">

      <div className="flex flex-wrap gap-2">

        {steps.map((step, index) => {

          const active =
            currentStep === index + 1;

          return (
            <div
              key={step}
              className={`
                px-4
                py-2
                rounded-xl
                text-sm
                font-medium

                ${
                  active
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }
              `}
            >
              {index + 1}. {step}
            </div>
          );
        })}
      </div>
    </div>
  );
}