import DashboardPreview from "./components/DashboardPreview";
import AppointmentsPreview from "./components/AppointmentsPreview";
import Hero from "./components/Hero";
import TopNavBar from "./components/TopNavBar";
import DoctorsPreview from "./components/DoctorsPreview";
import PatientsPreview from "./components/PatientsPreview";
import StatsBentoGrid from "./components/StatsBentoGrid";
import CoreFeatures from "./components/CoreFeatures";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="pt-16">
        <Hero />
        <DashboardPreview />
        <AppointmentsPreview />
        <DoctorsPreview />
        <PatientsPreview />
        <StatsBentoGrid />
        <CoreFeatures />  
      </main>
    </>
  );
}
