import project1Img1 from '../assets/projects/1.1.png';
import project1Img2 from '../assets/projects/1.2.png';
import project1Img3 from '../assets/projects/1.3.png';
import project2Img1 from '../assets/projects/2.1.png';
import project2Img2 from '../assets/projects/2.2.png';
import project2Img3 from '../assets/projects/2.3.png';
import project3Img1 from '../assets/projects/3.1.png';
import project3Img2 from '../assets/projects/3.2.png';
import project3Img3 from '../assets/projects/3.3.png';

export const projectsData = [
  {
    id: "sharedspoon",
    name: "SharedSpoon - Food Sharing Platform",
    featured: true,
    category: "Full Stack",
    images: [project1Img1, project1Img2, project1Img3],
    description: "A full-stack web application designed to connect individuals with surplus food to those in need, aiming to reduce food waste.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Firebase", "JWT", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://a11-food-sharing.web.app/",
    repoLink: "https://github.com/siam-sk/a11-food-sharing-client",
    keyFeatures: [
      "Secure user authentication with Firebase and JWT.",
      "Full CRUD functionality for managing food listings.",
      "Interactive UI with sorting and searching capabilities.",
      "Protected routes for authenticated users.",
      "Responsive design for all screen sizes."
    ],
    challenges: "The primary challenge was building a secure, full-stack application with JWT-based API communication for authenticated users. Implementing CRUD operations for food listings and managing user-specific requests required careful state management and secure backend logic.",
    futurePlans: "Future plans include adding real-time notifications for new food listings in a user's area, creating a dashboard for organizational donors, and enhancing the search with map-based filtering."
  },
  {
    id: "talentsphere",
    name: "TalentSphere - Freelance Marketplace",
    featured: true,
    category: "Full Stack",
    images: [project2Img1, project2Img2, project2Img3],
    description: "A full-stack freelance marketplace connecting clients with skilled freelancers, featuring task posting, a bidding system, and user dashboards.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://a10-freelance-marketpace.web.app/",
    repoLink: "https://github.com/siam-sk/a10-freelance-marketplace-client",
    keyFeatures: [
      "Comprehensive user dashboard for clients and freelancers.",
      "Advanced bidding system for tasks.",
      "Full task management (post, view, update, delete).",
      "Dynamic page titles and dark/light theme support.",
      "Secure user authentication and profile management."
    ],
    challenges: "Key challenges included designing a comprehensive user dashboard with multiple states (client vs. freelancer), implementing a real-time bidding system, and ensuring secure task management with appropriate user permissions.",
    futurePlans: "Future enhancements could include a direct messaging system, integration of a payment gateway for secure transactions, and a reputation system with user reviews and ratings."
  },
  {
    id: "oahms",
    name: "OAHMS - Old Age Home Management System",
    featured: true,
    category: "PHP & MySQL",
    images: [project3Img1, project3Img2, project3Img3],
    description: "A full-stack web application that allows users to manage old age home operations, including resident management, staff scheduling, and resource allocation.",
    tags: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    liveLink: "#",
    repoLink: "https://github.com/saleheen110282/Old-Age-Home-Management-System-OAHMS-",
    keyFeatures: [
      "Resident and staff management modules.",
      "Resource allocation and scheduling features.",
      "Integrated payment gateway (SSLCommerz).",
      "User-friendly interface for administrative tasks."
    ],
    challenges: "Adding a payment gateway for the first time was a significant challenge. I had to learn SSLCommerz integration and ensure secure transactions for paid services.",
    futurePlans: "Future plans include adding a real-time chat feature for residents and staff, implementing a mobile-friendly design, and enhancing the reporting features for better management insights."
  }
];
