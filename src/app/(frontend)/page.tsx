import DoctorAppointmentLanding from '@/components/ui/DoctorAppointments'

type PageProps = {
  params: {
    slug?: string[]
  }
}

export function generateMetadata({ params }: PageProps) {
  const slug = params.slug?.join('/') || ''

  // Return static or simple slug-based metadata, no await here
  if (slug === '' || slug === 'doctor-appointment') {
    return {
      title: 'Doctor Appointment',
      description: 'Book your doctor appointment easily.',
    }
  }

  // Default metadata for other slugs
  return {
    title: `Page: ${slug}`,
    description: `This is the page for ${slug}`,
  }
}

export default function PageTemplate({ params }: PageProps) {
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
