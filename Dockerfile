FROM ianwalter/puppeteer:latest
ADD . /app
WORKDIR /app

RUN npm install

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list
RUN apt-get update && apt-get --yes --only-upgrade install google-chrome-stable

RUN npm install chromedriver
RUN npm install wdio-chromedriver-service --save-dev

CMD pnpm docker_wdio