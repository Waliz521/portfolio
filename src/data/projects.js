export const projects = [
  {
    id: "hotspot-spatial-correlation",
    title: "Hotspot & Spatial Correlation Analysis",
    description:
      "Advanced spatial analysis application identifying statistically significant hotspots and correlation patterns in geospatial data, enabling interactive exploration of spatial relationships.",
    image: "/images/Spatial_Correlation.png",
    tags: ["Mapbox GL JS", "Hotspot Analysis", "Spatial Correlation"],
    category: "pet-projects",
    links: [
      {
        label: "Live Demo",
        url: "https://waliz521.github.io/Map-Box/",
      },
      {
        label: "Source Code",
        url: "https://github.com/waliz521/Map-Box",
      },
    ],
    detailedDescription: "Developed an advanced spatial analysis web application that identifies statistically significant hotspots and correlation patterns in geospatial data. The application uses Mapbox GL JS for interactive mapping and implements sophisticated spatial analysis algorithms to detect patterns and relationships in geographic datasets. Users can upload their own geospatial data and visualize hotspots, spatial correlations, and statistical significance patterns across different geographic regions.",
    technologies: [
      "Mapbox GL JS",
      "JavaScript",
      "HTML5 & CSS3",
      "Geospatial Analysis",
      "Statistical Analysis",
      "Data Visualization"
    ],
    challenges: "Implementing complex spatial analysis algorithms in a web environment, handling large geospatial datasets efficiently, and creating an intuitive interface for users to interact with statistical analysis results.",
    solutions: "Utilized Mapbox GL JS for high-performance map rendering and spatial data visualization. Implemented efficient algorithms for hotspot detection and spatial correlation analysis. Created an interactive user interface that allows users to explore statistical patterns through intuitive map interactions.",
    results: "Successfully created a powerful spatial analysis tool that enables users to identify hotspots and correlation patterns in their geospatial data. The application provides valuable insights for researchers, analysts, and decision-makers working with geographic datasets.",
  },
  {
    id: "atlantic-hurricane-visualization",
    title: "Atlantic Hurricane Visualization",
    description:
      "Interactive timeline visualization of the 2000 Atlantic hurricane season, featuring animated hurricane paths and detailed intensity data for comprehensive storm analysis.",
    image: "/images/Atlantic_Hurricanes.png",
    tags: ["Mapbox GL JS", "Animated Hurricanes", "Timeline Visualization"],
    category: "pet-projects",
    links: [
      {
        label: "Live Demo",
        url: "https://atlantic-hurricane-2000.netlify.app/",
      },
    ],
    detailedDescription: "Built an interactive timeline visualization application for the 2000 Atlantic hurricane season, featuring animated hurricane paths and intensity data. The application allows users to explore each hurricane's track, intensity changes over time, and key meteorological data. Users can play through the entire season chronologically or jump to specific hurricanes, with detailed information displayed for each storm including maximum wind speeds, pressure, and affected regions.",
    technologies: [
      "Mapbox GL JS",
      "JavaScript",
      "Hurricane Track Data",
      "Animation & Timeline Controls",
      "Geospatial Data Visualization",
      "Meteorological Data Processing"
    ],
    challenges: "Processing historical hurricane track data, creating smooth animations for hurricane paths, synchronizing timeline controls with map updates, and effectively visualizing intensity changes over time.",
    solutions: "Integrated historical hurricane data from meteorological sources and processed it for web visualization. Implemented timeline controls with play/pause functionality to animate hurricane tracks chronologically. Created visual representations of hurricane intensity using color coding and size variations. Added interactive features allowing users to explore individual hurricanes in detail.",
    results: "Delivered an engaging and educational visualization tool that helps users understand the 2000 Atlantic hurricane season. The application successfully combines historical meteorological data with modern web technologies to create an interactive learning experience about hurricane patterns and impacts.",
  },
  {
    id: "van-gogh-wind-map",
    title: "Van Gogh style wind speed map",
    description:
      "An artistic visualization of wind patterns using van Gogh's brushstroke technique, transforming meteorological data into an interactive, impressionist-style map for data exploration.",
    image: "/images/Van_gogh.png",
    tags: ["ArcGIS Online", "Artistic Cartography", "Wind Data Visualization"],
    category: "pet-projects",
    links: [
      {
        label: "Live Demo",
        url: "https://jonsnow.maps.arcgis.com/apps/instant/basic/index.html?appid=7e2414e869fd4a08aa176dab7627895f",
      },
    ],
    detailedDescription: "Developed an innovative artistic cartography project that transforms meteorological wind data into a beautiful, interactive map inspired by Vincent van Gogh's distinctive brushstroke technique. This project combines scientific data visualization with artistic expression, creating a unique way to visualize wind patterns and speeds across geographic regions. The map uses ArcGIS Online's capabilities to render wind data with artistic styling that mimics van Gogh's impressionist painting style.",
    technologies: [
      "ArcGIS Online",
      "ArcGIS Instant Apps",
      "Artistic Cartography",
      "Wind Data Processing",
      "Meteorological Data Visualization",
      "Custom Map Styling"
    ],
    challenges: "Translating scientific wind data into an artistic visual style, maintaining data accuracy while applying artistic transformations, and creating an engaging user experience that balances aesthetics with functionality.",
    solutions: "Utilized ArcGIS Online's advanced styling capabilities to create custom visualizations that mimic van Gogh's brushstroke technique. Processed meteorological wind data and applied artistic transformations that preserve the underlying data patterns while creating visually stunning representations. Created an interactive interface that allows users to explore wind patterns while appreciating the artistic visualization.",
    results: "Created a unique fusion of art and science that demonstrates how geospatial data can be visualized in creative and engaging ways. The project showcases the potential for artistic cartography in making scientific data more accessible and visually appealing to broader audiences.",
  },
];

// Helper function to get a project by ID
export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}

// Helper function to get projects by category
export function getProjectsByCategory(category) {
  return projects.filter((project) => project.category === category);
}


