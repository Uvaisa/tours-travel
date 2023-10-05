import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import u1 from "../../assets/images/u1.jpg";
import w1 from "../../assets/images/w1.jpg";
import w2 from "../../assets/images/w2.jpg";
import w3 from "../../assets/images/w3.jpg";
import w4 from "../../assets/images/w4.jpg";
import w5 from "../../assets/images/w5.jpg";
import w6 from "../../assets/images/w6.jpg";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 3,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Reviewer = [
    {
      id: "1",
      comment: ` I had an amazing experience with your tour company! The itinerary was well-planned, the accommodations were top-notch, and the tour guide was knowledgeable and friendly. I would highly recommend your services to anyone looking for a memorable travel experience.`,
      photo: u1,
      name: "Mohd",
    },
    {
      id: "2",
      comment: ` Thank you for organizing such a fantastic trip! The attention to detail and personalized service exceeded my expectations. The destinations were breathtaking, and I felt safe and well taken care of throughout the entire journey. I can't wait to book another adventure with your company.`,
      photo: w3,
      name: "Mohd rizwan",
    },
    {
      id: "3",
      comment: `I can't say enough good things about my recent tour with your company. The whole experience was seamless, from booking to the actual trip. The guides were exceptional, providing insightful information and making the tour engaging and enjoyable. I'm already planning my next trip with you!`,
      photo: w2,
      name: "Arslan Ahmed",
    },
    {
      id: "4",
      comment: `A big shoutout to your customer service team for their prompt and helpful assistance throughout the booking process. They answered all my queries patiently and provided valuable suggestions. It made me feel confident and excited about my upcoming trip. Keep up the excellent work!`,
      photo: w1,
      name: "Arslan kaiser",
    },
    {
      id: "5",
      comment: `I had the time of my life on the tour I booked through your website. The itinerary was diverse and allowed me to experience the best of each destination. The accommodations were comfortable, and the transportation was hassle-free. Your team truly knows how to deliver an unforgettable travel experience.`,
      photo: w4,
      name: "Aqib ghossi",
    },
    {
      id: "6",
      comment: `I want to express my gratitude for the exceptional service provided by your tour guides. They were not only knowledgeable and professional but also went above and beyond to ensure everyone had a great time. Their passion for the destinations and their enthusiasm was contagious. It made the tour even more enjoyable.`,
      photo: w5,
      name: "Musharraf Ali",
    },
    {
      id: "7",
      comment: `I had an incredible adventure with your tour company! The activities were well-organized and catered to a variety of interests. The local guides were friendly and shared fascinating insights into the culture and history of each place. I returned home with unforgettable memories and a deeper appreciation for the destinations`,
      photo: w6,
      name: "Ghuffran Hussain Shah",
    },
  ];
  return (
    <Slider {...settings}>
      {Reviewer.map((item, key) => (
        <div className="testimonial py-4 px-3" key={item.id}>
          <p>{item.comment}</p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={item.photo} className="w-25 h-25 rounded-2" alt="" />

            <div className="card-bottom">
              <h6 className="mb-0 mt-3">{item.name}</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
