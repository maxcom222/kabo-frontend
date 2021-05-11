const Stepper = ({ labels, current }) => {
  const count = labels.length;
  let stepper = [];
  for (let i = 0; i < count; i++) {
    if (i == count - 1) {
      stepper.push(
        <li key={i} className="relative">
          <div href="#" className="relative flex items-start group">
            <span className="h-9 flex items-center" aria-hidden="true">
              <span className={`relative z-10 w-8 h-8 flex items-center justify-center ${i < current ? 'bg-primary' : 'bg-white  border-gray-300 border-2'} rounded-full `}>
                <span className="h-2.5 w-2.5 bg-transparent rounded-full" />
              </span>
            </span>
            <span className="ml-4 min-w-0 flex flex-col">
              <span className={`text-xs font-semibold uppercase tracking-wide ${i >= current && 'text-gray-500'}`}>
                Delivering
              </span>
              <span className="text-sm text-gray-500">
                Your order is out for delivery
              </span>
            </span>
          </div>
        </li>
      );
    } else {
      stepper.push(
        <li key={i} className="relative pb-10">
          <div
            className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${i < current ? 'bg-primary' : 'bg-gray-300'}`}
            aria-hidden="true"
          />
          <div className="relative flex items-start group">
            <span className={`relative z-10 w-8 h-8 flex items-center justify-center ${i < current ? 'bg-primary' : 'bg-white border-gray-300 border-2'} rounded-full `}>
              <span className="h-2.5 w-2.5 bg-transparent rounded-full" />
            </span>
            <span className="ml-4 min-w-0 flex flex-col">
              <span className={`text-xs font-semibold uppercase tracking-wide  ${i >= current && 'text-gray-500'}`}>
                {labels[i].main}
              </span>
              <span className="text-sm text-gray-500">{labels[i].sub}</span>
            </span>
          </div>
        </li>
      );
    }
  }
  return <ol>{stepper}</ol>;
};

export default Stepper;
