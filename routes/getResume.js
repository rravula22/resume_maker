const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const openai = new OpenAI({
    apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
  });
router.post('/', (req, res) => {
    if(req.body.jobDescription === '' || req.body.resumeFile === '') {
        res.status(400).send('Please fill all the fields');
        return;
    }
    const { jobDescription, resumeFile } = req.body;
    const prompt = `Prompt: Please generate a new resume based on the following job description and resume template:\n\nJob Description: ${jobDescription}\n\nResume Template:\n${resumeFile}`;

    const messages = [
        { role: 'system', content: 'You are a helpful assistant that generates resumes.' },
        { role: 'user', content: prompt },
    ];
    try {
        (async () => {
            const completion = await openai.chat.completions.create({
                messages,
                model: 'gpt-3.5-turbo',
            });

            const generatedResume = completion.choices[0].message.content;
            res.status(200).send(generatedResume);
        })();
    }
    catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router;