import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { getList } from '../lib/api/public';
import withLayout from '../lib/withLayout';

class DETAILS extends React.Component {
  static async getInitialProps() {
    const list = await getList();
    return { list };
  }

  render() {
    const { list } = this.props;
    return (
      <div style={{ textAlign: 'center', margin: '0 20px' }}>
        <Head>
          <title>SSR page</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <br />
        <h3 style={{ textAlign: 'left' }}>Detail page</h3>
          Ciao detail
      </div>
    );
  }
}

DETAILS.propTypes = {
  list: PropTypes.shape({
    listOfItems: PropTypes.array.isRequired,
  }).isRequired,
};

export default withLayout(DETAILS);