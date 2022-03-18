import { signIn, signOut, useSession } from "next-auth/react";
import { IoMdWallet } from "react-icons/io";

function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className='flex '>
        {/*{session.user.name} <br/>*/}

          <button className=" mt-4 -ml-1 flex items-center text-sm font-medium  mr-6 text-white bg-blue-500 hover:bg-blue-800  font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2">
              <IoMdWallet className=''/>

              <span className="ml-1">Wallet</span>
          </button>

          <button className=" mt-4 -ml-1 flex items-center text-sm font-medium text-white bg-green-400 hover:bg-green-800  font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 "
                  onClick={() => signOut()}>

              <span className="ml-1">Sign out</span>
          </button>


      </div>
    );
  }
  return (
    <>
      <br />
      {/*TODO: Remove In-Line Styling - Mix Bootstrap and External Styling?*/}
      <button
        className=" mt-4 -ml-1 flex items-center text-sm font-medium text-white bg-green-400 hover:bg-green-800  font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2"

        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
export default LoginPage;
