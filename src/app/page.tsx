import Image from 'next/image'
import Hero from "@/components/Hero";
import Header from "@/components/Header";

function Home() {
    const components: any[] = [Header, Hero]
    return (
        <main className="h-screen snap-y snap snap-mandatory overflow-x-scroll scrollbar
            overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-gray-400/80"
        >
            {components.map((Component, index) => <Component key={index} />)}
        </main>
    );
}

export default Home;