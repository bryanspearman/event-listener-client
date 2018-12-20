import React from 'react';
// import { Connect } from 'react-router-dom';

export function InfoView(props) {
  return (
    <div className="info-view">
      <section>
        <header>
          <h1>A Big Title for my Event</h1>
          <span className="set-date">April 10, 2019</span>
        </header>
      </section>
      <section>
        <h3>Notes</h3>
        <p>
          Vestibulum dictum elementum convallis. Ut at est porta, tempus est ut,
          rhoncus est. Maecenas vehicula, nunc non tincidunt ultricies, mauris
          nibh lobortis turpis, nec blandit nulla justo a nisi. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Aenean et odio id tortor iaculis tincidunt.
        </p>
      </section>
      <section>
        <div className="social-btns">Social Buttons Go Here</div>
      </section>
    </div>
  );
}

export default InfoView;
