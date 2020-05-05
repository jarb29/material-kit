const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      /////URL
      baseURL: "http://127.0.0.1:5000",

      //Variables para crear el Modelo
      numero_ot: [],
      nombre_programa: [],

      //Variables para crear el Nestic
      modelo_elegido: [],
      programa_nestic: [],
      numero_piezas_criticas: [],
      tiempo_corte: [],
      espesor: [],
      longitud_nestic: [],

      //Variables para crear las Piezas
      nombre_pieza: [],
      cantidadPiezasPorPlancha: [],
      crearLongitudCortePieza: [],
      nesticElegido: [],

      // Variables para plegado
      plegadoModeloSeleccionado: [],
      plegadoPiezaSeleccionada: [],
      plegadoMaquinaSeleccionada: [],
      plegadoOperadorSeleccionado: [],
      plegadoCantidadPiezas: [],

      // variables de retoro del back
      errorModelo: [],
      infoCargandoMoldeo: []
    },

    actions: {
      /////// Funcion para crear el modelo

      crearModelo: e => {
        console.log(e, "Nombre del Modelo");
        setStore({
          nombre_programa: e
        });
      },

      crearOT: e => {
        console.log(e)
        setStore({
          numero_ot: e
        });
      },

      /////// Funcion para crear el programa nestic
      crearModeloElegido: e => {
        console.log(e.target.value);
        setStore({
          modelo_elegido: e.target.value
        });
      },

      crearProgramaNestic: e => {
        console.log(e);
        setStore({
          programa_nestic: e
        });
      },

      crearCantidadPiezasCriticas: e => {
        console.log(e);
        setStore({
          numero_piezas_criticas: e
        });
      },

      crearTiempoCorte: e => {
        console.log(e);
        setStore({
          tiempo_corte: e
        });
      },

      crearEspesor: e => {
        console.log(e);
        setStore({
          espesor: e
        });
      },
      crearLongitudNestic: e => {
        console.log(e);
        setStore({
          longitud_nestic: e
        });
      },

      /////// Funcion para cargar las piezas

      crearNombrePieza: e => {
        console.log(e);
        setStore({
          nombre_pieza: e
        });
      },

      crearCantidadPiezasPorPlancha: e => {
        console.log(e);
        setStore({
          cantidadPiezasPorPlancha: e
        });
      },

      crearLongitudCortePieza: e => {
        console.log(e);
        setStore({
          crearLongitudCortePieza: e
        });
      },

      crearNesticElegido: e => {
        console.log(e.target.value);
        setStore({
          nesticElegido: e.target.value
        });
      },

      //Plegado

      cargarDatosPlegado: e => {
        setStore({
          [e.target.name]: e.target.value
        });
      },

      cargarDatosPlegadoformulario: e => {
        setStore({
          plegadoCantidadPiezas: e
        });
      },

      // fecthing data

      creandoModelo: e => {
        const store = getStore();
        console.log(store.numero_ot);

        let data = {
          numero_ot: store.numero_ot,
          nombre_programa: store.nombre_programa
        };

        getActions().registro("/api/cargarprograma", data);
      },

      registro: async (url, data) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato);
        if (dato.msg) {
          setStore({
            errorModelo: dato
          });
        } else {
          setStore({
            infoCargandoMoldeo: dato
          });
        }
      }
    }
  };
};

export default getState;
