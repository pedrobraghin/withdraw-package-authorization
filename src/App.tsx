import { PDF } from "./components/PDF";
import { Form } from "./components/Form";
import { useData } from "./hooks/useData";
import { PDFViewer } from "@react-pdf/renderer";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <DataProvider>
      <Container />
    </DataProvider>
  );
}

function Container() {
  const { state } = useData();

  return (
    <div>
      <main className="flex flex-col items-center gap-5 py-10 px-5">
        <Form />
        <PDFViewer width="100%" height="600px" showToolbar>
          <PDF data={state} />
        </PDFViewer>
      </main>
    </div>
  );
}

export default App;
