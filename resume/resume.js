generateResume = () => {
    try {
        const jobDescription = document.getElementById('jobDescription').value;
        const resumeFileInput = document.getElementById('resumeFile').value;

        if (jobDescription === '' || !resumeFileInput === '') {
            alert('Please fill all the fields');
            return;
        }

        const resumeData = {
            "jobDescription": jobDescription,
            "resumeFile": resumeFileInput
        }

        const response = fetch(window.location.origin + '/getResume', {
            method: 'POST',
            body: JSON.stringify(resumeData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.blob();
        }).then((blob) => {
            console.log(blob);
        });
        // xhttp = new XMLHttpRequest();
        // xhttp.onload = function() {
        //     document.getElementById('resumeFile').value = ''; // Clear the file input
        //     document.getElementById('resumeFile').innerHTML = this.responseText;
        // };

        // xhttp.open('POST', '/getResume', true);
        // xhttp.send(formData);
    } catch (err) {
        console.log(err);
    }
};
