const OpenAI = require('openai');

class OpenAIInstance {
    constructor() {
        this.OPENAI_API_KEY = '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';
        this.instance = new OpenAI(this.OPENAI_API_KEY);
    }

    getInstance() {
        return this.instance;
    }
}

const openaiInstance = new OpenAIInstance().getInstance();

module.exports = openaiInstance;
