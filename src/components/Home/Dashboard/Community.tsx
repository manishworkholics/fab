import Button from "@/components/ui/Buttons";

const Community = () => {
  return (
    <div className="container mx-auto px-5 rounded-md">
      <div className="flex md:flex-row flex-col items-center gap-9">
        <div>
          <img src="/images/training.png" />
        </div>
        <div>
          <h2 className="text-[48px] font-semibold mb-2">FabSpace Community</h2>
          <p className="mb-9 text-[18px] md:text-[24px] text-justify">
            Whether you are a new Design Engineers, or industry expert post questions or share your
            experts with the community of electronics manufacturing.
          </p>
          <Button text={"Join Community"} width="w-[186px] px-5" />
        </div>
      </div>
    </div>
  );
};

export default Community;
