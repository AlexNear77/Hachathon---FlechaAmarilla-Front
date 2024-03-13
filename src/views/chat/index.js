import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Button, CardContent, Grid, Typography, TextField } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import SendIcon from '@mui/icons-material/Send';

// ==============================|| CHAT VIEW ||============================== //

const ChatView = () => {
  const [sessionId, setSessionId] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async (event) => {
    event.preventDefault();

    const requestBody = {
      sessionId,
      prompt: message
    };

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <MainCard content={false}>
      <CardContent>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Typography variant="h4">Chat</Typography>
          </Grid>
          <Grid item xs={12}>
            {/* Chat messages would go here */}
            <p>Response: {response}</p>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={sessionId}
                  onChange={(e) => setSessionId(e.target.value)}
                  placeholder="Session ID"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message"
                />
              </Grid>
              <Grid item xs={2}>
                <Button fullWidth variant="contained" color="primary" endIcon={<SendIcon />} onClick={handleSend}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </MainCard>
  );
};

ChatView.propTypes = {
  isLoading: PropTypes.bool
};

export default ChatView;