import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";
import { PDFInterface } from "../@types";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    textTransform: "uppercase",
    marginVertical: 32,
    textDecoration: "underline",
    fontWeight: "black",
  },
  content: {
    textAlign: "justify",
    fontSize: "14px",
  },
  underline: {
    textDecoration: "underline",
  },
  location: {
    textAlign: "right",
    fontSize: "14px",
  },
  locationContainer: {
    marginTop: 64,
  },
  signatureContainer: {
    fontSize: "14px",
    marginVertical: 32,
    gap: 3,
  },
  signature: {
    width: "300px",
    textDecoration: "underline",
    borderBottom: 2,
  },
});

interface PDFProps {
  data: PDFInterface;
}

export function PDF({ data: props }: PDFProps) {
  const currentDate = new Intl.DateTimeFormat("pt-br", {
    dateStyle: "full",
    timeStyle: undefined,
  }).format(new Date());

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Autorização</Text>
          <View>
            <Text style={styles.content}>
              Autorizo <Text style={styles.underline}>{props?.personName}</Text>{" "}
              RG n°
              <Text style={styles.underline}>{props?.personRG}</Text>, CPF n°
              <Text style={styles.underline}>{props?.personCPF}</Text>, retirar
              o objeto N°{" "}
              <Text style={styles.underline}>{props?.objectCode}</Text> postado
              por <Text style={styles.underline}>{props?.issuingCompany}</Text>{" "}
              e a mim destinado.
            </Text>
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>Local e data</Text>
            <Text style={styles.location}>
              {props?.location}, {currentDate}
            </Text>
          </View>
          <View style={styles.signatureContainer}>
            <Text style={styles.signature}></Text>
            <Text>Nome: {props?.ownerName}</Text>
            <Text>RG: {props?.ownerRG}</Text>
            <Text>CPF: {props?.ownerCPF}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
