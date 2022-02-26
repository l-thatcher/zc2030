import Link from 'next/link'

export default function Signin(){

    return(
        <>
         <Link href={'/api/auth/signin'}>
            <a>
                sign up
            </a>
         </Link>
        </>

    )
}