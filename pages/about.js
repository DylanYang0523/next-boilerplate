import React from 'react';
import Link from 'next/link';

class About extends React.Component {
  render() {
    return (
      <div>
        <Link href="/video">
          <a>Go to Video Page.</a>
        </Link>
        <h1>This is About Page.</h1>
      </div>
    );
  }
}

export default About;