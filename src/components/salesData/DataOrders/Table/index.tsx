import { useDocument } from "react-firebase-hooks/firestore";
import { useEffect, useRef, useState, useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { style } from "../../../../style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { useOrderResume } from "../../../../hooks/useOrderResume";
//senda supabase = 4vv9nCtyNGgdVtIN
const TableData = () => {
  const resume = useOrderResume();

  const [indexMounth, setIndexMounth] = useState<number>(0);
  const [phraseAccodion, setPhraseAccodion] = useState({
    phrase: "Exibir tabela",
    boolean: false,
  });

  const { width_sx, width_md, heigth_sx } = style.dimensions;
  const { sx, md, lg, fontweight } = style.fonts;
  const styleTab = {
    width: width_sx,
    border: style.border.b,
    p: style.spaccing.padding_sx,
    height: heigth_sx,
  };

  const rows = [
    // orders.map((e) =>
    //   e.data.map((a) => createData(a.name, a.quantity, a.price * a.quantity))
    // ),
  ];
  // const result = orders.reduce((acc, curr) => {
  //   const index = acc.indexOf(({ id }) => id === curr.id);

  //   if (index !== -1) {
  //     acc[index] = acc[index].total_price + curr.total_price;
  //   }
  // }, [] as any);
  const mounth = [
    ["Janeiro"],
    ["Fevereiro"],
    ["Março"],
    ["Abril"],
    ["Maio"],
    ["Junho"],
    ["Julho"],
    ["Agosto"],
    ["Setembro"],
    ["Outubro"],
    ["Novembro"],
    ["Dezembro"],
  ];

  // useEffect(() => {
  //   database.ref("/orders/rabkKwBdXsjHpGGRlEhh").remove();
  // }, []);

  // const editPhraseAccordion = () => {
  //   if (!phraseAccodion.boolean) {
  //     setPhraseAccodion({ phrase: "Ocultar Tabela", boolean: true });
  //   } else {
  //     setPhraseAccodion({ phrase: "Exibir Tabela", boolean: false });
  //   }
  // };

  return (
    <TableContainer component={Paper} sx={{ mt: style.spaccing.m_sx }}>
      <Table aria-label="caption table">
        {/* <caption>Total Vendas: {totalSales}</caption> */}
        <TableHead sx={{ p: style.spaccing.padding_sx }}>
          <TableRow>
            <TableCell align="center" sx={styleTab}>
              <ArrowBackIosIcon
                onClick={() => setIndexMounth((old) => old - 1)}
                color="warning"
              />
            </TableCell>
            <TableCell
              align="center"
              sx={{
                display: "block",
                width: width_md,
                ml: 11,
                fontSize: lg,
                fontWeight: fontweight,
              }}
            >
              {mounth[indexMounth]}
            </TableCell>
            <TableCell align="center" sx={styleTab}>
              <ArrowForwardIosIcon
                onClick={() => setIndexMounth((old) => old + 1)}
                color="warning"
              />
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      {/* cmç aqui os dados */}
      <Accordion
        sx={{ mt: 6 }}
        onClick={() => {
          // setPhraseAccodion({ phrase: "Ocultar Tabela", boolean: true });
          // editPhraseAccordion();
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="warning" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="gray" fontSize={lg} fontWeight={fontweight}>
            {phraseAccodion.phrase}
          </Typography>
        </AccordionSummary>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: lg - 2 }}>Lanches</TableCell>
              <TableCell sx={{ fontSize: lg - 2 }} align="right">
                Qnt
              </TableCell>
              <TableCell sx={{ fontSize: lg - 2 }} align="right">
                Total
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resume.map(({ name, qnt, total }) => (
              <>
                <>
                  <TableRow key={name}>
                    <TableCell
                      sx={{
                        fontSize: md + 4,
                        fontWeight: fontweight,
                      }}
                      component="th"
                      scope="row"
                    >
                      {name}
                    </TableCell>
                    <TableCell align="right">{qnt}</TableCell>
                    <TableCell align="right">{total}</TableCell>
                  </TableRow>
                </>
              </>
            ))}
          </TableBody>
        </Table>
      </Accordion>
    </TableContainer>
  );
};
export default TableData;
