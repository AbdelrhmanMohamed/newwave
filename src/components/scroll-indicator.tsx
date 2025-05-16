export default function ScrollIndicator() {
  return (
    <div className="fixed left-6 bottom-12 hidden lg:flex flex-col items-center">
      <div className="transform -rotate-90 origin-center mb-8">
        <span className="uppercase text-xs tracking-widest text-gray-400">
          Scroll
        </span>
      </div>
      <div className="h-2 w-2 bg-red-600 rounded-full"></div>
      <div className="h-16 w-px bg-gray-700 mt-2"></div>
    </div>
  );
}
