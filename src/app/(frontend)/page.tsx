import DoctorAppointmentLanding from '@/components/ui/DoctorAppointments'
import { useParams } from 'next/navigation' // or get params server-side if using server components

type Props = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata() {
  // your existing metadata generator
}

export default function PageTemplate({ params }: Props) {
  // If slug is undefined or empty, that means root "/"
  const slug = params.slug?.join('/') || ''

  if (slug === '' || slug === 'doctor-appointment') {
    // Show doctor appointment landing page for root or doctor-appointment slug
    return <DoctorAppointmentLanding jotformUrl="https://form.jotform.com/jsform/251922865951062" />
  }

  // Otherwise, your normal dynamic page rendering logic here
  // e.g. fetch page data from Payload and render content
  return (
    <div>
      {/* Your normal page rendering */}
      <h1>Page for slug: {slug}</h1>
    </div>
  )
}
