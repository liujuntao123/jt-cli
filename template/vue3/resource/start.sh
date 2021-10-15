#!/bin/bash
sed -i  "s|<body>|<body keycloakUrl=\"$KEYCLOAK_URL\">|" /usr/local/tomcat/webapps/ROOT/index.html
/bin/bash /usr/local/tomcat/bin/catalina.sh run 
