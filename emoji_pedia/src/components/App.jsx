import React from 'react';

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img">
              💪
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            "You can do that!" or "I feel strong!" Arm with tense biceps. Also
            used in conection with doing sport, e.g. at the gym.
          </dd>
        </div>
      </dl>

      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying is a prayerm or hoping
            for enlightenment. Is also as a "high five" or to say thank you.
          </dd>
        </div>
      </dl>

      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img">
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor,
            laughing. The face is laughing boundlessly. The emojipediaversion of "rofi".
            Stands for "rolling on the floor, laughing".
          </dd>
        </div>
      </dl>

    </div>
  );
}

export default App;
