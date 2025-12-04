import React from 'react'

function KeepInMInd() {
  return (
    <>
    <div className='w-10/10 flex flex-col pl-3'>

        <div className="w-5/10  text-black text-3xl font-normal font-['ADLaM_Display'] mt-33 self-end">please Keep in mind</div>
        <div className=' bg-[url("/bro.svg")] bg-cover bg-center w-10/10 h-[400px] mt-5'>
            <div className='w-60 h-[95%] bg-zinc-600/60 rounded-tr-[20px] rounded-bl-[20px] backdrop-blur-[2px] text-center justify-start text-white text-xl font-medium font-["Inter"]'>
                <div className='w-50 place-self-center pt-5'>Our database is still growing. Reports may be limited until more users contribute.</div>
                <img src="/sittingCharacter.svg" alt="" className='absolute w-[101px]  h-auto -bottom-22 left-0.5'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default KeepInMInd
