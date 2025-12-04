import Btn from "./Btn"
import Header from "./Header"


function Hero() {
  return (
    <>
       <div className="h-[100vh] w-[100%] relative">
        <div className="h-[50vh]"></div>

        {/* <div className="w-[100%] h-[50vh] bg-amber-800"> */}
            <img src="hero_image.svg" alt="" className="h-[50vh] w-[100%] absolute -top-4 right-0 -mr-0" />
        {/* </div> */}

        <div className="flex flex-col gap-5 place-self-center mt-[0vh] place-items-center">
          <div className="text-center text-black text-[36px] font-normal font-['ADLaM_Display'] leading-10 tracking-widest w-[50%] text-wrap">Report Unsafe Uber Drivers in Your Area</div>
          <div className="flex flex-row gap-5 ">
            <Btn text="Report" bgColor="bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#C81563_0%,_#980F4B_100%)]"></Btn>
            <Btn text="Cheak driver" bgColor="bg-black"></Btn>
          </div>

          <div className="w-72 h-22 text-center justify-start text-black text-xl font-normal font-['Inter'] tracking-wide bg-white/20 rounded-tl-[30px] rounded-br-[30px] backdrop-blur-[10px]">Help create a safer ride experience by sharing and checking driver reports</div>
        </div>

        <img src="left_corner_img.svg" alt="" className="-bottom-[38%] left-0 absolute -z-1"/>
       </div>
    </>
  )
}

export default Hero

