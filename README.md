# Syntax-Error-Club-Corner-ClubCorner
ClubCorner is an application designed to streamline the student experience by offering a centralized hub where students can view, track, and participate in events and competitions organized by different clubs. The platform also allows clubs to manage their event listings and keep their page updated. The app includes a dual-portal login system: one for students and one for clubs.

Project Structure
1. Frontend
- Built with HTML, CSS, and JavaScript for a responsive and interactive design.
- The user interface is intuitive for both students and club members, with clear navigation between sections.
2. Backend
- Built using Node.js and Express to handle user authentication and manage data.
- SQLite is used for database management to store and retrieve user credentials, club information, events, and competitions.

Pages Overview
1. Login Page
The login page serves as the entry point, featuring two distinct portals:
- Student Login:
  Students enter their Channelienrollment number and password for verification. Once authenticated, they are redirected to the home page.
- Club Login:
  Clubs use their unique Club ID and password. Upon login, they are redirected to the club management page, where they can manage their club's information, events, and competitions.

2. Home Page (Students' Portal)
Once students log in, they are taken to the home page where they can:
- Explore Clubs:
  Students can scroll horizontally through tech and cultural clubs. Clicking on a club reveals more details about it and the events it organizes.
- View Today’s Events:
  The home page displays a list of events happening today. Students can click to view event details and add them to their to-do list.
- Calendar: 
  Students can add events to a personal calendar, helping them track what they’ve signed up for. This data is stored in the backend database for future reference.\

3. Club Page (Students' View)
Each club has its own page where students can view the following:
- Logo and Club Name:
  Displays the club’s logo and name prominently.
- Brief Description:  
  Provides a short overview of the club’s purpose and mission.
- Resources:
  Lists any learning materials or resources offered by the club.
- Events and Competitions:
  The page displays all upcoming events and competitions, each with the following details:
  1. Event/Competition Name
  2. Date and Timeline (for competitions)
  3. Time
  4. Venue
  5. Brief description
  6. Link to register (Google Form or another platform)
  7. Event poster

4. Club Management Page (Clubs' Portal)
Once clubs log in, they are taken to their personalized management page, where they can:
- Edit Club Information:
  Clubs can update their description and resources anytime through an easy-to-use form.
- Add New Events/Competitions:
  Clubs can add events by uploading an event poster, entering the event name, date, time, venue, a brief description, and any relevant registration links (Google Form or similar).
- Remove Events/Competitions:
  A "Remove" button allows clubs to easily remove outdated events or competitions. By clicking on the event or competition, they can remove it from the list.
- Manage Competitions:
  Similar to event management, clubs can add and remove competitions while providing timelines, descriptions, and registration links.

How to Run the Project
Prerequisites
- A local development server (like Node.js) or a web hosting service.
- SQLite or any compatible database to store user credentials, club information, events, and competitions.

Installation Steps
1. Clone the Repository:
   ```bash
   git clone https://github.com/Sanchita-Gupta06/Syntax-Error-Club-Corner-.git
   ```
2. Install Dependencies:
   Navigate to the project folder and install the required packages:
   ```bash
npm install
   ```
3. Set Up the Database:
   Initialize the SQLite database with tables for users, clubs, events, and competitions. Configure the database connection in the `server.js` file.

4. Run the Application:
   Start the server:
   ```bash
   node server.js
   ```
   Open the project in a local development environment or deploy it on a hosting platform.

Usage Instructions
-For Students:
  Log in using your Channeli credentials to access the home page. You can browse clubs, view today's events, add them to your calendar, and register for competitions.

- For Club Members:
  Log in using your Club ID and password to access your club's management page. From here, you can edit the club’s description, add new events or competitions, and remove outdated ones.

Future Enhancements
1. Notification System:
   We plan to integrate real-time notifications for students, alerting them of event changes or new opportunities related to their to-do list.

2. Mobile App:
   A mobile version of ClubCorner is in development, aimed at providing easier access to event and competition management on the go.

# Project Title

## Flowchart
![Project Flowchart](images/Project%20Flowchart.jpg)
