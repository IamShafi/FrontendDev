import React from 'react';
import PropTypes from 'prop-types';
import style from './Testimonials.module.css';// Создайте соответствующий CSS-файл
import ProfileImg1 from '../assets/images/profile-1.jpg';
import ProfileImg2 from '../assets/images/profile-2.jpg';
import ProfileImg3 from '../assets/images/profile-3.jpg';

function TestimonialCard({ testimonial, author }) {
  return (
    <div className={style.testimonial_card}>
      <p className={style.testimonial}>{testimonial}</p>
      <div className={style.author_info}>
        <img src={author.avatar} alt={`${author.firstName} ${author.lastName}`} />
        <div className={style.name_title}>
          <p className={style.name}>{`${author.firstName} ${author.lastName}`}</p>
          <p className={style.title}>{author.title}</p>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.string.isRequired, // Пример типа свойства и его проверки
  author: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

function Testimonials() {
  const testimonialsData = [
    {
      testimonial: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      author: {
        avatar: ProfileImg1,
        firstName: 'John',
        lastName: 'Doe',
        title: 'CEO, Company A',
      },
    },
    {
      testimonial: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      author: {
        avatar: ProfileImg2,
        firstName: 'Jane',
        lastName: 'Smith',
        title: 'Designer, Company B',
      },
    },
    {
      testimonial: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      author: {
        avatar: ProfileImg3,
        firstName: 'Mike',
        lastName: 'Johnson',
        title: 'CTO, Company C',
      },
    },
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.testimonials_section}>
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial.testimonial}
            author={testimonial.author}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
