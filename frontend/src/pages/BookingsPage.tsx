import React, { useEffect, useRef } from "react";
import "../styles/bookings.css";

const BookingsPage: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-section");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bookings-container">
      <div className="bookings-header">
        <h1>Bookings & Refund Policy</h1>
        <p>
          Learn about our booking process and refund policies for a smooth
          travel experience.
        </p>
      </div>

      <div className="bookings-content">
        <section
          className="booking-section"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <h2>How to Book</h2>
          <div className="booking-info">
            <p>
              Booking with Safar is quick and easy! You can choose from three
              simple options:
            </p>
            <div className="booking-methods">
              <div className="booking-method">
                <h3>1. Select a Ready-Made Package</h3>
                <p>
                  Browse our available packages, pick the one you like, and
                  review the itinerary. Click "Book Now," and our team will
                  reach out to confirm your booking.
                </p>
              </div>

              <div className="booking-method">
                <h3>2. Customize Your Package</h3>
                <p>
                  Want something unique? Customize your own package based on
                  your preferences, and we'll tailor everything to fit your
                  needs.
                </p>
              </div>

              <div className="booking-method">
                <h3>3. Chat with Us on WhatsApp</h3>
                <p>
                  For a more personalized experience, message us directly on
                  WhatsApp, and our team will guide you through the booking
                  process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="payment-section"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <h2>Payment Methods</h2>
          <p>
            We accept a variety of payment methods to make your booking
            experience as convenient as possible:
          </p>
          <ul>
            <li>Online payments via credit/debit cards</li>
            <li>Net banking through all major banks</li>
            <li>UPI payments (Google Pay, PhonePe, Paytm, etc.)</li>
          </ul>
          <p>
            Additionally, we offer a flexible payment option where you can pay
            50% in cash at the start of your trip and the remaining 50% as a
            pre-booking advance.
          </p>
        </section>

        <section
          className="refund-section"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <h2>Refund Policy</h2>
          <p>
            Our cancellation and refund policy is clear and simple to
            understand:
          </p>
          <div className="refund-table">
            <div className="refund-row header">
              <div className="refund-cell">Time of Cancellation</div>
              <div className="refund-cell">Refund Percentage</div>
            </div>
            <div className="refund-row">
              <div className="refund-cell">More than 15 days before trip</div>
              <div className="refund-cell">100% (Full refund)</div>
            </div>
            <div className="refund-row">
              <div className="refund-cell">10-15 days before trip</div>
              <div className="refund-cell">75%</div>
            </div>
            <div className="refund-row">
              <div className="refund-cell">5-10 days before trip</div>
              <div className="refund-cell">50%</div>
            </div>
            <div className="refund-row">
              <div className="refund-cell">0-5 days before trip</div>
              <div className="refund-cell">25%</div>
            </div>
          </div>
        </section>

        <section
          className="transparency-section"
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <h2>Our Commitment to Transparency</h2>
          <p>
            We believe in full transparency when it comes to pricing. Our goal
            is to offer the best and most reasonable prices for everything.
            There are no hidden charges—what you see is what you pay. This
            approach ensures that you can plan your trip with complete
            confidence, knowing that there won't be any unexpected expenses
            along the way.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BookingsPage;
