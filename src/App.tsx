import Providers from "./providers";
import globals from "./theme/globals";
import { RouterProvider } from "react-router-dom";

import router from "./routes";

function App() {
  return (
    <Providers>
      {globals}

      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
