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
│   ├── cart/                # Cart page
│   │   ├── page.tsx         # Displays items added to the cart
│   ├── components/          # Reusable components like Navbar and ProductCard
├── context/                 # Context for global state (e.g., CartContext)
├── styles/                  # Global and component-specific styles
├── public/                  # Public assets (images, icons, etc.)
├── client.ts                # Sanity client configuration
├── next.config.ts           # Next.js configuration

---

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourgithubusername/FoodTuck.git
   cd FoodTuck
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file**:  
   Add the following environment variables to connect with Sanity CMS:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the app**:  
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Testing

1. **Types of Tests**:
   - **Functional Testing**:  
     Validates product listing, search, filters, and detail pages.
   - **Performance Testing**:  
     Optimized for speed and responsiveness using Lighthouse.
   - **Security Testing**:  
     Ensures secure API key handling and proper input validations.

2. **Test Reports**:  
   - Testing results are documented in the `Testing_Report.csv` file available in the repository.  

---

## Deployment

1. The project is deployed on **Vercel**.  
2. The staging environment link will be available here once deployment is finalized.

---

## Contributors

- **Hafiza Mahnoor M.Ayub** ([GitHub Profile](https://github.com/HafizaDeveloper))
