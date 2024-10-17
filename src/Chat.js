import React, { useState } from 'react';
import axios from 'axios';
import { CohereClient } from "cohere-ai";


const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
        // const cohere = new CohereClient({
        //     token: process.env.REACT_APP_COHERE_API_KEY
        // });

        // const chat = await cohere.chat({
        //     model: "command",
        //     message: "Tell me a story in 5 parts!",
        // });
    
        // console.log(chat);
        
        
      const apiUrl = 'https://api.openai.com/v1/chat/completions'; // Update with the correct API endpoint
        const apiKey = process.env.REACT_APP_COHERE_API_KEY
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      };

      const requestBody = {
        messages: [{ role: 'user', content: input }],
      };

      const { data } = await axios.post(apiUrl, requestBody, { headers });

      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;

// import React, { useState } from 'react';

// import { CohereClient } from "cohere-ai";

// const Chat = () => {
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState('');
    
//   const sendMessage = async () => {
//     try {
//         const cohere = new CohereClient({
//             token: process.env.REACT_APP_COHERE_API_KEY
//         });
        
//         const chat = await cohere.chat({
//             model: "command",
//             message: "Tell me a story in 5 parts!",
//         });
    
//         console.log(chat);

//         setResponse(chat);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//       <div>
//         <p>{response}</p>
//       </div>
//     </div>
//   );
// };

// export default Chat;

