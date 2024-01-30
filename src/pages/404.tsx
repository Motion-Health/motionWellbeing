import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { closest } from 'fastest-levenshtein';
import xml2js from 'xml2js';
import React from 'react';

const Custom404 = () => {
  const router = useRouter();
  const [validUrls, setValidUrls] = useState([]);

  useEffect(() => {
    fetch('/sitemap.xml')
      .then(response => response.text())
      .then(data => {
        xml2js.parseString(data, (err, result) => {
          
          if (err) {
            console.error(err);
          } else {
            console.log('result', result);
            const urls = result.urlset.url.map(urlEntry => urlEntry.loc[0]);
            setValidUrls(urls);
          }
        });
      });
      
  }, []);

  useEffect(() => {
    if (validUrls.length > 0) {
      const incorrectUrl = "https://marketing.motion.org.uk" +
      router.asPath;
      const correctedUrl = correctUrl(incorrectUrl, validUrls);
      router.push(correctedUrl);
    }
  }, [validUrls, router]);

  return (
    <div>
      <p>Redirecting to the correct URL...</p>
    </div>
  );
};

function correctUrl(incorrectUrl, validUrls) {
  console.log('incorrectUrl', incorrectUrl);
  // Find the most similar URL from the list of valid URLs
  const mostSimilarUrl = closest(incorrectUrl, validUrls);
  return mostSimilarUrl;
}

export default Custom404;