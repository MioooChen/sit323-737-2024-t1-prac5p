import React from 'react';
import './cards.css';
import CardsItem from './CardsItem';


const featuredFreelancersData = [
  {
    src: 'https://picsum.photos/200',
    text1: 'aaa',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
    path: '/services',
    rating: 5,
  },
  {
    src: 'https://picsum.photos/200',
    text1: 'bbb',
    text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    path: '/services',
    rating: 4.5,
  },
  {
    src: 'https://picsum.photos/200',
    text1: 'ccc',
    text: ' Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.',
    path: '/services',
    rating: 5,
  },
];

const featuredCustomersData = [
  {
    src: 'https://picsum.photos/200',
    text1: 'www',
    text: 'Sed consequat, leo eget bibendum sodales.',
    path: '/services',
    rating: 5,
  },
  {
    src: 'https://picsum.photos/200',
    text1: 'eee',
    text: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id.',
    path: '/services',
    rating: 4.5,
  },
  {
    src: 'https://picsum.photos/200',
    text1: 'rrr',
    text: ' Quisque rutrum. Aenean imperdiet.',
    path: '/services',
    rating: 4.5,
  },
];

function Cards() {
  return (
    <div className='cards'>
        <h1>Featured Freelancers</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
            <ul className='cards_items'>
                {featuredFreelancersData.map((item, index) => (
                <CardsItem key={index} {...item} />
                ))}
            </ul>
            </div>
        </div>
        <div className="centered-button">
            <button className="action-button">Explore More</button>
        </div>
        <h1>Featured Customers</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
            <ul className='cards_items'>
                {featuredCustomersData.map((item, index) => (
                <CardsItem key={index} {...item} />
                ))}
            </ul>
            </div>
        </div>
        <div className="centered-button">
        <button className="action-button">Explore All Customers</button>
        </div>
    </div>
  );
}

export default Cards;