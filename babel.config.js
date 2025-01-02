module.exports = function (api) {
	api.cache(true);
  
	const presets = [
	  [
		"@babel/preset-env",
		{
		  targets: {
			esmodules: true, // Assicura che il codice sia compatibile con i browser che supportano i moduli ES
		  },
		  loose: false, // Disabilita la modalità loose per evitare trasformazioni indesiderate
		  modules: false, // Mantieni i moduli ES (evita la trasformazione in CommonJS)
		},
	  ],
	  "@babel/preset-react", // Aggiungi supporto per JSX
	];
  
	const plugins = [
	  // Puoi aggiungere eventuali plugin qui
	];
  
	return {
	  presets,
	  plugins,
	  sourceType: "module", // Assicura che il progetto utilizzi i moduli ES (necessario per import/export)
	};
  };
  