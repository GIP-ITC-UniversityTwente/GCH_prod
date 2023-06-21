//important: first value in the array is considered as default value for the property
//this file is visible to the server-side
export default {
    serverPort: [4000],
    sparqlEndpoint: {
        'generic': {
            host: 'localhost', port: 8890, path: '/sparql', endpointType: 'virtuoso'
        },
        //Note: if graphName is not specified, the identifer used for configuration will be used as graphName
        //Example config for connecting to a Stardog triple store, replace testDB with the name of your DB
        // read more at https://www.stardog.com/docs/#_stardog_resources

        //Example for connecting to a Virtuoso triple store
        // 'http://dbpedia.org/sparql': {
        //     host: 'dbpedia.org', port: 80, path: '/sparql', graphName: 'default', endpointType: 'virtuoso', protocol: 'https'
        // },
        'Competences': {
            host: 'api.data.pldn.nl', port: 80, path: '/datasets/GeoCourseHub/GCH/services/GCH/sparql', graphName: 'https://data.pldn.nl/sronzhin/GCH/graphs/claudia', endpointType: 'virtuoso', protocol: 'https'
        },
        'Courses and Learning Units': {
            host: 'api.data.pldn.nl', port: 80, path: '/datasets/GeoCourseHub/GCH/services/GCH/sparql', graphName: 'https://data.pldn.nl/sronzhin/GCH/graphs/claudia', endpointType: 'virtuoso', protocol: 'https'
        },
        'Learning Activities': {
            host: 'api.data.pldn.nl', port: 80, path: '/datasets/GeoCourseHub/GCH/services/GCH/sparql', graphName: 'https://data.pldn.nl/sronzhin/GCH/graphs/claudia', endpointType: 'virtuoso', protocol: 'https'
        },
        'mgeo': {
            host: 'api.data.pldn.nl', port: 80, path: '/datasets/GeoCourseHub/GCH/services/GCH/sparql', graphName: 'https://data.pldn.nl/sronzhin/GCH/graphs/mgeo', endpointType: 'virtuoso', protocol: 'https'
        }
    },
    dbpediaLookupService: [
        { host: 'lookup.dbpedia.org' }
    ],
    dbpediaSpotlightService: [
        { host: 'api.dbpedia-spotlight.org', port: 80, path: '/en/annotate' }
    ],
    //it is used only if you enabled recaptcha feature for user authentication
    //get keys from https://www.google.com/recaptcha
    googleRecaptchaService: {
        siteKey: ['put your google recaptcha site key here...'],
        secretKey: ['put your google recaptcha secret key here...']
    }
};
