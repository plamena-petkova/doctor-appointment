import { CollectionConfig } from "payload";


const Appointments: CollectionConfig = {
  slug: 'appointments',
  fields: [
    { name: 'patientName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'appointmentDate', type: 'date', required: true },
  ],
};

export default Appointments;