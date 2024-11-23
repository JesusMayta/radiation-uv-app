import { Footer, Header } from "@/components";

export default function RadiationAppLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div className="flex flex-col">
            <Header />
            <section className="flex-1">
                {children}
            </section>
            <Footer />
        </div>
    );
};