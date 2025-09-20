import { useState } from 'react';
import './App.css';
import { Box, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress } from '@mui/material';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handeleSubmit = async () => {

  };
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant='h3' component="h1" sx={{ mb: 3 }}>
        Hello Welcome To Inbox-AI
      </Typography>

      <Box sx={{ mx: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select value={tone || ''}
            label={"tone (Optional)"}
            onChange={(e) => setTone(e.target.value)}>
            <MenuItem value=" ">None</MenuItem>
            <MenuItem value="professional">Professionla</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant='contained'
          onClick={handeleSubmit}
          disabled={!emailContent || loading}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : "Generate Reply"}
        </Button>
      </Box>

      {error && (
        <Typography color='error' sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      {/* {generatedReply && (
        <Box sx={{ mt: 3 }}>
          <Typography variant='h6' gutterBottom>
            Generated Reply
            <TextField
              fullWidth
              multiline
              rows={6}
              variant='outlined'
              label="Original Email Content"
              value={generatedReply}
              inputProps={{ readOnly: true }}
            // sx={{ mb: 2 }}
            />
            <Button variant='outlined'
              sx={{ mt: 2 }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy to Clipboard
            </Button>
          </Typography>
        </Box>
      )} */}

      {generatedReply && (
        <Box sx={{ mt: 3 }}>
          <Typography variant='h6' gutterBottom>
            Generated Reply
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant='outlined'
            label="Generated Reply"
            value={generatedReply}
            inputProps={{ readOnly: true }}
          />
          <Button
            variant='outlined'
            sx={{ mt: 2 }}
            onClick={() => navigator.clipboard.writeText(generatedReply)}
          >
            Copy to Clipboard
          </Button>
        </Box>
      )}

    </Container>
  )
}

export default App;
