// 1. Imports (at the very top)
import UserProfile from './components/UserProfile'; // <-- this is the component import
import './App.css'; // optional, for styling

// 2. App function
function App() {
  return (
    <div className="App">
      {/* Using the imported component */}
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />
    </div>
  );
}

// 3. Export the App so Vite/React can render it
export default App;



