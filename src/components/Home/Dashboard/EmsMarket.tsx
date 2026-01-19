import ChainIcon from "../../icons/ChainIcon";
import NoteIcon from "../../icons/NoteIcon";
import PointerIcon from "../../icons/PointerIcon";
import SearchBar from "../../ui/SearchBar";
import SettingIcon from "../../icons/SettingIcon";
import Sidebar from "../../Layout/Sidebar";

const EmsMarket = () => {
  return (
    <div>
      <div className="container m-auto p-1 bg-gradient-to-r from-[#FF6250] via-[#D2E7FF] to-[#FF6250] rounded-md">
        <div className="border-8 rounded-md bg-white">
          <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
          <div className="hidden lg:block">
          <Sidebar role="EMS" isSideBar={true} />
          </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div>
                <main className="flex-1 p-6">
                  <div className="text-center rounded-lg md:p-6">
                    <h1 className="text-[25.15px] md:text-[45.15px] font-semibold text-gray-800">
                      Hello Quadri
                    </h1>
                    <p className="mb-9 text-[19.35px] text-gray-600">
                      What can I help you with?
                    </p>
                    <div className="mt-4 md:w-[70%] m-auto">
                      <SearchBar
                        placeHolderText={"When X happens, do Y, then do Z."}
                        width="w-full"
                      />
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="mt-6 md:mt-0 flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-0 justify-center space-x-4">
                    <button className="bg-[#FFECE5] flex items-center gap-2 text-[#F56630] px-4 py-2 rounded-md">
                      <PointerIcon /> Generate Project ID
                    </button>
                    <button className="bg-[#FFECE5] flex items-center gap-2 text-[#F56630] px-4 py-2 rounded-md">
                      <PointerIcon />
                      Issue PO
                    </button>
                    <button className="bg-[#FFECE5] flex items-center gap-2 text-[#F56630] px-4 py-2 rounded-md">
                      <PointerIcon />
                      Track Project Status
                    </button>
                    <button className="bg-[#FFECE5] flex items-center gap-2 text-[#F56630] px-4 py-2 rounded-md">
                      <PointerIcon /> Quotation
                    </button>
                    <button className="bg-[#FFECE5] flex items-center gap-2 text-[#F56630] px-4 py-2 rounded-md">
                      <PointerIcon />
                      Get Files
                    </button>
                  </div>

                  {/* Additional Content */}
                  <div className="mt-[5rem]  border p-2 md:p-9 rounded-lg">
                    <h3 className="text-[14.51px] mb-4 text-[#101928] font-semibold">
                      Do more with FabSpace
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 bg-[#FEF6E7] rounded-md shadow">
                        <div className=" mb-9">
                          <ChainIcon />
                        </div>
                        <h3 className="text-sm font-medium text-gray-800 mb-3">
                          Track project status with ease
                        </h3>
                      </div>
                      <div className="p-4 bg-[#FFECE5] rounded-md shadow">
                        <div className=" mb-9">
                          <SettingIcon />
                        </div>
                        <h3 className="text-sm font-medium text-gray-800 mb-3">
                          Generate Project ID
                        </h3>
                      </div>
                      <div className="p-4 bg-green-100 rounded-md shadow">
                        <div className=" mb-9">
                          <NoteIcon />
                        </div>
                        <h3 className="text-sm font-medium text-gray-800 mb-3">
                          View Purchase Orders
                        </h3>
                      </div>
                      <div className="p-4 bg-[#E3EFFC] rounded-md shadow">
                        <div className="flex items-center mb-9">
                          <img
                            src="/images/user-2.png"
                            className="w-[19px] h-[19px] border border-[#ffffff] rounded-full"
                          />
                          <img
                            src="/images/user-2.png"
                            className="w-[19px] h-[19px] ml-[-9px] border border-[#ffffff] rounded-full"
                          />
                          <img
                            src="/images/user-2.png"
                            className="w-[19px] h-[19px] ml-[-9px] border border-[#ffffff] rounded-full"
                          />
                        </div>
                        <h3 className="text-sm font-medium text-gray-800 mb-3">
                          Join the community & get access to amazing deals
                        </h3>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmsMarket;
