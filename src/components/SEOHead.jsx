import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "FOSS CUSAT", 
  description = "FOSS CUSAT is the official Free and Open Source Software club at Cochin University of Science and Technology. Join us for workshops, hackathons, and open source projects.",
  keywords = "FOSS CUSAT, Open Source, Linux, Programming, Hackathon, Software Development, CUSAT, Kerala, Student Club, Technology, Coding, GitHub, Community",
  canonical = "https://fossclub.cusat.ac.in/",
  ogImage = "https://fossclub.cusat.ac.in/og-image.jpg",
  structuredData = null,
  noindex = false
}) => {
  const fullTitle = title === "FOSS CUSAT" ? title : `${title} | FOSS CUSAT`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
