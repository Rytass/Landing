# Rytass
# Author: Chia Yu Pai (Rytass)

FROM rytass/node-nginx

MAINTAINER chiayu@rytass.com

ENV HOME /root
ENV PORT 80
ENV DEBUG Rytass:*
ENV NODE_ENV production

ADD nginx.conf /etc/nginx/nginx.conf
RUN chmod 644 /etc/nginx/nginx.conf
ADD dist/* /var/www/Rytass/
RUN mkdir -p /var/www/Rytass/fonts
RUN mkdir -p /var/www/Rytass/videos
ADD static/fonts/* /var/www/Rytass/fonts/
ADD static/videos/* /var/www/Rytass/videos/

WORKDIR /var/www/Rytass

EXPOSE 80

CMD nginx -g 'daemon off;'
