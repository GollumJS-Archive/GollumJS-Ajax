GollumJS.config = GollumJS.Utils.extend ({
	
	node: {
		gollumjs_ajax_path: typeof __dirname !== 'undefined' ? __dirname : "" 
	},

	src: {
		path: [ '%node.gollumjs_ajax_path%/index.js' ],
		excludesPath: ["%node.gollumjs_ajax_path%/src"],
	},
	
	services: {
		
		ajaxProxy: {
			class: 'GollumJS.Ajax.Proxy'
		}
		
	}

}, GollumJS.config);
