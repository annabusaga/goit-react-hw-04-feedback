// import css from './FeedbackOptions.module.css';
import React from 'react';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={css.container}>
        {options.map(option => (
          <button
            className={css.btn}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
