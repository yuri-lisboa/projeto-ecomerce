FROM node:18

WORKDIR /app
ADD . /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "tsc"]

# FROM node:18
# COPY --from=build /app/build /app
# COPY --from=build /app/package.json /app/package.json
# COPY --from=build /app/node_modules /app/node_modules
# COPY --from=build /app/jest.config.ts /app/jest.config.ts