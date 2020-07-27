function makeNotesArray() {
	return [
		{
			id: 1,
			note_name: 'First note!',
			folder_id: '1',
			content: 'Note content',
			modified: '2019-01-03T00:00:00.000Z',
		},
		{
			id: 2,
			note_name: 'Second note!',
			folder_id: '2',
			content: 'Note content',
			modified: '2018-08-15T23:00:00.000Z',
		},
		{
			id: 3,
			note_name: 'Third note!',
			folder_id: '3',
			content: 'Note content',
			modified: '2018-03-01T00:00:00.000Z',
		},
		{
			id: 4,
			note_name: 'Fourth note!',
			folder_id: '4',
			content: 'Note content',
			modified: '2019-01-04T00:00:00.000Z',
		},
	];
}
	
function makeMaliciousNote() {
	const maliciousNote = {
		id: 911,
		note_name: 'Malicious note! <script>alert("xss");</script>',
		folder_id: '1',
		content: 'Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.',
		modified: new Date().toISOString(),
	}
	const expectedNote = {
		...maliciousNote,
		note_name: 'Malicious note!  &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
		content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
	}
	return {
		maliciousNote,
		expectedNote,
	}
}

module.exports = {
	makeNotesArray,
	makeMaliciousNote,
}