
interface BtnProps {
  bgColor?: string;
  text?: string;
}

function Btn({bgColor, text}: BtnProps) {
  return (
    // <button className="w-190 h-57">btn</button>
    // w-40 h-12
    <button className={` ${bgColor} rounded-[28.50px] text-[16px] text-white justify-self-end text-center justify-start text-xl font-medium shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-3 pl-6 pr-6`} > {text}</button>
  )
}

export default Btn
