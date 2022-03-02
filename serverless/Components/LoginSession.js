import {signIn, signOut, useSession} from "next-auth/react";

function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    return (
        <>
            Signed in as {session.user.name} <br/>
            {/*TODO: Remove In-Line Styling - Mix Bootstrap and External Styling?*/}
            <button
                className="btn btn-secondary"
                style={{marginLeft: "10px", background: "#57BC90"}}
                onClick={() => signOut()}
            >
                Sign out
            </button>
        </>
    );
  }
  return (
      <>
          Not signed in <br/>
          {/*TODO: Remove In-Line Styling - Mix Bootstrap and External Styling?*/}
          <button
              className="btn btn-secondary"
              style={{marginLeft: "10px", background: "#57BC90"}}
              onClick={() => signIn()}
          >
              Sign in
          </button>
      </>
  );
}
export default LoginPage;
