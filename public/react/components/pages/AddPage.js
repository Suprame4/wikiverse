import react, { useState } from 'react'
import apiURL from '../../api';

const AddPage = ({pages}) => {
	
	//create the form data
	const [formData, setFormData] = useState({
		title: '',
		content: '',
		authorName: '',
		authorEmail: '',
		tags: ''
	})

	const handleSubmit = async (event) => {
		event.preventDefault()

		const response = await fetch(`${apiURL}/wiki`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: formData.title,
			content: formData.content,
			name: formData.authorName,
			email: formData.authorEmail,
			tags: formData.tags
			})
		})
		const data = await response.json()
	}

	const handleChange = event => {
		const {name, value } = event.target
		setFormData(prevousState => ({
			...prevousState, 
			[name]: value 
		}))
	}

	return (
		<>
		<h1>Wikiverse - Add a Page</h1>
		
			<form onSubmit={handleSubmit}>
				<div>
					Title <br/>
					<input placeholder="title" type="text" id="title" name="title" value={formData.title} onChange={handleChange} required/>
				</div>
				<div>
					Content <br/>
					<input placeholder="Article Content"  id="content" name="content" value={formData.content} onChange={handleChange} required/>
				</div>
				<div>
					Name <br/>
					<input placeholder="Author Name" type="text" id="authorName" name="authorName" value={formData.authorName} onChange={handleChange} required/>
				</div>
				<div>
					Email <br/>
					<input placeholder="Author Email" type="email" id="authorEmail"  name="authorEmail" value={formData.authorEmail} onChange={handleChange} required/>
				</div>
				<div>
					Tags <br/>
					<input placeholder="" type="text" id="tags" name="tags" value={formData.tags} onChange={handleChange}/>
				</div>
				<button type="submit">Add Page</button>
			</form>
		</>
	)
}

export default AddPage;