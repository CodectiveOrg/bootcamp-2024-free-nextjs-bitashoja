"use client";

import React, { useState } from "react";
import styles from "./surveyForm.module.css";

interface SurveyData {
  encounter: number;
  explanation: number;
  skill: number;
}

const initialVotes: SurveyData = {
  encounter: 0,
  explanation: 0,
  skill: 0,
};

export default function SurveyForm(): JSX.Element {
  const [votes, setVotes] = useState<SurveyData>(initialVotes);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [showComments, setShowComments] = useState<boolean>(false);

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const handleVote = (option: keyof SurveyData) => {
    setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const getPercentage = (count: number) => {
    return totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100);
  };

  console.log(setComments);

  // const handleAddComment = () => {
  //   if (newComment.trim() !== "") {
  //     setComments((prev) => [...prev, newComment.trim()]);
  //     setNewComment("");
  //   }

  return (
    <div className={styles.surveyContainer}>
      <h4>نظرسنجی درباره پزشک</h4>
      <div className={styles.options}>
        <div className={styles.option}>
          <button onClick={() => handleVote("encounter")}>برخورد مناسب</button>
          <span className={styles.percentage}>
            <div
              className={styles.chartBar}
              style={{
                width: `${getPercentage(votes.encounter)}%`,
                backgroundColor: "green",
              }}
            >
              <span className={styles.label}>
                {getPercentage(votes.encounter)}%
              </span>
            </div>
          </span>
        </div>
        <div className={styles.option}>
          <button onClick={() => handleVote("explanation")}>
            توضیح پزشک در هنگام ویزیت
          </button>
          <span className={styles.percentage}>
            <div
              className={styles.chartBar}
              style={{
                width: `${getPercentage(votes.explanation)}%`,
                backgroundColor: "green",
              }}
            >
              <span className={styles.label}>
                {getPercentage(votes.explanation)}%
              </span>
            </div>
          </span>
        </div>
        <div className={styles.option}>
          <button onClick={() => handleVote("skill")}>مهارت و تخصص پزشک</button>
          <span className={styles.percentage}>
            <div
              className={styles.chartBar}
              style={{
                width: `${getPercentage(votes.skill)}%`,
                backgroundColor: "green",
              }}
            >
              <span className={styles.label}>
                {getPercentage(votes.skill)}%
              </span>
            </div>
          </span>
        </div>
      </div>
      <div className={styles.commentsSection}>
        <textarea
          className={styles.commentInput}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="نظر خود را وارد کنید..."
        ></textarea>
      </div>
      <div>
        <button
          className={styles.showAllButton}
          onClick={() => console.log({ votes, comments })}
        >
          نمایش همه نظرات
        </button>
        <button
          className={styles.showAllButton}
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? "پنهان کردن نظرات" : "نمایش همه نظرات"}
        </button>

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
        {/* <button className={styles.addCommentButton} onClick={handleAddComment}>
          اضافه کردن نظر
        </button> */}
      </div>
    </div>
  );
}
