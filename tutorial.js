const { WebClient } = require('@slack/web-api');
// Create a new instance of the WebClient class with the token read from your environment variable

const web = new WebClient(process.env.SLACK_TOKEN);
//const web = new WebClient('xoxb-733776815877-947098775924-2iNlitUFi5laA94zv31t4Gch');

// The current date
//const currentTime = new Date().toTimeString();

(async () => {

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#tech-ops',
	  text: `<https://3.basecamp.com/4314557/buckets/14230973/todosets/2158173643 | Basecamp To-Do list>
	   /n<https://public.3.basecamp.com/p/SYM4eeJQY3mYA3ucmHnFgTKd | Basecamp Public To-Do list> 
	   /n<https://3.basecamp.com/4314557/buckets/14230973/questionnaires/2158173648 | Basecamp Check-in>`,
    });
  } catch (error) {
    console.log(error);
  }

  console.log('Message posted!');
})();