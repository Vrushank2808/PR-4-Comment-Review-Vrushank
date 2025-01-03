// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Feedback() {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [feedbackList, setFeedbackList] = useState([]);

//   const handleRatingChange = (ratingValue) => setRating(ratingValue);

//   const handleHoverEnter = (ratingValue) => setHover(ratingValue);

//   const handleHoverLeave = () => setHover(null);

//   const handleFeedbackChange = (e) => setFeedback(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (rating && feedback.trim()) {
//       const newFeedback = { id: Date.now(), rating, feedback };
//       setFeedbackList([newFeedback, ...feedbackList]);
//       setRating(null);
//       setFeedback("");
//     } else {
//       alert("Please provide both a rating and feedback!");
//     }
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="text-center text-uppercase mb-5 fw-bold text-primary display-4">
//         Share Your Experience
//       </h2>
//       <div className="d-flex justify-content-center mb-4">
//         {[...Array(5)].map((_, i) => {
//           const ratingValue = i + 1;
//           return (
//             <label key={i} className="mx-1">
//               <input
//                 type="radio"
//                 style={{ display: "none" }}
//                 value={ratingValue}
//                 onClick={() => handleRatingChange(ratingValue)}
//               />
//               <FaStar
//                 size={50}
//                 color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
//                 onMouseEnter={() => handleHoverEnter(ratingValue)}
//                 onMouseLeave={handleHoverLeave}
//                 style={{
//                   cursor: "pointer",
//                   transition: "transform 0.2s, color 0.2s",
//                   transform: hover === ratingValue ? "scale(1.2)" : "scale(1)",
//                 }}
//               />
//             </label>
//           );
//         })}
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="text-center border p-4 rounded shadow-lg bg-light"
//       >
//         <div className="form-group mb-4">
//           <textarea
//             rows="4"
//             cols="40"
//             className="form-control border-primary shadow-lg"
//             placeholder="Write your feedback here..."
//             value={feedback}
//             onChange={handleFeedbackChange}
//             style={{ resize: "none", fontSize: "1.2rem" }}
//           />
//         </div>
//         <button
//           type="submit"
//           className="btn btn-lg btn-primary px-5 shadow-lg rounded-pill"
//         >
//           Submit Feedback
//         </button>
//       </form>
//       <div className="mt-5">
//         <h3 className="text-center text-secondary mb-4">
//           User Feedback
//         </h3>
//         <div className="row g-4">
//           {feedbackList.map((entry) => (
//             <div key={entry.id} className="col-md-4">
//               <div className="card border-0 shadow-lg h-100 bg-gradient">
//                 <div className="card-body text-center text-white">
//                   <div className="mb-3">
//                     {[...Array(5)].map((_, i) => (
//                       <FaStar
//                         key={i}
//                         size={25}
//                         color={i < entry.rating ? "#ffc107" : "#e4e5e9"}
//                       />
//                     ))}
//                   </div>
//                   <p className="card-text fs-5">{entry.feedback}</p>
//                 </div>
//                 <div className="card-footer bg-primary text-white text-center">
//                   <small>We value your input!</small>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

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

