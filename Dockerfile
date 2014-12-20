#
# Dawn
#

FROM dockerfile/nodejs

MAINTAINER Daniel Sont "dan.sont@gmail.com"
 
EXPOSE 8080

# create node user
RUN useradd -ms /bin/bash node

VOLUME /home/node/client
VOLUME /home/node/app
VOLUME /home/node/.npm-packages

# ADD webclient /home/node/client
# ADD app /home/node/app

RUN chown -R node:node /home/node

USER node
ENV HOME /home/node

# nodejs env
ENV NPM_PACKAGES ~/.npm-packages
ENV NODE_PATH $NPM_PACKAGES/lib/node_modules:$NODE_PATH
ENV PATH $NPM_PACKAGES/bin:$PATH
ENV MANPATH $NPM_PACKAGES/share/man:$MANPATH

RUN npm config set prefix $NPM_PACKAGES

# app env
ENV APP_PUBLIC /home/node/client/dist
ENV NODE_ENV development

WORKDIR /home/node/app

CMD /bin/bash
