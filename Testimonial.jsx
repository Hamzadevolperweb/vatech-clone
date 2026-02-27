import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Product Manager",
    text: "buat night cream bagiku sih oke oke aja, cukup melembabkan. untuk tekstur aku lebih prefer night",
    image: "",
  },
  {
    name: "Cameron Williamson",
    role: "Product Manager",
    text: "buat night cream bagiku sih oke oke aja, cukup melembabkan. untuk tekstur aku lebih prefer night",
    image: "",
  },
  {
    name: "Cameron Williamson",
    role: "Product Manager",
    text: "buat night cream bagiku sih oke oke aja, cukup melembabkan. untuk tekstur aku lebih prefer night",
    image: "",
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <p className="testimonial-heading">TESTIMONIAL</p>

      <h2 className="testimonial-main-title">
        WHAT SAY OUR CLIENTS <br />
        FOR OUR SERVICES
      </h2>

      <div className="testimonial-list">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-stars">★★★★★</div>

            <p className="testimonial-text">“{item.text}”</p>

            <div className="testimonial-user">
              <img
                src={item.image}
                alt={item.name}
                className="testimonial-avatar"
              />
              <div className="testimonial-user-info">
                <h4 className="testimonial-name">{item.name}</h4>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
