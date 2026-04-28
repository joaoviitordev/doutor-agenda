import DashboardPreview from "./components/DashboardPreview";
import AppointmentsPreview from "./components/AppointmentsPreview";
import Hero from "./components/Hero";
import TopNavBar from "./components/TopNavBar";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="pt-16">
        <Hero />
        <DashboardPreview />
        <AppointmentsPreview />
      </main>
    </>
  );
}
