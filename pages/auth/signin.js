import React from 'react';
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

// this is running on the browser - the client
function signIn({ providers }) {
    return (
        <>
        {Object.values(providers).map((provider) => (
            <div key={provider.name}>
                <button onClick={() => SignIntoProvider(provider.id)}>
                    Sign in with {provider.name}
                </button>
            </div>
        ))}            
        </>
    )
}

// SERVER SIDE RENDERING
// the server

// adding special function 
// used to help replace the signin page
export async function getServerSideProps(){
    // get our providers from [...nextauth].js --> thru getProviders()
    // gets us back the providers we initailized everything for
    const providers = await getProviders();
    // back it back to the client side
    return {
        props: {
            providers
        }
    }
};

export default signIn;

