'use client'
import { Router } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

type Props = {
  jotformUrl: string // example: https://form.jotform.com/jsform/1234567890
}

const DoctorAppointmentLanding: React.FC<Props> = ({ jotformUrl }) => {
  const router = useRouter()

  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!formRef.current) return

    // Clear previous form if any
    formRef.current.innerHTML = ''

    // Create script tag
    const script = document.createElement('script')
    script.src = jotformUrl // This should be the JS embed URL from JotForm
    script.async = true

    formRef.current.appendChild(script)

    // Cleanup script if component unmounts or url changes
    return () => {
      if (formRef.current) formRef.current.innerHTML = ''
    }
  }, [jotformUrl])

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-800 font-sans px-4 py-8 flex flex-col items-center overflow-x-hidden">
        <div className="bg-blue-600 text-white w-full max-w-xl rounded-lg p-8 text-center mb-6">
          <h1 className="text-3xl font-semibold m-0">Book Your Doctor Appointment</h1>
        </div>

        <p className="max-w-xl text-lg leading-relaxed mb-6 text-center">
          Please fill out the form below to schedule your appointment with our trusted medical
          professionals.
        </p>

        <div ref={formRef} className="max-w-xl w-full rounded-lg shadow-lg overflow-hidden" />
      </div>
      <div className="flex justify-center m-3">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          onClick={() => window.location.reload()}
        >
          Reload the page
        </button>
      </div>
    </>
  )
}

export default DoctorAppointmentLanding
