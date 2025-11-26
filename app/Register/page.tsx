import Menu from "@/app/components/organisms/Menu";
import HeroLeft from "@/app/components/molecules/HeroLeft";
import RegisterForm from "@/app/components/molecules/RegisterForm";

export default function Register() {
  return (
    <main className="relative min-h-screen bg-[#0F1535] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_rgba(15,21,53,0))]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="px-4 sm:px-8 pt-6">
          <Menu />
        </div>

        <section className="flex flex-col md:flex-row flex-1 gap-8 px-4 sm:px-8 pb-12">
          <div className="order-1 md:order-2 flex-1 flex items-center justify-center py-10">
            <RegisterForm />
          </div>

          <div className="order-2 md:order-1 relative w-full md:w-1/2 flex-1">
            <HeroLeft />
          </div>
        </section>
      </div>
    </main>
  );
}
