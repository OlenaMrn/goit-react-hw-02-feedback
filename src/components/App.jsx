// import FeedbackCounter from "./FeedbackCounter/feedbackCounter";
import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/statistics';

// export function App () {
//   return (
//     <div>
//       <section>
//         {/* <FeedbackCounter/> */}
        
//       </section>

//       {/* <section className={css.section}>
//         <Statistics title="Upload stats" stats={data} />
//       </section>

//       <section className={css.section}>
//         <FriendList friends={friends} />
//       </section>

//       <section className={css.section}>
//         <Transactions items={transactions} />
//       </section> */}
//     </div>
//   );
// };

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (evt) => {
    if (evt.target.name === 'good') {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    } else if (evt.target.name === 'bad') {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    } else {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    }      
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;

  }


  countPositiveFeedbackPercentage = () => {
  const { good, neutral, bad } = this.state;
  return Math.round((good * 100) / (good + neutral + bad));
}


  render() {
   const { good, neutral, bad } = this.state;
    
    return (
      <div>
        {/* <Header/> */}
        <h2>Feedback Counter</h2>

        <FeedbackOptions handleClick={this.handleClick} />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}


