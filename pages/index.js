import React from 'react';
import Head from 'next/head';

import withLayout from '../lib/withLayout';

function Index() {
  return (
    <div className="Login" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <form action="/main">
  		<label> Username: &nbsp;
    	<input type="text"/>
  		</label>
  		<br/><br/>
  		<label> Password: &nbsp;&nbsp;
  		<input type="Password" />
  		</label>
  		<br/><br/>
  		<input type="submit" value="Login"/>
		</form>
    </div>
  );
}

export default withLayout(Index);
