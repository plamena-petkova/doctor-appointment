import DoctorAppointmentLanding from '@/components/ui/DoctorAppointments'
import { Metadata } from 'next'

interface Params {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = params

  if (slug === '' || slug === 'doctor-appointment') {
    return {
      title: 'Doctor Appointment',
      description: 'Book your doctor appointment easily.',
    }
  }

  return {
    title: `Page: ${slug}`,
    description: `This is the page for ${slug}`,
  }
}

export default function Page({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.join('/') || ''

  if (slug === '' || slug === 'doctor-appointment') {
    return <DoctorAppointmentLanding jotformUrl="https://form.jotform.com/jsform/251922865951062" />
  }

  return (
    <div>
      <h1>Page for slug: {slug}</h1>
    </div>
  )
}
