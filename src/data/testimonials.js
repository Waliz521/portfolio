export const upworkProfileUrl = "https://www.upwork.com/freelancers/~015f3845ea728cd7f0?mp_source=share";

export const upworkStats = {
  totalEarnings: "$2K+",
  totalJobs: "2",
  totalHours: "283",
  jobSuccess: "100%",
  badges: ["Top Rated", "100% Job Success"],
};

export const testimonials = [
  {
    id: "oil-spill-mapping",
    title: "Oil Spill Mapping & GIS Data Collection - Sudan & South Sudan",
    description: "Geospatial research and mapping project analyzing oil spill incidents, infrastructure development, and environmental impacts in Sudan and South Sudan.",
    rating: 5.0,
    dateRange: "Mar 11, 2025 - Dec 23, 2025",
    amount: "$2,264.00",
    paymentType: "hourly",
    hourlyRate: "$8.00 /hr",
    totalHours: "283 hours",
    testimonial: "", // Add client testimonial if available
    platform: "Upwork",
    clientName: "Dr. John Petterson",
    clientLocation: "California, USA",
    // Detailed content for the project detail page
    detailedDescription: "Conducted extensive geospatial research and analysis for a comprehensive dossier on oil infrastructure and environmental impacts in Sudan and South Sudan. Contributed three critical sections (Sections 8, 9, and 10) to a major research document analyzing the relationship between oil development, environmental degradation, and regional conflicts. The work involved mapping oil spill incidents, documenting oil infrastructure development timelines, analyzing health impacts of oil pollution, and creating detailed geographic visualizations of affected regions including Darfur, Lake Nasser, and various river basins.",
    technologies: [
      "GIS Software (QGIS/ArcGIS)",
      "Remote Sensing & Satellite Imagery Analysis",
      "SAR (Synthetic Aperture Radar) Data Processing",
      "Automated Oil Spill Detection Algorithms",
      "Geospatial Data Collection & Validation",
      "Map Design & Cartography",
      "Geodatabase Management",
      "Python (Geospatial Analysis)",
      "Google Earth Engine"
    ],
    challenges: "The project required analyzing complex geospatial data across multiple regions, dealing with limited data availability in conflict zones, processing large volumes of satellite imagery for oil spill detection, correlating infrastructure development with environmental impacts, and creating comprehensive maps that effectively communicate complex relationships between oil development, environmental degradation, and regional conflicts.",
    solutions: "Developed a systematic approach to geospatial data collection and validation, utilizing multiple data sources including satellite imagery, open-source infrastructure databases, and historical records. Implemented automated oil spill detection techniques using SAR data processing to identify and map spill incidents. Created detailed cartographic visualizations including oil spill incident maps, infrastructure development timelines, basin maps, and regional callout maps. Organized and structured geospatial data into comprehensive geodatabases to support the research dossier. Synthesized findings into clear, actionable sections that contributed significantly to the final document.",
    results: "Successfully delivered comprehensive geospatial analysis contributing to Sections 8, 9, and 10 of a major research dossier. Created multiple high-quality maps including oil spill incident visualizations, infrastructure development timelines, regional basin maps, and health impact assessments. The work provided critical geospatial evidence linking oil infrastructure development to environmental impacts and regional conflicts. Section 10 served as a comprehensive summary of all geospatial contributions, demonstrating the scope and impact of the mapping and analysis work completed over 283 hours of dedicated research and cartographic design.",
  },
  {
    id: "rome-hotel-map",
    title: "The Secret Boutique Leads Map - Rome Hotels Mapping Application",
    description: "Full-stack interactive mapping application for visualizing boutique hotels and leads across Rome and surrounding municipalities.",
    rating: 5.0,
    dateRange: "Oct 30, 2025 - Nov 9, 2025",
    amount: "$150.00",
    paymentType: "fixed",
    testimonial: "Great Professional, And great ability to understand, choose him!",
    platform: "Upwork",
    clientName: "Niccolo Perazzo",
    clientLocation: "Rome, Italy",
    // Detailed content for the project detail page
    detailedDescription: "Developed a comprehensive full-stack mapping application for visualizing boutique hotel leads across Rome and surrounding Italian municipalities. The application features an interactive map interface with advanced filtering capabilities, allowing users to filter hotels by city, star rating, status, and phase. Built with a modern tech stack including Supabase for database management, Node.js backend, and Leaflet/MapTiler for interactive mapping.",
    technologies: [
      "Supabase (PostgreSQL Database)",
      "Node.js (Backend API)",
      "JavaScript (Frontend)",
      "HTML5 & CSS3",
      "Leaflet.js (Mapping Library)",
      "MapTiler (Map Tiles)",
      "Netlify (Deployment)"
    ],
    challenges: "The project required handling complex geospatial data, implementing real-time filtering across multiple criteria, and ensuring smooth performance with large datasets of hotel locations across multiple municipalities.",
    solutions: "Implemented a robust backend API using Node.js to handle data queries efficiently. Used Supabase for scalable database management with proper indexing for geospatial queries. Created an intuitive filtering system that allows users to filter by city, star rating, status, and phase simultaneously. Utilized Leaflet.js for smooth map interactions and MapTiler for high-quality map tiles.",
    results: "Successfully delivered a fully functional mapping application that allows clients to visualize and filter boutique hotel leads across Rome and surrounding areas. The application was deployed on Netlify for the client, providing an intuitive interface for exploring hotel data with advanced filtering capabilities.",
  },
];

// Helper function to get a testimonial by ID
export function getTestimonialById(id) {
  return testimonials.find((testimonial) => testimonial.id === id);
}

