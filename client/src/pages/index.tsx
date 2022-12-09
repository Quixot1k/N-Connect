import Head from "next/head";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import HomePageCarousel from "../components/HomePageCarousel";
import LoginForm from "../components/LoginForm";

export default function Home() {
    return (
        <div className="relative">
            <Head>
                <title>Login to N-Connect</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="absolute ml-10 mt-8">
                <h2 className="text-4xl font-bold tracking-tight text-red-600">
                    N-Connect
                </h2>
                <p className="mt-2 text-center text-md text-gray-600">
                    A search-and-chat platform for nintendo switch players
                </p>
            </div>

            <div className="w-screen h-screen">
                <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-1/3 mx-20">
                        <HomePageCarousel />
                    </div>
                    <div className="flex flex-col w-1/3 rounded-lg space-y-8 mx-20 items-center bg-slate-200">
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
        </div>
    );
}
export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    return {
        props: {}, // Will be passed to the page component as props
    };
};
