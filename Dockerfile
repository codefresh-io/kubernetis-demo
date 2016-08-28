FROM node:onbuild
ARG test
ENV t = ${test}
RUN echo $t
