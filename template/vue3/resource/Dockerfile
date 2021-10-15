FROM  ${HARBOR_BASE_URL}/${JT_MGM_NAMESPACE}/tomcat:v8.5

MAINTAINER xuhuiqun "xuhuiqun@chinamobile.com"

ENV BASE_DIR="/usr/local/tomcat" 

WORKDIR /$BASE_DIR

# ADD dist/ webapps/web/
ADD dist/ webapps/ROOT/
ADD error.html webapps/ROOT/
ADD error.txt .

ADD start.sh bin/
RUN chmod +x /usr/local/tomcat/bin/start.sh

RUN sed -i '$d' conf/web.xml \
        && cat error.txt >> conf/web.xml \
        && rm error.txt

#ENTRYPOINT ["/usr/local/tomcat/bin/catalina.sh","run"]
ENTRYPOINT ["/usr/local/tomcat/bin/start.sh"]
