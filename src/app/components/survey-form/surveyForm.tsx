"use client";

import React, { useState } from "react";
import styles from "./surveyForm.module.css";

const categories = [
  "برخورد مناسب پزشک",
  "توضیح پزشک در هنگام ویزیت",
  "مهارت و تخصص پزشک",
];

export default function SurveyForm(): JSX.Element {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [showComments, setShowComments] = useState<boolean>(false);
  const [showRatingModal, setShowRatingModal] = useState<boolean>(false);
  const [ratings, setRatings] = useState<{ [key: string]: number[] }>(
    categories.reduce((acc, category) => ({ ...acc, [category]: [] }), {}),
  );
  const [selectedRatings, setSelectedRatings] = useState<{
    [key: string]: number;
  }>(categories.reduce((acc, category) => ({ ...acc, [category]: 0 }), {}));

  const handleAddComment = () => {
    if (newComment.trim()) {
      setShowRatingModal(true); // باز کردن پنجره امتیازدهی
    }
  };

  const handleRatingSubmit = () => {
    setComments([...comments, newComment.trim()]);

    const newRatings = { ...ratings };
    categories.forEach((category) => {
      newRatings[category] = [
        ...newRatings[category],
        selectedRatings[category],
      ];
    });

    setRatings(newRatings);
    setNewComment("");
    setShowRatingModal(false);
    setSelectedRatings(
      categories.reduce((acc, category) => ({ ...acc, [category]: 0 }), {}),
    );
  };

  const getCategoryAverage = (category: string) => {
    if (ratings[category].length === 0) return 0;
    const sum = ratings[category].reduce((acc, rating) => acc + rating, 0);
    return ((sum / (ratings[category].length * 5)) * 100).toFixed(1); // درصد
  };

  return (
    <div className={styles.surveyContainer}>
      <h4>نظرسنجی درباره پزشک</h4>
      <div>
        {categories.map((category) => (
          <div key={category} className={styles.percentageDisplay}>
            <p>
              {category} : {getCategoryAverage(category)}%
            </p>
            <div
              className={styles.chartBar}
              style={{
                width: `${getCategoryAverage(category)}%`,
                backgroundColor: "green",
              }}
            ></div>
          </div>
        ))}
      </div>

      <textarea
        className={styles.commentInput}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="نظر خود را وارد کنید..."
      ></textarea>

      <div className={styles.buttonComments}>
        <button className={styles.submitButton} onClick={handleAddComment}>
          ارسال نظر
        </button>
        <button
          className={styles.showAllButton}
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? "پنهان کردن نظرات" : "نمایش همه نظرات"}
        </button>
      </div>
      {showComments && (
        <div className={styles.commentsList}>
          <h5>نظرات کاربران:</h5>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          ) : (
            <p>هنوز نظری ثبت نشده است.</p>
          )}
        </div>
      )}
      {/* پنجره امتیازدهی */}
      {showRatingModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h4>به هر دسته امتیاز دهید</h4>
            {categories.map((category) => (
              <div key={category} className={styles.ratingCategory}>
                <p>{category}</p>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        selectedRatings[category] >= star
                          ? styles.selectedStar
                          : styles.star
                      }
                      onClick={() =>
                        setSelectedRatings({
                          ...selectedRatings,
                          [category]: star,
                        })
                      }
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <button
              className={styles.submitButton}
              onClick={handleRatingSubmit}
            >
              ثبت امتیازات
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
