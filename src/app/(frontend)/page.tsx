import DoctorAppointmentLanding from '@/components/ui/DoctorAppointments'
import { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Doctor Appointment',
    description: 'Book your doctor appointment easily.',
  }
}

export default function Page() {
  return <DoctorAppointmentLanding jotformUrl="https://form.jotform.com/jsform/251922865951062" />
}
