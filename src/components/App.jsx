import FeedbackCounter from "./FeedbackCounter/feedbackCounter";


export function App () {
  return (
    <div>
      <section>
        <FeedbackCounter/>
        
      </section>

      {/* <section className={css.section}>
        <Statistics title="Upload stats" stats={data} />
      </section>

      <section className={css.section}>
        <FriendList friends={friends} />
      </section>

      <section className={css.section}>
        <Transactions items={transactions} />
      </section> */}
    </div>
  );
};