type NavigationProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ activeFilter, onFilterChange }) => {
  const filters = ["All", "User", "Active", "Inactive"];

  return (
    <div className="inline-flex h-10 items-center justify-center px-1.5 py-6 m-2 mx-3 rounded-md bg-gray-200/50 font-medium outline-none">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-1.5 rounded ${
            activeFilter === filter
              ? "bg-white text-black"
              : "text-gray-500"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
