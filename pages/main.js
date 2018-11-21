import React from 'react';
import Head from 'next/head';

import withLayout from '../lib/withLayout';

function Index() {
  return (
    <div style={{ padding: '10px 45px' }}>
      <Head>
        <title>CDC 2018 POC - Server Side Rendering vs Client Side Rendering</title>
        <meta name="description" content="description for indexing bots" />
      </Head>
      <p>In alto a sinistra i 2 pulsanti SSR e CSR permettono di selezionare le 2 modalita' con cui e' possibile caricare la lista dei movimenti effettuati dall'utente.</p>
    </div>
  );
}

export default withLayout(Index);