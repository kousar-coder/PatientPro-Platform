# PatientPro Platform

PatientPro is a healthcare management platform designed to simplify patient management, appointment scheduling, and doctor-patient communication. The platform leverages modern tools like Appwrite for backend services, Twilio for communication, and Sentry for error tracking and monitoring.

## Features

- **User Authentication:** Secure login and registration for patients and doctors using Appwrite.
- **Appointment Scheduling:** Book and manage medical appointments with doctors.
- **Doctor Profiles:** Detailed profiles of doctors, including specialties, schedules, and reviews.
- **Medical Records:** Patients can access their medical history and reports.
- **Real-Time Notifications:** Twilio-powered SMS/email notifications for appointment reminders and updates.
- **Error Tracking:** Monitor and fix application errors in real time using Sentry.
- **Admin Dashboard:** Admin users can manage users, appointments, and doctor schedules.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Appwrite
- **Database:** Appwrite’s built-in database
- **Authentication:** Appwrite's authentication system
- **Communication Services:** Twilio API for SMS and email notifications
- **Error Monitoring:** Sentry
- **Other Tools:** TypeScript (if enabled), ESLint, PostCSS

## Installation

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- Appwrite server (self-hosted or cloud)
- Twilio account and API credentials
- Sentry account and DSN for error tracking

### Steps

1. Clone the repository:
   
   git clone https://github.com/kousar-coder/PatientPro-Platform.git
   cd PatientPro-Platform
   

2. Install the dependencies:
   
   npm install
   

3. Configure Appwrite:
   - Set up an Appwrite server (if not already done).
   - Create a new project in Appwrite.
   - Add a database for storing user and appointment data.
   - Retrieve your Appwrite API endpoint and project ID, and update the environment variables in `.env.local`.

4. Configure Twilio:
   - Create a Twilio account and get your API credentials (Account SID, Auth Token, and Phone Number).
   - Update the environment variables in `.env.local`:
     
     TWILIO_ACCOUNT_SID=your_account_sid
     TWILIO_AUTH_TOKEN=your_auth_token
     TWILIO_PHONE_NUMBER=your_phone_number
     

5. Configure Sentry:
   - Create a Sentry account and set up a new project.
   - Retrieve your **DSN (Data Source Name)** from the project settings.
   - Add the DSN to your `.env.local` file:
     
     SENTRY_DSN=your_sentry_dsn
     
   - Integrate Sentry in your Next.js app:
     - Install the Sentry SDK:
       
       npm install @sentry/nextjs
       
     - Run the Sentry wizard to set up your project:
       
       npx @sentry/wizard
       

6. Run the development server:
   
   npm run dev
   

   Your application will be running at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Add the following variables to your `.env.local` file:

APPWRITE_ENDPOINT=https://appwrite.yourdomain.com/v1
APPWRITE_PROJECT_ID=your_project_id
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_phone_number
SENTRY_DSN=your_sentry_dsn


## Development

- Use `npm run dev` to run the development server.
- Use `npm run build` to build the application for production.
- Use `npm run lint` to run the ESLint checks.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
