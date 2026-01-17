# Salon Scheduler

This is a Next.js application for managing salon appointments. It allows stylists to manage their availability, handle appointment requests, and view their schedule.

## How to Use the Application

The application is designed from the perspective of a salon stylist or owner. Here's a walkthrough of the main features:

### 1. Authentication
- **Login**: Start at the [login page](/login) to access your dashboard. Currently, you can click "Sign In" to proceed to the dashboard.

### 2. Dashboard
- **Overview**: After logging in, you'll land on the main [dashboard](/dashboard).
- **Calendar**: This shows your scheduled appointments. Days with appointments are highlighted. Click on a date to see the appointments for that day.
- **Quick Stats**: See a summary of today's appointments, upcoming appointments for the week, and the number of pending requests.
- **New Appointment**: You can create a new appointment directly from the dashboard by clicking the "New Appointment" button.

### 3. Manage Availability
- Navigate to the [Availability](/dashboard/availability) page from the sidebar.
- Here, you can set your working hours for each day of the week.
- Use the toggle switches to enable or disable a day, and set the start and end times for your available slots.
- Click "Save Changes" to update your schedule.

### 4. Handle Appointment Requests
- Go to the [Requests](/dashboard/requests) page to see all pending appointment requests from clients.
- Each request card shows the client's name, requested service, preferred time, and any additional details they provided.
- **AI Summary**: You can click "✨ Generate Summary" to get a concise, AI-powered summary of the client's request, which can help you make a quicker decision.
- **Approve/Decline**: Use the "Approve" and "Decline" buttons to manage the request.

### 5. Create a New Appointment Request
- You can manually create an appointment by navigating to the [New Request](/dashboard/new-request) page.
- Fill in the form with the service, preferred date and time, and any other details.
- Click "Send Request" to add it to the system.

### 6. Manage Your Profile
- The [Profile](/dashboard/profile) page allows you to view and update your personal information, such as your name and profile photo.
- You can also log out from this page.
