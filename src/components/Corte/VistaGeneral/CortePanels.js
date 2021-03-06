import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Info from "@material-ui/icons/Info";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import CorteTablaPlanchasCortadas from "./CorteTablaPlanchasCortadas";
import CorteTablaDisponEstufas from "./CorteTablaDisponEstufas";
import CorteGrafica from "./CorteGrafica";

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center"
  },
  cardCategory: {
    margin: "0",
    color: "#999999"
  }
};

const useStyles = makeStyles(styles);

export default function CortePanels() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} stats>
          <h3 className={classes.pageSubcategoriesTitle}>
            Material en Proceso
          </h3>
          <br />
          <NavPills
            color="warning"
            alignCenter
            tabs={[
              {
                tabButton: "Planchas Cortadas",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>Plachas Cortadas</h4>
                      <p className={classes.cardCategory}>
                        Total de planchas cortadas por nestic
                      </p>
                    </CardHeader>
                    <CardBody>
                      <CorteTablaPlanchasCortadas />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Disponibilidad para fabricacion",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Disponibilidad de estufas Criticas
                      </h4>
                      <p className={classes.cardCategory}>Desde Corte</p>
                    </CardHeader>
                    <CardBody>
                      <CorteTablaDisponEstufas />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Subproductos por modelo",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Produccion en tiempo
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      <CorteGrafica />
                    </CardBody>
                  </Card>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
