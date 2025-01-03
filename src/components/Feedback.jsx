import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Feedback() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [feedbackList, setFeedbackList] = useState([]);

    const handleRatingChange = (ratingValue) => {
        setRating(ratingValue);
    };

    const handleHoverEnter = (ratingValue) => {
        setHover(ratingValue);
    };

    const handleHoverLeave = () => {
        setHover(null);
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

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
        <>
            <div className="container my-5">
                <h2 className="text-center mb-4 text-primary">Leave Your Feedback</h2>
                <div className="d-flex justify-content-center mb-3">
                    {[...Array(5)].map((_, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={i} className="mx-1">
                                <input
                                    type="radio"
                                    style={{ display: "none" }}
                                    value={ratingValue}
                                    onClick={() => handleRatingChange(ratingValue)}
                                />
                                <FaStar
                                    size={40}
                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => handleHoverEnter(ratingValue)}
                                    onMouseLeave={handleHoverLeave}
                                    style={{ cursor: "pointer", transition: "color 0.2s" }}
                                />
                            </label>
                        );
                    })}
                </div>
                <form onSubmit={handleSubmit} className="text-center">
                    <div className="form-group">
                        <textarea
                            rows="4"
                            cols="40"
                            className="form-control mx-auto border-primary shadow"
                            placeholder="Enter your feedback"
                            value={feedback}
                            onChange={handleFeedbackChange}
                            style={{ resize: "none" }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 px-5 shadow-sm">
                        Submit
                    </button>
                </form>
                <div className="mt-5">
                    <h3 className="text-center mb-4 text-secondary">Feedback Cards</h3>
                    <div className="row">
                        {feedbackList.map((val) => (
                            <div key={val.id} className="col-md-4 mb-3">
                                <div className="card text-center shadow border-primary">
                                    <div className="card-body bg-light">
                                        <div className="mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    size={20}
                                                    color={i < val.rating ? "#ffc107" : "#e4e5e9"}
                                                />
                                            ))}
                                        </div>
                                        <p className="card-text text-dark">{val.feedback}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feedback;
