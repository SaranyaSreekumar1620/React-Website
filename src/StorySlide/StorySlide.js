import React from 'react';
import './StorySlide.scss';

function StorySlide() {
  return (
    <>
    <section id='ourStory'>
    <div className='containerwrapper'>
      <div className="ourStory__wrapper">
        <div className="ourStory__info">
          <h3 className="ourStory__title">
            Story Of Us
          </h3>
          <p className="ourStory__text">
          India is a land of many colors and flavors, and South Indian cuisine is the term used to collectively refer to flavors from Tamil Nadu, Andhra Pradesh, Kerala and Karnataka. What makes South Indian food so distinct from the other Indian
          cuisines is its use of coconut,lentils and local vegetables like tamarind, snake gourd,plantain and ginger. Also you will notice the refreshing freshness, and lightness of the food – nourish yourself with fresh, wholesome food
          that isn’t too heavy on the stomach.
          </p>
        </div>
        <div className="ourStory__img">
          <img src="https://assets3.thrillist.com/v1/image/2419818/1584x1056/crop;webp=auto;jpeg_quality=60;progressive.jpg" alt='no image'/>
        </div>
      </div>
    </div>
  </section>
  
  </>
  
  )
}

export default StorySlide;