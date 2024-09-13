import React from 'react';

function Course({ course }) {
  const { id, title, description, price, link, image } = course;
  return (
    <>
      {console.log(course)}
      <div className='course'>
        <img src={image} alt={title} style={{ width: '250px', height: '250px' }} />
        <div className='course-content'>
          <h4 className='course-title'>{title}</h4>
          <h5 className='course-desc'>{description}</h5>
          <h3 className='course-price'>{price}</h3>
          <div className='course-action'>
            <a className='buy-button' href={link}>Satın Al</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;