const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
    serverUrl: 'https://e776-2001-ee0-4101-a321-3531-875e-f91e-14d1.ngrok-free.app:3000/',
    options : {
        'sonar.projectDescription': 'This is a Node JS application',
        'sonar.projectName': 'Node JS Application - Sample',
        'sonar.projectKey':'NodeJsMithunTechnologies',
        'sonar.login': 'squ_9cf7f792ee0efaadc1836fc5a710fa0716b87fad',
        //'sonar.login': 'admin',
        //'sonar.password': 'admin',
        'sonar.projectVersion':'1.0',
        'sonar.language':'js',
        'sonar.sourceEncoding':'UTF-8',
        'sonar.sources': '.',
        //'sonar.tests': 'specs',
        //'sonar.inclusions' : 'src/**'
    },
}, () => {});