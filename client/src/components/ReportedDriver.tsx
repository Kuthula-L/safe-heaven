import Btn from "./Btn"

interface probs{
  description:string
}
function ReportedDriver({description}:probs) {
  return (
    <div className="w-[90%] h-auto relative rounded-lg outline-1 outline-offset-[-1px] outline-neutral-500">
        <div className="w-8/10 mt-5 h-36  bg-neutral-50 rounded-lg flex justify-center place-self-center place-items-center gap-[10px]">
            {/* <div className="-ml-5 w-[70%] h-24 bg-zinc-200" ></div> */}
            {/* <div className="w-auto h-[15px] rotate-90 perspective-origin text-black text-xs font-light font-['Inter'] bg-black">Photo missing</div> */}
            {/* <div className=" w-[20px] h-[30px] z-10 -rotate-90 translate-x-[10px] origin-left text-black text-xs font-light font-['Inter'] bg-black">Photo missing</div> */}
            {/* <div className="absolute right-7 top-[35px] -rotate-90 origin-top-right text-black text-xs font-light font-['Inter'] ">Photo missing</div> */}
        </div>
        {/* <div className="w-auto  inline-flex flex-col justify-start items-start gap-0 pl-3 pr-1">
            <div className="self-stretch justify-start"><span className="text-black text-xs font-bold font-['Inter']">Driver:</span><span className="text-black text-xs font-black font-['Inter']"> </span><span className="text-black text-xs font-light font-['Inter']">John D</span><span className="text-black text-sm font-normal font-['Inter']">.</span></div>
            <div className="self-stretch justify-start"><span className="text-black text-xs font-bold font-['Inter']">License:</span><span className="text-black text-xs font-black font-['Inter']">  </span><span className="text-black text-xs font-light font-['Inter']">GP7686</span></div>
            <div className="self-stretch justify-start"><span className="text-black text-xs font-bold font-['Inter']">Date:</span><span className="text-black text-xs font-normal font-['Inter']"> </span><span className="text-black text-xs font-light font-['Inter']">Sept 15, 2025</span></div>
            <div className="self-stretch justify-start"><span className="text-black text-xs font-bold font-['Inter']">Report: </span><span className="text-black text-xs font-light font-['Inter']">“Driver was speeding and using the phone while driving.”</span></div>
        </div> */}

        <div className="p-3 place-self-center text-center">
          "{description}Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id at ad beatae sunt rerum aut qui dicta aliquid veritatis "
          
        </div>

          <div className="place-self-center -mb-3 z-10"><Btn text="view more" bgColor="bg-black"></Btn></div>
    </div>

  )
}

export default ReportedDriver
