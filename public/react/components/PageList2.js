import React from 'react';
import Page2 from './Page2';

const PageList2 = ({pages}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <Page2 page={page} key={idx} />
			})
		}
	</>
} 

export default PageList2;