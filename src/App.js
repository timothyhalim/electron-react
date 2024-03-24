import './App.css';

function App() {
  
  if (!("Notification" in window)) {
    console.log("Browser does not support desktop notification");
  } else {
    Notification.requestPermission();
  }

  function showNotification() {
    new Notification('Hello World')
  }

  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", height:"100%"}}>
      <div style={{display:"flex", justifyContent:"center", height:"100px"}}>
        <button onClick={showNotification}>Show notification</button>
      </div>
    </div>
  )
}

export default App;