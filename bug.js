```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses `react-router-dom` v6.  A common mistake is forgetting to wrap the `<Routes>` component with the `<BrowserRouter>` component.  The `<BrowserRouter>` provides the routing context.  Without it, the routes will not work correctly.  Another potential issue could be incorrect path definitions or missing `element` props within the `<Route>` components.