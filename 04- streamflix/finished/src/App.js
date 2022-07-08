import { Layout } from "./components/Layout";
import { ShowsProvider } from "./context/ShowsContext";
import Router from "./routes";

function App() {
  return (
    <Layout>
      <ShowsProvider>
          <Router />
      </ShowsProvider>
    </Layout>
  );
}

export default App;
