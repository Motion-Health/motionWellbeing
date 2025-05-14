import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, image }) => {
  return (
    <div className="col-12">
      <div className="testimonial-container">
        <div style={{ display: 'flex' }}>
          <div className="testimonial-image-container">
            <img src={image} alt={author} className="testimonial-image" />
          </div>

          <div className="testimonial-content">
            <p className="testimonial-quote">{quote}</p>
            <p className="testimonial-author">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
