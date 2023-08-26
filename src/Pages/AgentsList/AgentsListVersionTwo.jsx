import AgentsListCardTwo from "../../components/AgentsListCard/AgentsListCardTwo"
import CommonAction from "../../components/CommonAction/CommonAction"

const AgentsListVersionTwo = () => {
  return (
     //********************  Agents list version two section end here **************************//
    //******************** ##########################  ********************************//
    <div>
         <CommonAction title={"Agents List "} subTitle={"Home> Agents List Two"} />


         <div className="max-w-container mx-auto lg:px-8 2xl:px-0 px-4 md:px-8 2xl:pt-32 lg:pt-[100px] md:pt-20 pt-16">
             


             <h1 className="text-[#3E348F] lg:text-[56px] md:text-[56px] text-[32px] font-Teko font-bold leading-[56px] text-center">Meet With Our  Skilled Agent</h1>
               <p className="text-black text-[20px] font-Lato font-normal leading-8 text-center"> Lorem Ipsum dollar Why do you choose us , We have some core services that really benefited for you</p>


               <div>
                 <AgentsListCardTwo/>
               </div>



         </div>
        
    </div>

     //********************  Agents list version two section end here **************************//
    //******************** ##########################  ********************************//
  )
}

export default AgentsListVersionTwo