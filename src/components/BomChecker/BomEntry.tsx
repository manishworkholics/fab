import { useNavigate } from "react-router-dom";
import ChainIcon from "../icons/ChainIcon";
import { FeatureCard } from "../Shared/FeatureCard";

const BomEntry = () => {
  const navigate = useNavigate();
  const handleBomEntry = () => {
    navigate("/bom-checker");
  };
  return (
    <div className="mt-[5rem]  border p-2 md:p-9 rounded-lg">
      <h3 className="text-[14.51px] mb-4 text-[#101928] font-semibold">
        Agents
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <FeatureCard
        icon={<ChainIcon />}
        text="Bom Checker"
        backgroundColor="#FFECE5"
        onClick={() => handleBomEntry()}
      />
      <FeatureCard
        icon={<ChainIcon />}
        text="Bom Entry"
        backgroundColor="#FFECE5"
        onClick={() => alert("Track project clicked")}
      />
      </div>
    </div>
  );
};

export default BomEntry;
