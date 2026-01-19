import { AiAgentDifferentData, CoreDifferentData } from "@/utils/constant";

export const CoreDifferent = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="container mx-auto text-center">
       
        <h2 className="text-pretty text-4xl mb-8 text-[40px] text-[#3E3838] mt-[5rem] tracking-tight  sm:text-5xl">
        What Makes Fabspace AI Different
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm md:text-base text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 bg-blue-50">Fabspace AI</th>
                <th className="p-4">Traditional Portals</th>
                <th className="p-4">Email/Manual</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
              {CoreDifferentData.map((row, idx) => (
                <tr key={idx} className="border-t border-gray-200">
                  <td className="p-4 text-left">{row.feature}</td>
                  <td className={`p-4 bg-blue-50`}>
                    {row.fabspace.type === "success" && "✅"} {row.fabspace.text}
                  </td>
                  <td className={`p-4  `}>❌ {row.portal.text}</td>
                  <td className={`p-4  `}>❌ {row.manual.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}; 

export const AiDifferent = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="container mx-auto text-center">
       
        <h2 className="text-pretty text-4xl mb-8 text-[56px] text-[#3E3838]  tracking-tight mt-[5rem] sm:text-5xl">
        What Makes Fabspace AI Agents Different?
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm md:text-base text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4">Fabspace AI Agents</th>
                <th className="p-4">Traditional EMS Tools</th>
                <th className="p-4">Manual Processes</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
              {AiAgentDifferentData.map((row, idx) => (
                <tr key={idx} className="border-t border-gray-200">
                  <td className="p-4 text-left">{row.feature}</td>
                  <td className={`p-4 bg-blue-50`}>
                    {row.fabspace.type === "success" && "✅"} {row.fabspace.text}
                  </td>
                  <td className={`p-4  `}>❌ {row.portal.text}</td>
                  <td className={`p-4  `}>❌ {row.manual.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

 