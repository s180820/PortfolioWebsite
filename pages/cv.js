import { Container, Heading, Button } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import React, { useState } from "react";

const Cv = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    const response = await fetch("CV.pdf");
    const pdfBlob = await response.blob();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    setDownloading(false);
  };

  return (
    <Layout title="CV">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          CV
        </Heading>
        <Button onClick={handleDownload} disabled={downloading} mb={4}>
          {downloading ? "Downloading..." : "Download PDF"}
        </Button>
        <embed
          src="CV.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0"
          width="800px"
          height="1130px"
        />
      </Container>
    </Layout>
  );
};

export default Cv;