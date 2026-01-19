 

 type CaretDownIcon = {
  fill?: string,
  width?:string,
  height?:string
 }
const CaretDownIcon = ({fill,width,height}:CaretDownIcon) => {
  return (
    <div>
      <svg
        width={width?width:"24"}
        height={height?height:"16"}
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_11476_28522)">
          <path
            d="M11.8031 15.2328C12.1427 15.2328 12.4822 15.097 12.7131 14.8389L23.2259 4.06807C23.4568 3.83717 23.5926 3.53835 23.5926 3.1988C23.5926 2.49251 23.0628 1.94922 22.3566 1.94922C22.017 1.94922 21.7047 2.08505 21.4737 2.30236L11.0696 12.9374H12.523L2.11884 2.30236C1.90153 2.08505 1.58913 1.94922 1.236 1.94922C0.529712 1.94922 0 2.49251 0 3.1988C0 3.53835 0.135824 3.83717 0.366724 4.08166L10.8795 14.8389C11.1375 15.097 11.4499 15.2328 11.8031 15.2328Z"
            fill={fill?fill:"#E8ECEF"}
          />
        </g>
        <defs>
          <clipPath id="clip0_11476_28522">
            <rect
              width="24"
              height="14.4653"
              fill={fill?fill:"white"}
              transform="translate(0 0.767578)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default CaretDownIcon;
