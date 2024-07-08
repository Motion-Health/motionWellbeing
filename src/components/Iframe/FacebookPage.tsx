import React, { useEffect } from 'react';

interface FacebookPageProps {
  url: string;
}

const FacebookPage: React.FC<FacebookPageProps> = ({ url }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      // Load the SDK Asynchronously
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src =
          'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  }, []);

  return (
    <div
      className="fb-page w-auto h-100 mt-4"
      dangerouslySetInnerHTML={{
        __html: `
        <div class="fb-page" 
          data-href="${url}" 
          data-tabs="timeline" 
          data-width="300" 
          data-height="550"
          data-small-header="false" 
          data-adapt-container-width="true" 
          adapt-container-width="true"
          data-hide-cover="false" 
          data-show-facepile="true">
          <blockquote cite="${url}" class="fb-xfbml-parse-ignore">
            <a href="${url}">Facebook</a>
          </blockquote>
        </div>
        `,
      }}
    />
  );
};

export default FacebookPage;
