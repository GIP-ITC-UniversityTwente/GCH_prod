export default {
    facets: {
        'generic': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {

            }
        },
        //Configuration Manager: change the graph name if you use another name in your general.js config
        'http://ld-r.org/configurations': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy->[http://ld-r.org/users]http://xmlns.com/foaf/0.1/accountName'
            ],
            config: {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    objectBrowser: ['TagListBrowser'],
                    position: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset': {
                    shortenURI: 0,
                    position: 3
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    position: 4
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    position: 5
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope': {
                    objectIViewer: ['BasicOptionView'],
                    options: [
                        {label: 'Dataset', value: 'D'},
                        {label: 'Resource', value: 'R'},
                        {label: 'Property', value: 'P'},
                        {label: 'Dataset-Resource', value: 'DR'},
                        {label: 'Dataset-Property', value: 'DP'},
                        {label: 'Resource-Property', value: 'RP'},
                        {label: 'Dataset-Resource-Property', value: 'DRP'},
                    ],
                    position: 2
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType': {
                    position: 6
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy->[http://ld-r.org/users]http://xmlns.com/foaf/0.1/accountName': {
                    label: ['Creator'],
                    position: 7
                }
            }
        },
        //Example Faceted Browser for DBpedia universities
        // 'http://dbpedia.org/sparql': {
        //     list: [
        //         'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://dbpedia.org/ontology/country', 'http://dbpedia.org/property/established'
        //     ],
        //     config: {
        //         'http://dbpedia.org/property/established': {
        //             label: ['Established Year']
        //         },
        //         'http://dbpedia.org/ontology/country': {
        //             objectBrowser: ['TagListBrowser']
        //         }
        //     }
        // },
        'Competences':{
            list: [
                'http://gch.utwente.nl/ontology#isLearningOutcomeOf->http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://gch.utwente.nl/ontology#isLearningOutcomeOf->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#bloomLevel',
                'http://gch.utwente.nl/ontology#bloomLevelName',
                'http://gch.utwente.nl/ontology#hasSubject->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#isLearningUnitLearningOutcomeOf->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#isCourseLearningOutcomeOf->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#isLearningOutcomeOf->http://gch.utwente.nl/ontology#constitutes->http://gch.utwente.nl/ontology#isPartOfSpecialisation->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#isLearningOutcomeOf->http://gch.utwente.nl/ontology#constitutes->http://gch.utwente.nl/ontology#isPartOfProgramme->http://www.w3.org/2000/01/rdf-schema#label'

            ],
            config: {
                'http://gch.utwente.nl/ontology#isLearningOutcomeOf->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Name of education element'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#isLearningOutcomeOf->http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    label: ['Type of education element'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#bloomLevel': {
                    label: ['Bloom Level'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#bloomLevelName': {
                    label: ['Bloom Level Name'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#hasSubject->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Concept'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#isLearningUnitLearningOutcomeOf->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Learning Unit'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#isCourseLearningOutcomeOf->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Course'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#isLearningOutcomeOf->http://gch.utwente.nl/ontology#constitutes->http://gch.utwente.nl/ontology#isPartOfSpecialisation->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Specialisation'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#isLearningOutcomeOf->http://gch.utwente.nl/ontology#constitutes->http://gch.utwente.nl/ontology#isPartOfProgramme->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Programme'],
                    objectBrowser: ['TagListBrowser']
                }
            }
        },
        'Courses and Learning Units':{
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://gch.utwente.nl/ontology#consistsOf->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#consistsOf->http://gch.utwente.nl/ontology#goesThrough->http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://gch.utwente.nl/ontology#hasLearningOutcome->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#hasLearningOutcome->http://gch.utwente.nl/ontology#bloomLevel',
                'http://gch.utwente.nl/ontology#hasLearningOutcome->http://gch.utwente.nl/ontology#bloomLevelName',
                'http://gch.utwente.nl/ontology#hasLearningOutcome->http://gch.utwente.nl/ontology#hasSubject->http://www.w3.org/2000/01/rdf-schema#label'

            ],
            config: {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    label: ['Type of education ']
                },
                'http://gch.utwente.nl/ontology#consistsOf->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Learning Units']
                },
                'http://gch.utwente.nl/ontology#hasLearningOutcome->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Competences'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#hasLearningOutcome->http://gch.utwente.nl/ontology#bloomLevel': {
                    label: ['Bloom Level'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#hasLearningOutcome->http://gch.utwente.nl/ontology#bloomLevelName': {
                    label: ['Bloom Level Name'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#consistsOf->http://gch.utwente.nl/ontology#goesThrough->http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    label: ['Learning Activities'],
                },
                'http://gch.utwente.nl/ontology#hasLearningOutcome->http://gch.utwente.nl/ontology#hasSubject->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Concept'],
                    objectBrowser: ['TagListBrowser']
                }
            }
        },
        'Learning Activities': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'http://gch.utwente.nl/ontology#isLearningActivityOf->http://gch.utwente.nl/ontology#constitutes->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#isLearningActivityOf->http://gch.utwente.nl/ontology#hasLearningOutcome->http://gch.utwente.nl/ontology#bloomLevel',
                'http://gch.utwente.nl/ontology#isLearningActivityOf->http://gch.utwente.nl/ontology#hasLearningOutcome->http://gch.utwente.nl/ontology#hasSubject->http://www.w3.org/2000/01/rdf-schema#label'
            ],
            config: {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    label: ['Type of learning activity'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#isLearningActivityOf->http://gch.utwente.nl/ontology#constitutes->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Course'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#isLearningActivityOf->http://gch.utwente.nl/ontology#hasLearningOutcome->http://gch.utwente.nl/ontology#bloomLevel': {
                    label: ['Bloom Level'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#isLearningActivityOf->http://gch.utwente.nl/ontology#hasLearningOutcome->http://gch.utwente.nl/ontology#hasSubject->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Concept'],
                    objectBrowser: ['TagListBrowser']
                }
            }
        },
        'mgeo':{
            list:[
                'http://gch.utwente.nl/ontology#hasPrerequisiteCourse->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#requiresSoftware->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#hasDeliveryMode',
                'http://gch.utwente.nl/ontology#hasSubject',
                'http://gch.utwente.nl/ontology#isPartOfSpecialisation->http://www.w3.org/2000/01/rdf-schema#label',
                'http://gch.utwente.nl/ontology#isPartOfProgramme->http://www.w3.org/2000/01/rdf-schema#label'
                // 'http://gch.utwente.nl/ontology#isElectiveOf->http://www.w3.org/2000/01/rdf-schema#label',
                // 'http://gch.utwente.nl/ontology#isCoreOf->http://www.w3.org/2000/01/rdf-schema#label'
            ],
            config: {
                'http://gch.utwente.nl/ontology#hasPrerequisiteCourse->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Prerequisite course'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#requiresSoftware->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Required Software'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#hasDeliveryMode': {
                    label: ['Delivery Mode'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#hasSubject': {
                    label: ['Course subjects'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#isPartOfSpecialisation->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Specialisation track'],
                    objectBrowser: ['TagListBrowser']
                },
                'http://gch.utwente.nl/ontology#isPartOfProgramme->http://www.w3.org/2000/01/rdf-schema#label': {
                    label: ['Programme'],
                    objectBrowser: ['TagListBrowser']
                },
                // 'http://gch.utwente.nl/ontology#isElectiveOf->http://www.w3.org/2000/01/rdf-schema#label': {
                //     label: ['Elective courses'],
                //     objectBrowser: ['TagListBrowser']
                // },
                // 'http://gch.utwente.nl/ontology#isCoreOf->http://www.w3.org/2000/01/rdf-schema#label': {
                //     label: ['Core courses'],
                //     objectBrowser: ['TagListBrowser']
                // }
            }
        }
    }
};
