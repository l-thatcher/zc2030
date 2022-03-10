
import ProgressB from './ProgressB'

function BuyCard(props) {



    return(
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <div
            className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-black border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               bg-white rounded-xl transform
            transition-all hover:-translate-y-2 duration-300 shadow-lg
             hover:shadow-2xl hover:font-bold">

            <h2 className="font-bold text-dark mb-4 text-[42px] border-b border-[#F2F2F2] pb-3 mb-3 ">
                £30
                <span className="text-base text-body-color font-medium">
                  / tco2e
                  </span>
            </h2>

            <div className="mb-7">
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                    Total supply
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                    Available Supply
                </p>
                <p className="text-base font-medium text-body-color leading-loose mb-1">
                    How many tonnes of carbon would you like to buy:
                </p>


                <div>
                    <div>
                        <ProgressB/>
                    </div>
                </div>



            </div>
            <a href="javascript:void(0)"
               className=" w-full block text-base font-semibold text-white bg-green-400 p-4 hover:bg-opacity-90
                 border-pill rounded-md text-center transition "
            >
                Buy carbon
            </a>
            <div>

                <span className="absolute right-4 top-4 z-[-1]">

                  </span>
            </div>
        </div>
    </div>)

}

export default BuyCard;