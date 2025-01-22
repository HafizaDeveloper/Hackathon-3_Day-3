# FoodTuck: A Q-Commerce Marketplace

FoodTuck is a dynamic and responsive online marketplace for ordering food, featuring a user-friendly interface, seamless navigation, and robust backend integration. This project was developed as part of the **Market Blace Builder Hackathon 2025**.

---

## **Features**

- **Dynamic Food and Chef Listings**: Real-time data fetched from Sanity CMS.
- **Search and Filters**: Functional search bar and category filters for easy navigation.
- **Detailed Pages**: Dynamic routing for food and chef detail pages with Add to Cart functionality.
- **Responsive Design**: Optimized for all screen sizes and major browsers.
- **Secure API Handling**: Environment variables ensure secure backend integration.
- **Performance Optimizations**: Lazy loading, image compression, and clean codebase.

---

## **Tech Stack**

- **Frontend**: [Next.js 15](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), TypeScript.
- **Backend**: [Sanity CMS](https://www.sanity.io/).
- **Hosting**: [Vercel](https://vercel.com/).
- **Tools**: GitHub, Lighthouse, CSV-based testing reports.

---

## **Folder Structure**

```plaintext
.
├── app/
│   ├── food/                # Food listing and detail pages
│   │   ├── page.tsx         # Food listing page logic
│   │   ├── [id]/            # Food detail pages
│   │       ├── page.tsx     # Dynamic routing for food details
│   ├── chefs/               # Chefs listing and detail pages
│   │   ├── page.tsx         # Chefs listing page
│   │   ├── [id]/            # Chef detail pages
│   │       ├── page.tsx     # Dynamic routing for chef details
│   ├── components/          # Reusable components like Navbar and ProductCard
├── context/                 # Context for global state (e.g., CartContext)
├── styles/                  # Global and component-specific styles
├── public/                  # Public assets (images, icons, etc.)
├── client.ts                # Sanity client configuration
├── next.config.ts           # Next.js configuration

Setup and Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourgithubusername/FoodTuck.git
cd FoodTuck
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file: Add the following environment variables to connect with Sanity CMS:

plaintext
Copy
Edit
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
Run the development server:

bash
Copy
Edit
npm run dev
Open the app: Visit http://localhost:3000 in your browser.

Testing
Types of Tests
Functional Testing:
Validates product listing, search, filters, and detail pages.
Performance Testing:
Optimized for speed and responsiveness using Lighthouse.
Security Testing:
Ensures secure API key handling and proper input validations.
Test Reports
Testing results are documented in the Testing_Report.csv file available in the repository. Performance testing details are included in the Day 6 PDF.

Deployment
The project is deployed on Vercel.
The staging environment link will be available here once deployment is finalized.
