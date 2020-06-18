import React from "react";

function Term(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        {props.description}
      </dd>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Term
          emoji="💪"
          name="Tense Biceps"
          description='“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.'
        />
        <Term
          emoji="🙏"
          name="Person With Folded Hands"
          description='Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.'
        />
        <Term
          emoji="🤣"
          name="Rolling On The Floor, Laughing"
          description='  This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.'
        />

      </dl>
    </div>
  );
}

export default App;
