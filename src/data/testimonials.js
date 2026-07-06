/** Card descriptions are 40 words each so testimonial grid tiles keep a consistent height. */
export const upworkProfileUrl = "https://www.upwork.com/freelancers/~015f3845ea728cd7f0?mp_source=share";

export const upworkStats = {
  totalEarnings: "$4K+",
  totalJobs: "12",
  totalHours: "399",
  jobSuccess: "100%",
  badges: ["Top Rated", "100% Job Success"],
};

export const testimonials = [
  {
    id: "oil-spill-mapping",
    title: "Oil Spill Mapping & GIS Data Collection - Sudan & South Sudan",
    description:
      "Long-form geospatial research and cartography for Sudan and South Sudan oil infrastructure, spills, and environmental risk. Produced dossier-ready maps and figures from QGIS and ArcGIS pipelines, satellite and SAR workflows, validation against open sources, and narrative layouts for policy readers.",
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
    category: "freelance",
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
    id: "nigeria-power-impact-dashboard",
    title: "Nigeria Power Impact Map Dashboard",
    description:
      "Responsive single-page Nigeria power-impact dashboard mapping all thirty-six states with green, amber, and red status cues, Branch360 branding, and practical obfuscation to deter casual source theft. Built with React, TypeScript, and Vite; deployed on Vercel with repo transparency for stakeholders.",
    rating: 5.0,
    dateRange: "Apr 18, 2026 - Apr 19, 2026",
    amount: "$20.00",
    paymentType: "fixed",
    testimonial:
      "Zahak is very profesional, highly skilled and great to work with. He has completed multiple projects for us already and he delivered successfully and beyond expectations on all. Very satisfied with his work.",
    platform: "Upwork",
    clientName: "Olatunde Adedoyin",
    clientLocation: "Dartford, United Kingdom",
    category: "freelance",
    links: [
      {
        label: "Live demo",
        url: "https://nigeria-power-impact-dashboard.vercel.app/",
      },
      {
        label: "Source code",
        url: "https://github.com/Waliz521/Nigeria-Power-Impact-Dashboard",
      },
    ],
    detailedDescription:
      "Delivered a standalone, single-page interactive map dashboard focused on Nigeria, with geometry for all 36 states and a clear traffic-light visual language: green for stable conditions, amber for warning, and red for critical. The experience integrates the client’s Branch360 branding and is fully responsive across common breakpoints. The build also includes pragmatic code-protection measures aimed at discouraging unauthorized copying while keeping the shipped bundle maintainable for the client’s team.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Interactive mapping & state-level polygons",
      "Responsive layout",
      "Vercel (deployment)",
    ],
    challenges:
      "Keeping a dense national map legible on small screens, applying consistent status semantics across every state, matching supplied branding without cluttering the map chrome, and balancing client requests for copy protection with performance and long-term maintainability.",
    solutions:
      "Structured the UI around a single dashboard view with responsive spacing and typography, used a simple three-tier status palette for quick scanning, placed Branch360 assets per brand guidelines, and implemented lightweight protection patterns suitable for a public Vite build while documenting behavior in the open repository.",
    results:
      "Completed as a fixed-price contract with a 5.0 client rating; milestone funded and released on schedule. The dashboard is live on Vercel and the implementation is published on GitHub for review and handoff.",
  },
  {
    id: "nigeria-water-impact-dashboard",
    title: "Nigeria Water Impact Map Dashboard",
    description:
      "Single-page responsive Nigeria water-impact map for all thirty-six states with legible status cues, Branch360-consistent presentation, and patterns aligned to prior Nigeria impact work. React, TypeScript, and Vite; short fixed-price engagement with 5.0 client feedback on quality, speed, and strong communication.",
    rating: 5.0,
    dateRange: "Apr 20, 2026 - Apr 24, 2026",
    amount: "$20.00",
    paymentType: "fixed",
    testimonial:
      "Again, Zahak has demonstrated professional high quality standard of work, He is a good communicator and works at speed to deliver great work.",
    platform: "Upwork",
    clientName: "Olatunde Adedoyin",
    clientLocation: "Dartford, United Kingdom",
    category: "freelance",
    detailedDescription:
      "Delivered a responsive, single-page interactive water-impact map dashboard for Nigeria’s states, following the same product pattern as the client’s other Branch360 impact work: a legible map-first layout, state-level status communication, and branding consistency. The build targets modern browsers, prioritizes quick load and touch-friendly controls on phones and tablets, and ships as a Vite-tuned static or SPA-style bundle ready for the client’s hosting workflow.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Interactive mapping (state-level)",
      "Responsive layout",
    ],
    challenges:
      "Reusing the impact-dashboard pattern for a new water-focused dataset and indicators without confusing users who already saw the power dashboard, while keeping the map uncluttered and fast across devices.",
    solutions:
      "Aligned typography, color semantics, and map chrome with the client’s prior Nigeria dashboard work, structured state data for a single clear readout per region, and tested breakpoints so panels and the map share space predictably on small screens.",
    results:
      "Fixed-price contract completed Apr 20–24, 2026 with a 5.0 rating. The client called out quality, communication, and speed; the engagement adds another deliverable in an ongoing series with the same client.",
  },
  {
    id: "qgis-overlay-two-maps",
    title: "Overlay two maps (QGIS — neighborhoods & land use)",
    description:
      "QGIS dual-layer overlay: neighborhood above land use, opacity tuned for dual read. Kuwait client, fixed price, $20 milestone and $10 bonus ($30 total). Completed Apr 24, 2026; 5.0 Upwork feedback; raster stack and clean project export.",
    rating: 5.0,
    dateRange: "Apr 23, 2026 - Apr 24, 2026",
    amount: "$30.00",
    paymentType: "fixed",
    testimonial: "Quick and efficient.",
    platform: "Upwork",
    clientName: "Er Erm",
    clientLocation: "Kuwait, Kuwait",
    category: "freelance",
    detailedDescription:
      "The scope was to combine two client-supplied map images—neighborhoods by area and land use with area—into a single, readable QGIS project. The land-use graphic was used as the lower layer to carry colour and land-class patterns; the neighborhood graphic was placed above. Neighborhood opacity was reduced until land-use information stayed visible and neighborhood area names and boundaries could still be picked out, following a simple overlay model rather than a database merge. A PNG export (TheMap.png) was prepared for sign-off, and the QGIS project file was left structured so the client or a colleague could adjust transparency or order later. The contract completed on Upwork on Apr 24, 2026: the $20.00 milestone released, a $10.00 bonus paid, the contract ended, and the client left a 5.0 rating with the public feedback quoted on this card.",
    technologies: [
      "QGIS",
      "Raster & image overlay",
      "Layer order & opacity control",
      "Cartographic legibility (dual-layer read)",
    ],
    challenges:
      "The inputs were flat map art, not feature layers, so the design problem was visual: any opacity change trades land-use legibility against neighborhood linework and labels. The stack had to stay crisp when zoomed to detail and still read at overview scale on screen.",
    solutions:
      "Standardized the draw order, applied controlled transparency to the top layer, and adjusted contrast and label visibility in QGIS so both themes stayed interpretable. Shared an interim export, refined once based on the client’s read of alignment and clarity, and handed off a tidy project file with the final settings.",
    results:
      "Closed contract Apr 24, 2026: $20.00 milestone plus $10.00 client bonus, $30.00 total, mutual 5.0 Upwork reviews. Handoff: dual-map QGIS build and sign-off export as agreed, with a smooth close from the client’s side in Kuwait.",
  },
  {
    id: "lake-huron-bathymetry-georgian-bay",
    title: "High-Resolution Lake Huron Bathymetry Map Design",
    description:
      "Pointe-au-Baril, Georgian Bay bathymetry in ArcGIS Pro: merged NOAA, land mask, 3/5 m contours, hillshade, light palette, feet soundings, layout previews for a wall map. ~0–30 m, island-dense. $5 milestone; scope ended by agreement before $100 final art.",
    rating: null,
    dateRange: "Nov 29, 2025 - Present",
    amount: "$5.00",
    paymentType: "fixed",
    testimonial: "",
    platform: "Upwork",
    clientName: "Schalk Janse Van Rensburg",
    clientLocation: "East London, South Africa",
    category: "freelance",
    detailedDescription:
      "Fixed-price R&D toward a 3' × 5' (and discussed 4' × 5') wall map of the Pointe-au-Baril / Georgian Bay (Lake Huron) area, beyond off-the-shelf charts: the client wanted hybrid NOAA-based bathymetry, fine underwater structure, and a lighter, less heavy blue look than a default ramp, with depth in feet, vintage-style map elements, and print-ready art in principle. The entire workflow was done in ArcGIS Pro: building on merged NOAA Great Lakes / CUDEM-scale bathymetry, masking land, generating contours at multiple test intervals (including 3 m and 5 m from high-resolution public grids), hillshade and shaded relief passes, and many layout and symbology iterations (basemap options, legibility, labels, and palette) against a client-supplied corner bounding box. The engagement surfaced a structural issue in this exact window: total depth range is on the order of 0–30 m with a maze of islets, so smooth gradients read subtle and contour lines would bundle in channels. After previews and discussion, the client decided to end the work before a full $100.00, multi-milestone delivery. The only funded milestone to release was a $5.00 contract-opening tranche. Remaining Upwork state may still show the job until the client fully closes the record; the work product through that milestone is the bathymetry processing, analysis, and cartographic trial layouts described above, not a finished 300 dpi print shipped to spec.",
    technologies: [
      "ArcGIS Pro",
      "NOAA Great Lakes / CUDEM bathymetry (merge & clean)",
      "Land masking, contours (multi-interval), hillshade",
      "Map layout, symbology & large-format (print) intent",
    ],
    challenges:
      "Reconciling a strong visual reference (AI/blue sample and hybrid NOAA look) with the real seafloor: the Pointe au Baril extent is shallow, nearly flat, and full of small islands, so the same ‘dramatic’ bathymetry read as a wide-area or less fragmented reference is difficult at this scale. Balancing the client’s wish for fine contours with legibility, and land detail from preferred basemaps with bathymetry overlays, without promising relief the public data do not support.",
    solutions:
      "Delivered a structured ArcGIS Pro sequence: data merge and QA, land removal, interval testing, shaded relief, palette moves toward a lighter water ramp, soundings in feet, and serial layout feedback. Set expectations in thread with the physics of the data (low vertical range, channel clustering) and ended the contract scope professionally when the client chose to stop after the initial milestone, with milestone funds released in good order.",
    results:
      "First Upwork milestone ($5.00, hiring-fee) approved and released; the broader $100.00 / multi-milestone plan for final print and shipping was not executed. The effort through the released milestone is data acquisition, bathymetric processing, contouring, and repeated layout and styling previews for the agreed extent, produced entirely in ArcGIS Pro.",
  },
  {
    id: "rome-hotel-map",
    title: "The Secret Boutique Leads Map - Rome Hotels Mapping Application",
    description:
      "Full-stack hotel lead map for Rome area municipalities using Supabase, Node, Leaflet, and MapTiler basemaps. Operators filter by city, stars, status, and pipeline phase while panning dense urban tiles so large lead lists stay fast, legible, and Netlify friendly daily.",
    rating: 5.0,
    dateRange: "Oct 30, 2025 - Nov 9, 2025",
    amount: "$150.00",
    paymentType: "fixed",
    testimonial: "Great Professional, And great ability to understand, choose him!",
    platform: "Upwork",
    clientName: "Niccolo Perazzo",
    clientLocation: "Rome, Italy",
    category: "freelance",
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
  {
    id: "uk-heatmap-creation",
    title: "Heat Map Creation from Data",
    description:
      "UK sales heat maps from 1,500+ billing postcodes (2023-2026), deduplicated in ArcGIS Pro. Weighted density surfaces, hub callouts, monthly revenue trend inset, and print layouts help leadership and analysts see concentration without rebuilding spreadsheets manually each quarter for planning teams.",
    rating: null,
    dateRange: "Jan 14, 2026 - Present",
    amount: "$20.00",
    paymentType: "hourly",
    hourlyRate: "$10.00 /hr",
    totalHours: "2 hours",
    testimonial: "", // Add client testimonial if available
    platform: "Upwork",
    clientName: "Rachel Greening",
    clientLocation: "Weston Colville, United Kingdom",
    category: "freelance",
    // Detailed content for the project detail page
    detailedDescription: "Created a comprehensive United Kingdom Sales Value Heatmap visualizing weighted order value density based on billing postcodes from 2023-2026. The project involved processing 1,500+ data points, cleaning duplicate entries, and creating high-resolution static heat maps showing sales concentration across the UK, Ireland, and parts of France. The visualization includes detailed annotations for major sales hubs including London & Greater London, Midlands (Birmingham area), North West England (Manchester-Liverpool area), and other key regions. Additionally, created a monthly sales revenue trend chart showing seasonal patterns and revenue growth over the analysis period. Delivered both a classified heat map (grouped by order value) and a point location map showing individual order locations.",
    technologies: [
      "ArcGIS Pro",
      "GIS",
      "Geospatial Data Processing",
      "Postcode Geocoding",
      "Heat Map Creation",
      "Cartographic Design",
      "Data Cleaning & Validation",
      "Map Layout Design",
      "Spatial Analysis"
    ],
    challenges: "The project required processing a large dataset of 1,500+ records, identifying and removing duplicate entries (199 duplicates found), geocoding UK postcodes, creating an accurate heat map visualization that properly represents weighted order value density, and designing a comprehensive map with proper annotations and legends that effectively communicates sales concentration patterns across the UK.",
    solutions: "Processed and cleaned the dataset to remove duplicate entries where Order ID, Order Date, and Order Total matched exactly, resulting in 1,373 unique orders for analysis. Created a weighted heat map visualization using ArcGIS Pro to show sales concentration intensity across different regions. Designed a comprehensive map layout including a detailed legend, scale bar, annotations for key sales hubs, and an integrated monthly sales revenue trend chart. Used proper cartographic principles to ensure the heat map accurately represents the weighted order value density across the United Kingdom. Delivered high-resolution static maps (18 x 24 inches) that can be zoomed in for detailed analysis.",
    results: "Successfully delivered a comprehensive United Kingdom Sales Value Heatmap that visualizes sales concentration across the UK, Ireland, and parts of France. The map clearly identifies major sales hubs including London & Greater London (primary sales hub), Midlands (Birmingham area), North West England (Manchester-Liverpool area), and other key regions. The visualization includes detailed annotations, a proper legend, and an integrated monthly sales revenue trend chart showing seasonal patterns from February 2023 to January 2026. Delivered both a classified heat map (Option 1 - clear groups) and a point location map showing individual order locations. The project effectively communicates sales distribution patterns and helps identify key market areas for business analysis and geo-targeting budget decisions.",
  },
  {
    id: "uk-territories-wordpress-map",
    title: "Add a Colour-Coded Map Page to an Existing WordPress Website",
    description:
      "Interactive England and Wales franchise territory map embedded in WordPress with five colour coded statuses, deep zoom, modals, and filters. React, Leaflet, Tailwind, Radix, Turf-merged GeoJSON, optional Supabase sync for admin edits, and responsive layouts on phones, tablets, and desktops.",
    rating: 5.0,
    dateRange: "Mar 7, 2026 - Mar 9, 2026",
    amount: "$40.00",
    paymentType: "fixed",
    testimonial:
      "Zahak is exceptionally fantastic professional, prompt, experienced and easy to work with. He is one of the best talents I have worked with. I see us working together long term.",
    platform: "Upwork",
    clientName: "Olatunde Adedoyin",
    clientLocation: "Dartford, United Kingdom",
    category: "freelance",
    links: [
      {
        label: "Live demo",
        url: "https://uk-territories-map.vercel.app/",
      },
      {
        label: "Source code",
        url: "https://github.com/Waliz521/uk-territories-map",
      },
    ],
    detailedDescription:
      "Built an interactive UK territories experience for a UK care-franchise WordPress website, improving on a reference-style territory map with a cleaner UI, smoother interactions, and clearer status communication. The map shows England and Wales areas coloured by franchise status, supports low-level zoom for local detail, and lets users click a territory to open a compact modal with area metadata (e.g. areas served, population, status). Filtering by territory and status makes large regions scannable on desktop and mobile. The solution is implemented as a modern React 19 + TypeScript + Vite front end (Leaflet / React-Leaflet, Tailwind CSS, Radix UI) with GeoJSON boundaries and @turf/turf for territory grouping, and is packaged for embedding alongside WordPress. An optional Supabase connection allows admin-side edits to appear on the public map when deployment env vars are configured; otherwise the map falls back to static bundled data.",
    technologies: [
      "React 19 & TypeScript",
      "Vite",
      "WordPress (embed / integration)",
      "Leaflet & React-Leaflet",
      "Tailwind CSS",
      "Radix UI (Dialog, Select)",
      "@turf/turf",
      "GeoJSON",
      "Supabase (optional live data)",
    ],
    challenges:
      "Delivering a map that feels noticeably more refined than a typical franchise territory demo—clear colour semantics for five statuses, readable at all zoom levels, fast enough with detailed polygons, and fully usable on phones—while fitting into an existing WordPress site and optionally staying in sync with admin updates.",
    solutions:
      "Designed a focused colour system (purple sold, blue reserved, green available, amber under offer, grey unavailable), built accessible modals and selects with Radix, and used Leaflet with responsive layout and sensible defaults for touch and zoom. Used Turf to merge and group geometry for territory-level display. Split a Vite-powered app with a WordPress-oriented build path so the client can host the bundle alongside their site, and wired optional Supabase reads so the same project can serve static or live data with a visible “live data” state when connected.",
    results:
      "Shipped on schedule for a fixed-price engagement with a 5.0 client rating. The client highlighted professionalism, speed, and clarity, and indicated interest in ongoing collaboration. The implementation is available as open source on GitHub with a public Vercel demo (see links above).",
  },
  {
    id: "blossoming-care-territories-admin",
    title: "Blossoming Care — Territories Data Admin",
    description:
      "Supabase admin for Blossoming Care territories with secure login, CRUD, search, filters, and CSV import export aligned to the public map. React nineteen, TypeScript, Vite, Tailwind, and Radix keep WordPress embeds current without redeploys while franchise staff update records daily.",
    rating: null,
    dateRange: "Mar 9, 2026 - Present",
    amount: "$20.00",
    paymentType: "fixed",
    testimonial: "",
    platform: "Upwork",
    clientName: "Olatunde Adedoyin",
    clientLocation: "Dartford, United Kingdom",
    category: "freelance",
    links: [
      {
        label: "Live demo",
        url: "https://blossoming-care-admin.vercel.app/",
      },
      {
        label: "Source code",
        url: "https://github.com/Waliz521/blossoming-care-admin",
      },
      {
        label: "Public map (repo)",
        url: "https://github.com/Waliz521/uk-territories-map",
      },
    ],
    detailedDescription:
      "Companion admin application for the Blossoming Care UK territories map. The panel lets authorised users manage location and territory data (add, edit, delete), filter and search records, and export or import CSV for bulk workflows. Data lives in Supabase with auth and row-level access patterns suited to a small operations team; the public map consumes the same Supabase project when live env vars are set, so admin changes can appear on the embedded WordPress map without redeploying the map bundle. The Upwork job listing is private; scope and stack are documented in the open-source repo and deployment.",
    technologies: [
      "React 19 & TypeScript",
      "Vite",
      "Supabase (database, auth, API)",
      "Tailwind CSS",
      "Radix UI (Dialog, Select)",
      "CSV export / import",
    ],
    challenges:
      "Building a focused admin UX that stays fast for non-technical users, keeping Supabase schema and client config aligned with the existing map app, and handling safe bulk data movement via import/export without breaking territory integrity.",
    solutions:
      "Reused patterns from the map stack (React 19, Vite, Tailwind, Radix) for consistency, used Supabase for auth and persisted rows consumed by the map, and implemented clear list/filter flows plus CSV round-tripping with validation appropriate for franchise territory data.",
    results:
      "Fixed-price engagement in progress (Mar 9, 2026 onwards); $20.00 earned to date. Client review and final rating will be updated when the contract closes. Source and demo are published for transparency (see links above).",
  },
  {
    id: "tribes-capital-php-platform",
    title: "Tribes Capital — PHP Web Platform Modification",
    description:
      "Laravel PHP updates across Tribes Capital member and admin apps: community dashboard surfacing, category navigation, engagement features, content-detail layouts aligned to design specs, media handling, and database migrations. Private fixed-price contract; client praised solution-oriented delivery and clear communication throughout.",
    rating: 5.0,
    dateRange: "May 7, 2026 - Jun 10, 2026",
    amount: "$30.00",
    paymentType: "fixed",
    testimonial: "Zahak works brilliantly",
    platform: "Upwork",
    clientName: "Tribes Capital",
    clientLocation: "Remote",
    category: "freelance",
    links: [
      {
        label: "Platform",
        url: "https://www.tribes.capital",
      },
    ],
    detailedDescription:
      "Fixed-price enhancements to a Laravel-based member community platform and its paired admin application for Tribes Capital, a renewable-energy community product. Work spanned shared-database migrations, admin category and content tooling, member dashboard presentation of featured categories, sidebar navigation across system pages and dynamic categories, category engagement (comments, reactions, view counts), content-detail UI aligned to supplied design references, expanded media upload types with sensible size limits, and operational deploy notes. The Upwork job listing is private; public framing stays at platform-level scope without internal credentials or proprietary business data.",
    technologies: [
      "PHP",
      "Laravel",
      "Blade templates",
      "MySQL migrations",
      "Member & admin web apps",
      "Community content management",
    ],
    challenges:
      "Coordinating parallel member and admin codebases against one database, closing a long client QA sheet without regressions on login or registration flows, and matching Figma-aligned content-detail layouts while keeping uploads, previews, and sidebar navigation reliable across many dynamic categories.",
    solutions:
      "Implemented scoped migrations and mirrored changes in both apps, addressed dashboard flags, engagement persistence, preview-before-publish tokens, sidebar scroll layout fixes, and media validation with consistent file paths. Documented deploy and verification steps for the client team and closed the contract with mutual 5.0 Upwork reviews.",
    results:
      "Completed May 7–Jun 10, 2026 for $30.00 fixed price with a 5.0 client rating. Client endorsed Solution Oriented, Clear Communicator, and Detail Oriented; freelancer review noted a patient, requirements-clear client and a smooth contract from start to finish.",
  },
  {
    id: "iinvest-nigeria-gateway",
    title: "iInvest Map Web Platform",
    description:
      "Nigeria investment gateway: interactive state map with green, amber, and red opportunity status, territory modals, Invest and Raise capital marketing pages, Branch360-aligned nav, and responsive React nineteen TypeScript Vite delivery. Four-day fixed-price sprint; client praised exceptional speed and quality.",
    rating: 5.0,
    dateRange: "May 18, 2026 - May 21, 2026",
    amount: "$30.00",
    paymentType: "fixed",
    testimonial:
      "Zahak operates like a thousand man team because he delivers exceptionally well and promptly. We enjoy working with such professional and passionate talent. More projects lined up for him already.",
    platform: "Upwork",
    clientName: "Olatunde Adedoyin",
    clientLocation: "Dartford, United Kingdom",
    category: "freelance",
    links: [
      {
        label: "Live demo",
        url: "https://iinvest-nigeria-gateway.vercel.app",
      },
      {
        label: "Source code",
        url: "https://github.com/Waliz521/iinvest-nigeria-gateway",
      },
    ],
    detailedDescription:
      "Delivered a standalone static web application for iInvest Nigeria — an investment gateway forked from the client’s prior Nigeria impact-map pattern. Milestone one shipped the home map with sample territory data, status semantics (green active, amber limited, red none), territory click modals, and bottom Invest / Raise capital funnels. Milestone two added full Invest and Raise capital pages with FAQs, contact UI, and partner sections. Stack: React 19, TypeScript, Vite, Tailwind, Leaflet, Turf, Recharts, Radix; deployed on Vercel with an open GitHub repository.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Leaflet",
      "@turf/turf",
      "Recharts",
      "Radix UI",
      "Vercel",
    ],
    challenges:
      "Turning spreadsheet and PDF source content into a cohesive three-page marketing experience while keeping map interactions legible on mobile and aligning filters, favicon, and branding with client feedback inside a very short fixed-price window.",
    solutions:
      "Reused the proven Branch360 map scaffold, imported territory data from client Excel sources, applied iterative client feedback on filter placement and map styling, and built Invest and Raise pages from structured content files with shared header, footer, and navigation across routes.",
    results:
      "Closed May 18–21, 2026 at $30.00 fixed price with mutual 5.0 Upwork reviews. Client endorsed Committed to Quality, Clear Communicator, Accountable for Outcomes, and Professional; indicated additional projects already lined up. Live demo and source published for handoff.",
  },
  {
    id: "nt-community-infrastructure-gis",
    title: "GIS Desktop Analyst — Remote Community Infrastructure Site Assessment (NT Australia)",
    description:
      "Desktop GIS site assessments for remote Northern Territory community infrastructure compounds: satellite imagery interpretation, compound area and inventory documentation, green amber red expansion feasibility, annotated overhead maps, and Word reports from a client template. Hourly Upwork contract; NDA-bound — no site identifiers published here.",
    rating: null,
    dateRange: "Jun 2, 2026 - Present",
    amount: "$1,760.00",
    paymentType: "hourly",
    hourlyRate: "$20.00 /hr",
    totalHours: "100 hours",
    testimonial: "",
    platform: "Upwork",
    clientName: "Private client",
    clientLocation: "Australia",
    category: "freelance",
    detailedDescription:
      "Ongoing desktop GIS analyst engagement for approximately twenty-seven remote community power-infrastructure locations across Australia’s Northern Territory (trial tranche first, full scope on satisfactory quality, with potential extension). For each site: interpret satellite imagery of an existing infrastructure compound; measure compound boundaries; inventory buildings, generators, fuel storage, solar, fencing, and hardstand; assess available expansion area; rate expansion feasibility Green, Amber, or Red with brief justification; produce an annotated overhead image with boundary, north arrow, and scale bar; and complete a Word site-profile report using the client’s template. Work uses QGIS / ArcGIS-style desktop workflows, cadastre reference layers, and structured calculators for layout fit — without publishing coordinates, community names, or other NDA-protected deliverables on this portfolio.",
    technologies: [
      "QGIS / ArcGIS Pro (desktop GIS)",
      "Satellite imagery interpretation",
      "Cadastre & tenure research",
      "KML map exports",
      "Word report production",
      "Infrastructure compound mapping",
      "GREEN / AMBER / RED feasibility rating",
    ],
    challenges:
      "Producing consistent, investment-grade reports across many remote sites with variable imagery quality, co-located compounds, tenure complexity, and tight per-site time targets while respecting confidentiality and a client template that must stay comparable site to site.",
    solutions:
      "Followed a documented end-to-end workflow: standardized polygon legend and map exports, Excel-backed fit calculators, NR Maps cadastre checks, ABS context where appropriate, and repeatable Word assembly. Prioritized trial-site quality for full-scope approval and maintained internal tooling for review without exposing protected location data publicly.",
    results:
      "Active hourly contract from Jun 2, 2026: $20.00/hr, 100 hours logged, $1,760.00 earned to date. Client review pending while work continues. Portfolio copy reflects only the public Upwork job overview — not NDA site lists, coordinates, or community-identifying deliverables.",
  },
  {
    id: "sudan-conflict-map",
    title: "Sudan Conflict Map",
    description:
      "ACLED powered Sudan conflict explorer in Mapbox GL JS with temporal filters, clustering, and rich popups per incident. Researchers scan violence types, actors, dates, and locations across zoom while the interface stays responsive for briefings, newsrooms, and humanitarian analysis today.",
    rating: 5.0,
    dateRange: "Mar 11, 2025 - Dec 23, 2025",
    amount: null,
    paymentType: null,
    hourlyRate: null,
    totalHours: null,
    testimonial: "",
    platform: "Client Work",
    clientName: "Dr. John Petterson",
    clientLocation: "California, USA",
    category: "client-work",
    image: "/images/Sudan_Conflict_Map.png",
    tags: ["Mapbox GL JS", "ACLED Conflict Data", "GeoJSON"],
    links: [
      {
        label: "Live Demo",
        url: "https://sudan-conflict-map.netlify.app/",
      },
    ],
    detailedDescription: "Created an interactive geospatial visualization application for analyzing conflict events in Sudan using ACLED (Armed Conflict Location & Event Data) data. The application features temporal filtering capabilities allowing users to explore conflict incidents across different time periods, and implements clustering algorithms to group related incidents for better visualization and analysis. The map provides detailed information about each conflict event including location, date, type, and involved parties. This project was part of a comprehensive research initiative analyzing conflict patterns and their relationship to regional dynamics in Sudan and South Sudan.",
    technologies: [
      "Mapbox GL JS",
      "ACLED Data API",
      "GeoJSON",
      "JavaScript",
      "Temporal Data Visualization",
      "Clustering Algorithms",
      "Web GIS Development",
      "Interactive Mapping"
    ],
    challenges: "Processing and visualizing large volumes of conflict data, implementing efficient temporal filtering, creating meaningful cluster visualizations, and ensuring the application handles real-time data updates effectively. The project required handling complex geospatial datasets while maintaining performance and providing an intuitive user interface for exploring conflict patterns across different time periods.",
    solutions: "Integrated ACLED conflict data API to fetch and process conflict events efficiently. Implemented temporal filtering with date range selectors to allow users to explore conflicts across different time periods. Used clustering algorithms to group nearby incidents for better map readability and performance. Created interactive popups with detailed information about each conflict event. Developed a responsive design that works seamlessly across different devices and screen sizes.",
    results: "Successfully delivered a comprehensive conflict visualization tool that helps researchers, journalists, and analysts understand conflict patterns in Sudan. The application successfully processes and visualizes complex conflict data in an accessible and interactive format. The tool has been used to analyze temporal trends, identify conflict hotspots, and support research on regional conflict dynamics. The project contributed valuable geospatial analysis capabilities to the broader research initiative on Sudan and South Sudan.",
  },
  {
    id: "port-sudan-drone-strikes",
    title: "Drone Strike Locations: Port Sudan",
    description:
      "Port Sudan drone strike atlas mapping airports, naval yards, fuel storage, and verified infrastructure in Mapbox GL JS. Fly-to buttons, sourced popups, gaps where coordinates are missing, and clear hierarchy help analysts trace targeting patterns across the busy port cityscape.",
    rating: 5.0,
    dateRange: "Mar 11, 2025 - Dec 23, 2025",
    amount: null,
    paymentType: null,
    hourlyRate: null,
    totalHours: null,
    testimonial: "",
    platform: "Client Work",
    clientName: "Dr. John Petterson",
    clientLocation: "California, USA",
    category: "client-work",
    image: "/images/Port_Sudan.png",
    tags: ["Mapbox GL JS", "Geospatial Visualization", "Interactive Mapping", "Drone Strike Data"],
    links: [
      {
        label: "Live Demo",
        url: "https://drone-attacks-on-port-sudan.netlify.app/",
      },
    ],
    detailedDescription: "Developed an interactive geospatial mapping application for visualizing drone strike locations and confirmed targets in Port Sudan. The application displays multiple strategic locations including the International Airport, Marina Hotel, Flamingo Naval Base, Southern Port Fuel Storage, Osman Digna Air Base, Strategic Petroleum Petrol Depots, and other critical infrastructure. The map features clickable markers that provide detailed information about each attack location, including source links and attack details. The application also includes navigation buttons to quickly fly to specific locations, making it easy for users to explore different target areas. Some locations like Container Terminal, Port Sudan Converter Station, and Port Storage Facilities are noted as unmapped due to lack of precise coordinates in public reports, demonstrating careful data validation practices.",
    technologies: [
      "Mapbox GL JS",
      "JavaScript",
      "HTML5 & CSS3",
      "Geospatial Data Visualization",
      "Interactive Mapping",
      "Web GIS Development",
      "Marker Clustering",
      "Custom Map Controls"
    ],
    challenges: "Collecting and validating geospatial coordinates for drone strike locations, ensuring data accuracy from multiple sources, handling locations with incomplete coordinate data, and creating an intuitive interface for exploring multiple target locations while maintaining clear visual hierarchy and user experience.",
    solutions: "Developed a systematic approach to data collection and validation, utilizing multiple verified sources for geospatial coordinates. Implemented interactive markers with detailed popups showing attack information and source links. Created navigation buttons for quick access to key locations. Clearly documented unmapped locations that lack precise coordinates, ensuring transparency about data limitations. Designed a clean, intuitive interface that allows users to easily explore different strike locations and understand the geographic distribution of attacks.",
    results: "Successfully delivered a comprehensive mapping tool that visualizes drone strike locations in Port Sudan, providing researchers, journalists, and analysts with an accessible way to understand the geographic distribution and targeting patterns of drone attacks. The application effectively communicates complex geospatial information about strategic infrastructure targets, supporting analysis of conflict dynamics and military targeting strategies in the region. The project contributed valuable geospatial visualization capabilities to the broader research initiative on Sudan and South Sudan.",
  },
];

