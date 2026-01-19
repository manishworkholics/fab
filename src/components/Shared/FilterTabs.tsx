interface FilterTabsProps {
  active: string;
  setActive: (status: string) => void;
  counts?: Record<string, number>;
  tabs: string[];
}

const FilterTabs: React.FC<FilterTabsProps> = ({ active, setActive, counts, tabs }) => (
  <div className="flex mt-4 w-fit">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`pb-2 px-6 py-2 text-sm font-medium relative text-center border-b-2 ${
          active === tab
            ? "text-orange-600 border-orange-600"
            : "text-gray-500 border-gray-300 hover:text-orange-600 hover:border-orange-300 hover:bg-orange-50"
        }`}
        onClick={() => setActive(tab)}
      >
        {tab} {counts ? <span className="ml-1 text-xs">({counts[tab] || 0})</span> : null}
      </button>
    ))}
  </div>
);

export default FilterTabs;
