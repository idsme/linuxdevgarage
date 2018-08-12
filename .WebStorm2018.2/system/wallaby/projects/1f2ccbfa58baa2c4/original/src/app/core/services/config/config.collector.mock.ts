export class ConfigCollectorMock {
  getConfig() {
	return {
		api: {
		'endpoints' : {
			'tray' : ['/api/trays', null, 'ENDPOINT_TRAY_API'],
			'dossier': ['/api/dossier', null, 'ENDPOINT_DOSSIER_API'],
			'product': ['/api/product', null, 'ENDPOINT_PRODUCT_API'],
			'account': ['/api/account', null, 'ENDPOINT_ACCOUNT_API']
		},
		'maxRetries' : 80,
		'interval' : 250,
		'warningTime' : 8
		},
	};
  }

  getOverrides() {
	return {
		'ENDPOINT_TRAY_API': '/api/new-tray'
	};
  }
}
