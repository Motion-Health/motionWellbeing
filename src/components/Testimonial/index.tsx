import React from 'react';

export enum ImagePosition {
  Left = 'left',
  Right = 'right',
}

interface TestimonialProps {
  quote: string;
  author: string;
  image: string;
  imagePosition?: ImagePosition;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  image,
  imagePosition = ImagePosition.Left,
}) => {
  const flexDirection =
    imagePosition === ImagePosition.Right ? 'row-reverse' : 'row';

  return (
    <div className="col-12">
      <div className="testimonial-container">
        <div
          style={{
            display: 'flex',
            flexDirection,
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            className="testimonial-image-container"
            style={{ minWidth: '120px', maxWidth: '150px' }}
          >
            <img
              src={image}
              alt={author}
              className="testimonial-image"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>

          <div className="testimonial-content">
            <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
            <p className="testimonial-author">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
