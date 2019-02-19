import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>Not Found</h1>
          <img src="lost-404.png" />
          <p>
            Use your web browsers back button to navigate back to a page that
            works. Or search for something here:{' '}
            <a href="https://duckduckgo.com/">duck duck go</a> 🦆.
          </p>
        </main>
      </Layout>
    );
  }
}

export default NotFoundPage;
