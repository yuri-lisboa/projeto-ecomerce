FROM node:17

WORKDIR /app
ADD . /app
COPY package.json .
RUN npm install
COPY . .
ENV PORT 3000
EXPOSE $PORT
CMD ["node", "server.ts"]
# CMD ["npm", "run", "dev"]

# FROM node:18
# COPY --from=build /app/build /app
# COPY --from=build /app/package.json /app/package.json
# COPY --from=build /app/node_modules /app/node_modules
# COPY --from=build /app/jest.config.ts /app/jest.config.ts