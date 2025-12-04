import Hero from "./Hero"
import KeepInMInd from "./KeepInMInd"
import ReportedDriver from "./ReportedDriver"

function LandingPage() {
  return (
    <div className="max-w-[450px] w-10/10 h-auto">
        <Hero></Hero>

        {/* <div className="w-[300px] flex flex-col place-self-center place-items-center gap-3">
          <div className="w-56 text-center justify-start text-black text-3xl font-bold font-['ADLaM_Display']">please Keep in mind</div>
          <div className="self-stretch text-center justify-start text-black text-2xl font-normal font-['Inter']">Our database is still growing. Reports may be limited until more users contribute.</div>
        </div> */}

        <KeepInMInd></KeepInMInd>

        <div className="place-self-center mt-10 flex-col flex gap-5 w-10/10 place-items-center max-w-[500px] pl-5">
          <div className="w-[200px] text-center text-black text-3xl font-bold font-['ADLaM_Display']">Recent Reports</div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(160px,1fr))] w-full">
            <ReportedDriver></ReportedDriver>
            <ReportedDriver></ReportedDriver>
            <ReportedDriver></ReportedDriver>
            <ReportedDriver></ReportedDriver>
          </div>
        </div>
          
    </div>
  )
}

export default LandingPage
