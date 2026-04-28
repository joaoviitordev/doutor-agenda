import DashboardPreview from "./components/DashboardPreview";
import AppointmentsPreview from "./components/AppointmentsPreview";
import Hero from "./components/Hero";
import TopNavBar from "./components/TopNavBar";
import DoctorsPreview from "./components/DoctorsPreview";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="pt-16">
        <Hero />
        <DashboardPreview />
        <AppointmentsPreview />
        <DoctorsPreview />
      </main>
    </>
  );
}
