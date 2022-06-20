import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api';
import './App.css';

function App() {
  const [text, setText] = useState(0);
  
  useEffect(() => {
    invoke('greet', { name: 'Guy' }).then(setText);
  });

  return (
    <div className="app">
      Text: {text}<br/><br/>
      List:
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  )
}

export default App