// Helper function to get a testimonial by ID
export function getTestimonialById(id) {
  return testimonials.find((testimonial) => testimonial.id === id);
}

/** Parses Upwork-style money strings (e.g. "$2,264.00") for sorting; null/invalid → no numeric value. */
function parseMoneyAmount(amount) {
  if (amount == null || typeof amount !== "string") return null;
  const cleaned = amount.replace(/,/g, "").replace(/[^0-9.]/g, "");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : null;
}

/** True when an Upwork contract is still open (date range ends with "Present"). */
export function isFreelanceInProgress(testimonial) {
  return Boolean(testimonial?.dateRange?.includes("Present"));
}

// Helper function to get testimonials by category
export function getTestimonialsByCategory(category, options = {}) {
  const { status = "all" } = options;
  let list = testimonials.filter((testimonial) => testimonial.category === category);

  if (category === "freelance" && status !== "all") {
    list = list.filter((testimonial) =>
      status === "in-progress"
        ? isFreelanceInProgress(testimonial)
        : !isFreelanceInProgress(testimonial)
    );
  }

  if (category === "freelance") {
    return [...list].sort((a, b) => {
      const na = parseMoneyAmount(a.amount);
      const nb = parseMoneyAmount(b.amount);
      if (na == null && nb == null) return 0;
      if (na == null) return 1;
      if (nb == null) return -1;
      return nb - na;
    });
  }
  return list;
}
