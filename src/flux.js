const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      /////URL
      baseURL: "http://127.0.0.1:5000",

      //Variables para crear el Modelo
      numero_ot: [],
      nombre_programa: [],
      cantiadUnidadesFabricarEnLaOt: [],

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

      // Variables para las planchas cortadas
      planchas_cortadas: "",
      ot_cortada: "",
      operador: "",
      nestic_cortado: "",
      estufas_modelar: [],

      // Variables para plegado
      plegado_modelo_seleccionado: [],
      plegadoPiezaSeleccionada: [],
      plegadoMaquinaSeleccionada: [],
      plegadoOperadorSeleccionado: [],
      plegadoCantidadPiezas: [],

      // Variables para pintura
      pinturaCantidadPiezas: [],

      // variables de retornodel back corte
      errorModelo: [],
      piezasDisponiles: [],
      modelosDisponibles: [],
      nesticsDisponibles: [],
      nesticsModelar: [],
      modelosAProduccion: [],
      errorModeloProduccion: [],
      OtDisponiblesProduccion: [],
      nesticDisponiblesProduccion: [],
      nesticCortados: [],
      modeloAModelar: [],
      estufasEnProduccion_datos_totales: [],
      estufasEnProduccion_datos_diarios: [],

      // Variables retorno del back Plegado
      piezasDisponiblesPlegado: [],
      errorpiezasPlegado: [],
      registroPiezasPlegado: [],
      piezasPlegadas: [],
      piezasPlegadasDispoblesProduccion: [],
      PiezasPlegadasValoresMinimos: [],
      piezasEstufasAfabrica: [],

      // Variables del retorno del back Pintura

      errorpiezasPintura: [],
      registroPiezasPintura: [],
      piezasPintadas: [],
      piezasPintadasDispoblesProduccion: [],
      PiezasPintadasValoresMinimos: [],
      piezasPintadasEstufasAfabrica: [],

      // Variables de la linea
      nombre_subproducto: [],
      linea1CantidadPiezas: [],
      SubProducto_seleccionado: [],
      produccion_Cantidad_fabricada: [],

      //  variables de la logica del toda la aplicacion
      modeloFiltrado: [],
      modeloInputParaCaluloTiempo: [],
      inputUnidadesStufas: [],
      valorTiempoNesticCalculado: [],

      // Variables del retorno del back linea1
      errorSubProducto: [],
      registroSubProducto: [],
      subProductosDisponibleslineas: [],
      cantidad_utilizada_por_subproducto: [],

      // Retorno de piezas que integran el sub producto
      registroPiezasIntegranSubProducto: [],
      errorPiezasIntegranSubProducto: [],

      // Retorno del back cuando se crea la produccion
      creandoProduccion: [],
      errorCreandoProduccion: [],

      // Variables Producto Termnado
      producto_terminado_Cantidad_fabricada: [],

      // Produccion disponible

      produccionDisponibles: [],
      todoDisponibleLineas: [],
      todoDisponibleLineasCorte: [],
      corteModeloCritico: [],
      corteNesticCortados: [],
      disponibilidad_fabricacion: [],

      // Retorno del back Producto terminado
      errorCreandoProduccionterminada: [],
      creandoProduccionTerminada: [],
      produccionProductoTerminadoDisponibles: []
    },

    actions: {
      /////// Funcion para crear el modelo

      crearModelo: e => {
        setStore({
          nombre_programa: e
        });
      },

      crearOT: e => {
        setStore({
          numero_ot: e
        });
      },
      cantidadOT: e => {
        setStore({
          cantiadUnidadesFabricarEnLaOt: e
        });
      },

      /////// Funcion para crear el programa nestic
      crearModeloElegido: e => {
        setStore({
          modelo_elegido: e.target.value
        });
      },

      crearProgramaNestic: e => {
        setStore({
          programa_nestic: e
        });
      },

      crearCantidadPiezasCriticas: e => {
        setStore({
          numero_piezas_criticas: e
        });
      },

      crearTiempoCorte: e => {
        setStore({
          tiempo_corte: e
        });
      },

      crearEspesor: e => {
        setStore({
          espesor: e
        });
      },
      crearLongitudNestic: e => {
        setStore({
          longitud_nestic: e
        });
      },
      //calculo de tiempo por producto

      handleToggleNestic: e => {
        setStore({
          modeloInputParaCaluloTiempo: e.target.id,
          inputUnidadesStufas: e.target.value
        });
      },

      handleToggleNesticValor: event => {
        const store = getStore();
        let sum = 0;
        store.nesticsDisponibles.map(nests => {
          // The math is no ok to calculate de number
          if (event.target.name === nests.modelo_elegido) {
            let nuevoValor = parseInt(event.target.value);
            let nuevoNumeroPiezas = nests.numero_piezas_criticas;
            let nuevoTiempoCorte = nests.tiempo_corte;
            const valorPorPieza = parseFloat(nuevoValor / nuevoNumeroPiezas);
            const valorFinal = valorPorPieza * (nuevoTiempoCorte + 0.7);
            sum = Math.round(parseInt(sum, 10) + parseInt(valorFinal, 10) / 60);
          }
          return sum;
        });

        store.modeloFiltrado.map(modelo => {
          if (modelo[3] === event.target.name) {
            modelo[5] = sum;
          }
          setStore({
            valorTiempoNesticCalculado: store.modeloFiltrado
          });
        });
      },

      /////// Funcion para cargar las piezas

      crearNombrePieza: e => {
        setStore({
          nombre_pieza: e
        });
      },

      crearCantidadPiezasPorPlancha: e => {
        setStore({
          cantidadPiezasPorPlancha: e
        });
      },

      crearLongitudCortePieza: e => {
        setStore({
          crearLongitudCortePieza: e
        });
      },

      crearNesticElegido: e => {
        setStore({
          nesticElegido: e.target.value
        });
      },
      // cargando numero de planchas cortadas
      cargarPlanchasCortadas: e => {
        setStore({
          [e.target.name]: e.target.value
        });
      },

      //Plegado

      cargarDatosPlegado: e => {
        console.log(e.target.name);
        console.log(e.target.value, "en la formula esperada");
        setStore({
          [e.target.name]: e.target.value
        });
      },

      //Filtro de modelo

      modeloFiltadroDos: e => {
        const store = getStore();
        setStore({
          modeloFiltrado: e,
          valorTiempoNesticCalculado: e
        });
        sessionStorage.setItem("modeloFiltrado", store.modeloFiltrado);
      },

      /////// fecthing data (POST, PUT)

      creandoModelo: () => {
        const store = getStore();

        let data = {
          numero_ot: store.numero_ot,
          nombre_programa: store.nombre_programa,
          cantiadUnidadesFabricarEnLaOt: store.cantiadUnidadesFabricarEnLaOt
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

        if (dato.msg) {
          setStore({
            errorModelo: dato
          });
        } else {
          setStore({
            piezasDisponiles: dato
          });
        }
      },

      creandoNestic: () => {
        const store = getStore();

        let data = {
          modelo_elegido: store.modelo_elegido,
          programa_nestic: store.programa_nestic,
          numero_piezas_criticas: store.numero_piezas_criticas,
          tiempo_corte: store.tiempo_corte,
          espesor: store.espesor,
          longitud_nestic: store.longitud_nestic
        };

        getActions().registroNestic("/api/crearnesctic", data);
      },

      registroNestic: async (url, data) => {
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
        if (dato.msg) {
          setStore({
            errorModelo: dato
          });
        } else {
          setStore({
            piezasDisponiles: dato
          });
        }
      },

      creandoPiezas: () => {
        const store = getStore();

        let data = {
          nombre_pieza: store.nombre_pieza,
          cantidadPiezasPorPlancha: store.cantidadPiezasPorPlancha,
          crearLongitudCortePieza: store.crearLongitudCortePieza,
          nesticElegido: store.nesticElegido
        };

        getActions().registroNestic("/api/crearpieza", data);
      },

      registroPiezas: async (url, data) => {
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
        if (dato.msg) {
          setStore({
            errorModelo: dato
          });
        } else {
          setStore({
            piezasDisponiles: dato
          });
        }
      },

      // Creandon programas a produccion
      programasAProduccion: event => {
        let data = {
          modelo_produccion: event[3],
          ot_produccion: event[4],
          cantidad_producir: event[0]
        };
        getActions().registroProgramasProduccion(
          "/api/modelosproduccion",
          data
        );
      },

      registroProgramasProduccion: async (url, data) => {
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

        if (dato.msg) {
          setStore({
            errorModeloProduccion: dato
          });
        } else {
          setStore({
            modelosAProduccion: dato
          });
        }
      },

      // Crendo Nestics de produccion a corte
      nesticACorte: () => {
        const store = getStore();

        let data = {
          planchas_cortadas: store.planchas_cortadas,
          ot_cortada: store.ot_cortada,
          operador: store.operador,
          nestic_cortado: store.nestic_cortado
        };
        getActions().registroNestiProduccion("/api/plachascortadas", data);
      },

      registroNestiProduccion: async (url, data) => {
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

        if (dato.msg) {
          setStore({
            errorModeloProduccion: dato
          });
        } else {
          setStore({
            nesticCortados: dato
          });
        }
      },

      //Creando la base de datos de PLEGADO
      piezasEnPlegado: () => {
        const store = getStore();

        let data = {
          plegado_ot_seleccionado: store.plegado_modelo_seleccionado,
          plegadoPiezaSeleccionada: store.plegadoPiezaSeleccionada,
          plegadoMaquinaSeleccionada: store.plegadoMaquinaSeleccionada,
          plegadoOperadorSeleccionado: store.plegadoOperadorSeleccionado,
          plegadoCantidadPiezas: store.plegadoCantidadPiezas
        };

        getActions().registroPiezasPlegado("/api/piezasplegado", data);
      },

      registroPiezasPlegado: async (url, data) => {
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

        if (dato.msg) {
          setStore({
            errorpiezasPlegado: dato
          });
        } else {
          setStore({
            registroPiezasPlegado: dato
          });
        }
      },

      //Creando la base de datos de Pintura

      piezasEnPintura: () => {
        const store = getStore();

        let data = {
          pintura_ot_seleccionado: store.plegado_modelo_seleccionado,
          pinturaPiezaSeleccionada: store.plegadoPiezaSeleccionada,
          pinturaCantidadPiezas: store.pinturaCantidadPiezas
        };

        getActions().registroPiezasPintura("/api/piezaspintura", data);
      },

      registroPiezasPintura: async (url, data) => {
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

        if (dato.msg) {
          setStore({
            errorpiezasPintura: dato
          });
        } else {
          setStore({
            registroPiezasPintura: dato
          });
        }
      },

      //Creando la base de datos de las Lineas

      creandoSubProductos: () => {
        const store = getStore();

        let data = {
          Linea1NombreSubproducto: store.nombre_subproducto,
          subProducto_ot_seleccionado: store.plegado_modelo_seleccionado
        };

        getActions().registroSubProducto("/api/creandoSubProductos", data);
      },

      registroSubProducto: async (url, data) => {
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

        if (dato.msg) {
          setStore({
            errorSubProducto: dato
          });
        } else {
          setStore({
            registroSubProducto: dato
          });
        }
      },
      //Creando la base de datos dde piezas que integran el subproducto

      creandoPiezasIntegranSubProducto: () => {
        const store = getStore();

        let data = {
          subProductoSeleccionado: store.SubProducto_seleccionado,
          subProducto_ot_seleccionado: store.plegado_modelo_seleccionado,
          piezaSeleccionaIntegraSubproducto: store.plegadoPiezaSeleccionada,
          cantidad_utilizada_por_subproducto:
            store.cantidad_utilizada_por_subproducto
        };

        getActions().registroPiezasIntegranSubProducto(
          "/api/creandopiezasIntegranSubProductos",
          data
        );
      },

      registroPiezasIntegranSubProducto: async (url, data) => {
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

        if (dato.msg) {
          setStore({
            errorPiezasIntegranSubProducto: dato
          });
        } else {
          setStore({
            PiezasIntegranSubProducto: dato
          });
        }
      },

      creandoProduccion: () => {
        const store = getStore();

        let data = {
          ot_seleccionada: store.plegado_modelo_seleccionado,
          sub_producto_seleccionado: store.SubProducto_seleccionado,
          produccion_Cantidad_fabricada: store.produccion_Cantidad_fabricada
        };

        getActions().registroDeProduccion("/api/produccion", data);
      },

      registroDeProduccion: async (url, data) => {
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

        if (dato.msg) {
          setStore({
            errorCreandoProduccion: dato
          });
        } else {
          setStore({
            creandoProduccion: dato
          });
        }
      },

      creandoProductoTerminado: () => {
        const store = getStore();

        let data = {
          ot_seleccionada: store.plegado_modelo_seleccionado,
          sub_producto_seleccionado: store.SubProducto_seleccionado,
          producto_terminado_utilizado_estufa:
            store.producto_terminado_Cantidad_fabricada
        };
        console.log(data, "el evento");

        getActions().registroProductoTerminado("/api/productoterminado", data);
      },

      registroProductoTerminado: async (url, data) => {
        console.log(data, "data para el producto terminado");
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
        console.log(dato, "valore del retorno producto terminado");

        if (dato.msg) {
          setStore({
            errorCreandoProduccionterminada: dato
          });
        } else {
          setStore({
            creandoProduccionTerminada: dato
          });
        }
      },

      creandoProduccionProductoTerminado: () => {
        const store = getStore();

        let data = {
          ot_seleccionada: store.plegado_modelo_seleccionado,
          sub_producto_seleccionado: store.SubProducto_seleccionado,
          producto_terminado_utilizado_estufa:
            store.producto_terminado_Cantidad_fabricada
        };
        console.log(data, "el evento");

        getActions().registroProduccionProductoTerminado(
          "/api/produccionproductoterminado",
          data
        );
      },

      registroProduccionProductoTerminado: async (url, data) => {
        console.log(data, "data para el producto terminado");
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
        console.log(dato, "valore del retorno producto terminado");

        if (dato.msg) {
          setStore({
            errorCreandoProduccionterminada: dato
          });
        } else {
          setStore({
            creandoProduccionTerminada: dato
          });
        }
      },

      ////// PARTE PARA OBTENER LA INFORMACION (GET)

      obtenerModelosDisponibles: async () => {
        const store = getStore();

        const { baseURL } = store;
        const resp = await fetch(baseURL + `/api/modelodisponibles`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            modelosDisponibles: dato
          });
        }
      },

      obtenerNesticsDisponibles: async () => {
        const store = getStore();

        const { baseURL } = store;

        const resp = await fetch(baseURL + `/api/Nesticsdisponibles`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            nesticsDisponibles: dato
          });
        }
      },

      obtenerNesticsFiltrados: async e => {
        const store = getStore();

        const { baseURL } = store;
        let nestic_elegido = e.target.value;

        const resp = await fetch(
          baseURL + `/api/nesticsmodelar/${nestic_elegido}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            nesticsModelar: dato
          });
          store.nesticsModelar.push(dato);
        }
      },

      obtenerOtEnProduccion: async () => {
        const store = getStore();

        const { baseURL } = store;
        const resp = await fetch(baseURL + `/api/otProduccion`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            OtDisponiblesProduccion: dato
          });
        }
      },

      obtenerNesticEnProduccion: async e => {
        const store = getStore();
        let numeroOt = e.target.value;

        const { baseURL } = store;
        const resp = await fetch(
          baseURL + `/api/nesticProduccion/${numeroOt}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            nesticDisponiblesProduccion: dato
          });
        }
      },

      modelarEstufas: async () => {
        const store = getStore();
        let numeroOt = store.ot_cortada;
        let estufas = store.estufas_modelar;

        const { baseURL } = store;
        const resp = await fetch(
          baseURL + `/api/modelarEstufas/${numeroOt}/${estufas}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            modeloAModelar: dato
          });
        }
      },

      estufasEnProduccion: async () => {
        const store = getStore();

        const { baseURL } = store;
        const resp = await fetch(baseURL + `/api/tablaestufasProduccion/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            estufasEnProduccion_datos_totales: dato
          });
        }
      },

      // Plegado desde aca plegado
      //obteniedno las piezas disponibles para plegado

      obtenerPiezas: async e => {
        const store = getStore();
        let numeroOt = e.target.value;

        const { baseURL } = store;
        const resp = await fetch(baseURL + `/api/plegadopiezas/${numeroOt}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            piezasDisponiblesPlegado: dato
          });
        }
      },

      obtenerPiezasPlegadas: async () => {
        const store = getStore();

        const { baseURL } = store;
        const resp = await fetch(baseURL + `/api/piezasPlegadas`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato, "retorno plegado");
        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            piezasPlegadas: dato[0],
            piezasPlegadasDispoblesProduccion: dato[1],
            PiezasPlegadasValoresMinimos: dato[2],
            piezasEstufasAfabrica: dato[3]
          });
        }
      },

      obtenerPiezasPintadas: async () => {
        const store = getStore();

        const { baseURL } = store;
        const resp = await fetch(baseURL + "/api/piezasPintadas", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato, "retorno de pintura");
        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            piezasPintadas: dato[0],
            piezasPintadasDispoblesProduccion: dato[1],
            PiezasPintadasValoresMinimos: dato[2],
            piezasPintadasEstufasAfabrica: dato[3]
          });
        }
      },
      obtenerSubProductosDisponible: async e => {
        const store = getStore();
        let numeroOt = e.target.value;

        const { baseURL } = store;
        const resp = await fetch(
          baseURL + `/api/obtenerSubproducto/${numeroOt}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            subProductosDisponibleslineas: dato
          });
        }
      },

      obtenerProduccionDisponible: async () => {
        const store = getStore();

        const { baseURL } = store;
        const resp = await fetch(baseURL + `/api/produccionDisponible`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            produccionDisponibles: dato
          });
        }
      },

      //obteniedo lo disponible menos lo usado por cada linea corte
      obtenerTodoLoDisponibleLineas: async () => {
        const store = getStore();

        const { baseURL } = store;
        const resp = await fetch(
          baseURL + `/api/producionPorModeloDisponible`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            errortodoDisponibleLineas: dato
          });
        } else {
          setStore({
            todoDisponibleLineasCorte: dato[0],
            corteModeloCritico: dato[1],
            corteNesticCortados: dato[2],
            disponibilidad_fabricacion: dato[3]
          });
        }
      },

      obtenerProduccionProductoTerminadoDisponible: async () => {
        const store = getStore();

        const { baseURL } = store;
        const resp = await fetch(
          baseURL + `/api/produccionprductoterminadoDisponible`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const dato = await resp.json();

        console.log(dato, "datos del retorno de la ultima linea");

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            produccionProductoTerminadoDisponibles: dato
          });
        }
      }
    }
  };
};

export default getState;
