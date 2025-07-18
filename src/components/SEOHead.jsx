import React from 'react';
import { Helmet } from 'react-helmet-async';

// Sanitize and validate structured data to prevent XSS
const sanitizeStructuredData = (data) => {
  if (!data || typeof data !== 'object') return null;
  
  // Create a new object with only allowed properties
  const sanitized = JSON.parse(JSON.stringify(data, (key, value) => {
    // Remove any potentially dangerous content
    if (typeof value === 'string') {
      return value
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    }
    return value;
  }));

  return sanitized;
};

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
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sanitizeStructuredData(structuredData))
          }}
        />
      )}
    </Helmet>
  );
};

export default SEOHead;
