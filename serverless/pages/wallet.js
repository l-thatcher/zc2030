import ShowWallet from "../Components/User/ShowWallet";
import Image from "@material-tailwind/react/Image";

export default function Wallet(props) {
  const logo = "/cz2030_logo.png";
  return (
    <div className='pt-10'>
        <div className='h-screen'>
            <div className="absolute h-full bg-green-300 ">
                <Image
                    src="/background.jpg"
                    alt="Profile picture"
                    raised
                    rounded
                />
            </div>

            <div className='flex h-5/6'>
                <div className="m-auto bg-white z-20 p-12 border rounded-xl justify-between">
                    <section className="relative py-16 bg-gray-100">
                        <div className="container max-w-7xl px-4 mx-auto">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                                <div className="px-6">
                                    <ShowWallet />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
  );
}
