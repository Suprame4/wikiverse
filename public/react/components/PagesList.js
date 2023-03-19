import React from 'react';
import Page from './Page';

const PagesList = ({pages}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} />
			})
		}
	</>
} 

export default PagesList;