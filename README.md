# DigiBits Document Submission System

This project provides a simple document upload server and Vue.js client for the public to submit documents to the telecommunications regulator of eSwatini.

## Server Setup

1. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Run the Flask server:
   ```bash
   python app.py
   ```
   Uploaded files are stored in the `uploads` directory.

## Client Setup

The Vue client lives in the `client` folder.

```bash
cd client
npm install
npm run serve
```

## Running Tests

Execute all tests with:

```bash
pytest
```

## License

MIT
