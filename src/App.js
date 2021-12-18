import logo from './logo.svg';
import './App.css';

const ipfsClient = require("ipfs-http-client");
 
const ipfs = ipfsClient("http://localhost:8080/ipfs/QmQPeNsJPyVWPFDVHb77w8G42Fvo15z4bG2X8D2GhfbSXc");
const ver = await ipfs.version();
console.log ("IPFS Version=", ver);

function App() {
  return (
  <div>
    <h1> My IPFS Test on React</h1>
    </div>
  );
}

export default App;
