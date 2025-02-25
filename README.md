# Scholar Plus

**Scholar Plus** is an open-source, all-in-one education management and engagement platform designed to streamline academic reporting, enhance communication among schools, teachers, parents, and students, and manage extracurricular activities. With a mobile-first approach and a clean, minimalist design accentuated in forest green (#OB6623), Scholar Plus provides a unified solution—from admissions and academic performance tracking to health monitoring and campus facility access via QR codes.

---

## Table of Contents

- [Overview](#overview)
- [Enhanced Features](#enhanced-features)
  - [Student Profiles & Timeline](#student-profiles--timeline)
  - [Dynamic Home Dashboard](#dynamic-home-dashboard)
  - [Interactive Dashboard & School Supplies](#interactive-dashboard--school-supplies)
  - [Admin Panel & Multi-Role Authentication](#admin-panel--multi-role-authentication)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

Scholar Plus bridges the gap between educational institutions and their stakeholders by consolidating fragmented communication channels and administrative processes. The platform now includes:

- **Detailed Digital Student Profiles:** With comprehensive personal, academic, and emergency details.
- **Enhanced Timeline & History:** A visual, chronologically ordered timeline of student milestones—from admissions and academic progress to medical issues, counseling sessions, awards, leave approvals, and teacher recommendations.
- **Dynamic Home Dashboard:** Featuring a dual-tab interface for school admissions and extracurricular activities, alongside recent school albums and personalized “My Child” photo sections.
- **Interactive Dashboard:** Showcasing real-time analytics, advanced filtering, and e-commerce features for school supplies.
- **Robust Admin Panel:** With multi-role authentication (students/parents, schools/activity providers, government) and complete CRUD operations for content, events, and profiles.
- **QR Code Integration:** For seamless campus facility access and event entry passes.

---

## Enhanced Features

### Student Profiles & Timeline
![image](https://github.com/user-attachments/assets/930b3168-27af-4343-8cfc-22e41b006628)
![image](https://github.com/user-attachments/assets/e8ff9141-36f4-4969-bc77-c93a3ccde184)
![image](https://github.com/user-attachments/assets/a41d2c0d-8fab-4599-9b69-8524577c3eff)
![image](https://github.com/user-attachments/assets/f053969d-36f9-4e25-9165-72cc11124f3b)

- **Personal & Academic Details:**
  - Capture essentials: name, age, blood group, birth date, Aadhar number, and class roll number.
  - Upload and manage profile photos (with support for file uploads and potential image cropping/resizing).
  - Display class information, grade level, section, and academic year.

- **Performance Analytics:**
  - **Subject-Wise Line Graph:** Visualize performance trends across subjects (e.g., English, Hindi, Math, MIL, Geography, History) with interactive tooltips and legends.

- **Visual Timeline & History Menu:**
  - **Chronological Events:** Track admissions, academic milestones, medical issues, counseling sessions, awards, teacher flags/recommendations, and leave approvals.
  - **Icons & Badges:**  
    - School/Academic events – School icon  
    - Medical issues – Heart Pulse icon  
    - Counseling sessions – Brain icon  
    - Awards – Award icon  
    - Teacher recommendations – Flag icon
  - **Event Details:** Title, date, description, category badge, and support for file attachments (documents, images).
  - **Filtering Options:** Easily filter events by type.

---

### Dynamic Home Dashboard

- **Dual-Tab Interface:**
  - **Schools for Admission:**
   ![image](https://github.com/user-attachments/assets/f8942299-2a04-4846-bd4e-ccf9b8752c1d)
 
    - Lists available schools with filters for age, class, and board types (CBSE, ISSC, State Board).
    - Displays tags indicating available class ranges (from playschools/nursery to higher standards) and “buy” options for related supplies.
  - **Extracurricular Activities & Competitions:**
    ![image](https://github.com/user-attachments/assets/0a829c90-d5f6-4ca6-bd1e-423b39efed74)

    - Showcases activities (dance, karate, pottery, etc.) with search and filtering options based on age groups, categories, and organizers.   


- **Additional Home Sections:**
  - **Recent Albums:**  
    - Positioned just before quick actions; displays recent school albums with a “View All” button for event-based photo galleries.
  - **My Child Tab:**  
    - Offers a personalized view of photos tagged for your child.

---

### Interactive Dashboard & School Supplies
![image](https://github.com/user-attachments/assets/ffd70d68-6716-4555-a567-039610aa00cc)
![image](https://github.com/user-attachments/assets/c1253b3e-1af7-47bb-9806-f64fa7153699)
![image](https://github.com/user-attachments/assets/71f5afb6-6ca4-4245-ad97-4f1bf568ddac)

- **Overview Cards:**  
  - Display key metrics in a two-card-per-row layout for Schools, Activities, and School Supplies.
  - Each card includes intuitive icons (all styled in forest green #OB6623), interactive hover effects, and click actions.

- **School Supplies Module:**
-  ![image](https://github.com/user-attachments/assets/3b6452ec-8bbb-4402-a74a-754726b9729d)
  - **Expanded Categories:**  
    - Backpacks & Bags  
    - Stationery & School Supplies  
    - Technology & Gadgets  
    - Books & Learning Materials  
    - Uniforms & Clothing  
    - Lunch Boxes & Water Bottles  
    - Art & Craft Supplies  
    - Sports & Activity Gear  
    - Organizers & Planners  
    - Personal Care & Hygiene Products
  - **Enhanced Interactions:**  
    - Smooth animations, hover scaling, image zoom, and real-time search & filtering options.
  - **Filtering Options:**  
    - Filter by age, category, and more to easily find top-selling products or recent purchases.

- **Analytics & Filtering:**  
  - Advanced visualizations (line, bar, and pie charts) for user growth, event distribution, and activity types.
  - Detailed filtering options across all modules.

---

### Admin Panel & Multi-Role Authentication

- **Admin Dashboard:**
  - Overview statistics: Total students, active schools, upcoming events, etc.
  - Dedicated management tabs for content approval, school listings, activities, and analytics.
  - Complete CRUD operations for managing student profiles, events, and communications.
  - Refactored into smaller, manageable components for maintainability.

- **Multi-Role Authentication:**  
  - Separate login and dashboard access for students/parents, schools/activity providers, and government agencies.
  - Secure OAuth/JWT-based authentication and role-based access control.

- **QR Code Integration:**  
  - Auto-generate unique QR codes for each student, used for accessing campus facilities (canteen, library, hostels) and event entry passes.

- **Visual Consistency:**  
  - All card titles, page headers, and icons utilize forest green (#OB6623) for a cohesive look and feel.

---

## Tech Stack

- **Frontend:**  
  - Cross-platform mobile: React Native or Flutter  
  - Web Dashboard: ReactJS, Tailwind CSS, shadcn/ui

- **Backend:**  
  - Node.js, Express  
  - Supabase (PostgreSQL) for real-time data storage and management

- **APIs & Integrations:**  
  - RESTful API endpoints  
  - UPI payment gateway integration  
  - GitHub integration for code versioning

- **Security:**  
  - OAuth/JWT for authentication  
  - Role-based access control and data encryption

---

## Installation

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn package manager
- Supabase account (for backend services)
- UPI gateway API keys (for payment features)
- GitHub account (for code integration)

### Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/TravelXML/scholar-pulse-ce967982.git
   cd scholar-plus
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory with the following variables:

   ```env
   PORT=3000
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   UPI_API_KEY=your_upi_api_key
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Application:**

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Development Mode (with hot reloading):**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## Usage

- **Access the Web Dashboard:**  
  Visit [http://localhost:3000](http://localhost:3000) in your browser.

- **Mobile App:**  
  Install the mobile app (available on iOS and Android) to access Scholar Plus on the go.

- **Admin Panel:**  
  Use the admin dashboard to manage student profiles, configure integrations, and monitor system performance.

- **API Documentation:**  
  Detailed API documentation can be found in the `/docs` folder.

---

## Project Structure

```
scholar-plus/
├── src/
│   ├── components/
│   │   ├── StudentProfile/
│   │   ├── Dashboard/
│   │   ├── AdminPanel/
│   │   ├── HomePage/
│   │   └── Common/         // Shared UI components (cards, buttons, filters)
│   ├── services/           // API and Supabase integration
│   ├── assets/             // Images, icons, and fonts (all styled in forest green #OB6623)
│   └── styles/             // Global and component-specific styles
├── public/
│   └── index.html
├── .env
├── package.json
└── README.md
```

---

## Contributing

We welcome contributions to Scholar Plus! To contribute:

1. **Fork the Repository**

2. **Create a Feature Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Description of your feature"
   ```

4. **Push to Your Branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Submit a Pull Request:**
   - Follow our coding standards and guidelines.
   - Include detailed commit messages and update documentation as needed.
   - See our [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Contact

For support or inquiries, please contact:

- **Email:** astartupcto@gmail.com
- **GitHub:** [scholar-plus](https://github.com/TravelXML/scholar-pulse-ce967982)

---

Thank you for exploring Scholar Plus! We look forward to your contributions and feedback as we work together to revolutionize education management.

---

Feel free to adjust or expand any section as the project evolves.
