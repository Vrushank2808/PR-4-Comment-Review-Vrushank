import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Feedback.css";

function Feedback() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleRatingChange = (ratingValue) => setRating(ratingValue);

  const handleHoverEnter = (ratingValue) => setHover(ratingValue);

  const handleHoverLeave = () => setHover(null);

  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && feedback.trim()) {
      const newFeedback = { id: Date.now(), rating, feedback };
      setFeedbackList([newFeedback, ...feedbackList]);
      setRating(null);
      setFeedback("");
    } else {
      alert("Please provide both a rating and feedback!");
    }
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">We Value Your Feedback</h2>
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                style={{ display: "none" }}
                value={ratingValue}
                onClick={() => handleRatingChange(ratingValue)}
              />
              <FaStar
                size={50}
                className={`star ${
                  ratingValue <= (hover || rating) ? "filled" : "unfilled"
                }`}
                onMouseEnter={() => handleHoverEnter(ratingValue)}
                onMouseLeave={handleHoverLeave}
              />
            </label>
          );
        })}
      </div>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Share your thoughts here..."
          value={feedback}
          onChange={handleFeedbackChange}
          className="feedback-textarea"
        />
        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
      <div className="feedback-cards">
        <h3 className="feedback-subtitle">User Feedback</h3>
        <div className="cards-grid">
          {feedbackList.map((entry) => (
            <div key={entry.id} className="feedback-card">
              <div className="card-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={20}
                    className={`star ${
                      i < entry.rating ? "filled" : "unfilled"
                    }`}
                  />
                ))}
              </div>
              <p className="card-text">{entry.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;

