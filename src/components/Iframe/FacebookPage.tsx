import React, { useEffect } from 'react';

const FacebookPage = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      // Load the SDK Asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }, []);
<div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="500" data-height="" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
<blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
  return (
    <div
      className="fb-page w-auto"
      dangerouslySetInnerHTML={{
        __html: `
        <div class="fb-page" 
          data-href="https://www.facebook.com/facebook" 
          data-tabs="timeline" 
          data-width="500" 
          data-height="1000" 
          data-small-header="false" 
          data-adapt-container-width="true" 
          data-hide-cover="false" 
          data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/facebook">Facebook</a>
          </blockquote>
        </div>
        `,
      }}
    />
  );
};

export default FacebookPage;