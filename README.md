# Cryptocurrency Finder App

This is a simple React application that allows users to search and view cryptocurrency data using the CoinStats API.

---

## Features

- **Cryptocurrency Search**: Search for cryptocurrencies by name.
- **Live Data**: Fetches real-time data from the CoinStats API.
- **Detailed Information**:
  - Rank
  - Name
  - Symbol
  - Market Cap
  - Price
  - Available Supply
- **Responsive Design**: Optimized layout with CSS for better user experience.

---

## Technologies Used

- **React** (CRA - Create React App)
- **Axios** for API requests
- **CSS** for styling
- **CoinStats API** for cryptocurrency data

---

## How to Run the Project

### 1. Clone the Repository
```bash
git clone https://premqer/crypto-finder.git
```

### 2. Install Dependencies
```bash
cd crypto-finder
npm install
```

### 3. Add API Key
- Create a `.env` file in the root directory.
- Add your CoinStats API key:
```env
REACT_APP_API_KEY=your_api_key_here
```

### 4. Start the Development Server
```bash
npm start
```

---

## API Integration
- **CoinStats API**: Fetches the top 20 cryptocurrencies.
- **API Endpoint**: `https://openapiv1.coinstats.app/coins`
- **Authentication**: Uses API key in the request header.

---

## Project Structure
```
crypto-finder/
│
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .env
├── package.json
└── README.md
```

---


## License
This project is licensed under the MIT License.

---

Happy coding! 🚀

