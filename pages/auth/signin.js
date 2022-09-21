import React from 'react';
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from '../../components/Header';

// this is running on the browser - the client
function signIn({ providers }) {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2  px-14 text-center">
                <img className="w-80" src="https://links.papareact.com/ocw" alt="Instagram Icon" />
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button 
                                onClick={() => SignIntoProvider(provider.id)}
                                className="p-3 bg-blue-500 rounded-lg text-white"
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}    
                </div>   
            </div>
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

