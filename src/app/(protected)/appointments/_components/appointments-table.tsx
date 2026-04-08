"use client";

import { appointmentsTable, doctorsTable, patientsTable } from "@/db/schema";
import { DataTable } from "@/components/ui/data-table";
import { getAppointmentsTableColumns } from "./table-columns";

type AppointmentWithRelations = typeof appointmentsTable.$inferSelect & {
  patient: {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    sex: "male" | "female";
  };
  doctor: {
    id: string;
    name: string;
    specialty: string;
  };
};

interface AppointmentsTableProps {
  data: AppointmentWithRelations[];
  patients: (typeof patientsTable.$inferSelect)[];
  doctors: (typeof doctorsTable.$inferSelect)[];
}

export function AppointmentsTable({
  data,
  patients,
  doctors,
}: AppointmentsTableProps) {
  const columns = getAppointmentsTableColumns(patients, doctors);

  return <DataTable data={data} columns={columns} />;
}
