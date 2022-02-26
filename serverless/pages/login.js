import Link from 'next/link';
import Link from 'next/link'

function LoginPage() {
  return (
    <>
      <Link href={'/api/auth/signin'}>
        <h1>Login with Google</h1>
      </Link>
    </>
  );
}

export default LoginPage;
