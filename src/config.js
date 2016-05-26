GollumJS.config = GollumJS.Utils.extend ({
	
	node: {
		gollumjs_ajax_path: typeof __dirname !== 'undefined' ? __dirname : "" 
	},

	src: {
		path: [ '%node.gollumjs_ajax_path%/index.js' ],
		excludesPath: ["%node.gollumjs_ajax_path%/src"],
	},
	
	className: {
		ajax: {
			ajax: 'GollumJS.Ajax',
			proxy: 'GollumJS.Ajax.Proxy'
		}
	},
	
	services: {
		ajax: {
			class: '%className.ajax.ajax%'
		},
		ajaxProxy: {
			class: '%className.ajax.proxy%'
		}
	}

}, GollumJS.config);
