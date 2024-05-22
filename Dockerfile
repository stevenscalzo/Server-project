# Utiliza una imagen base de Node.js
FROM node:lts

# Establece el directorio de trabajo
WORKDIR /app

# Instala MongoDB
RUN apt-get update && apt-get install -y mongodb

# Crea el directorio para MongoDB
RUN mkdir -p /data/db

# Instala el cliente de MongoDB
RUN apt-get install -y mongodb-clients

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias de la aplicación Node.js
RUN npm install

# Expone el puerto 3000 para la aplicación Node.js (si es necesario)
EXPOSE 3000

# Comando para iniciar la aplicación Node.js
CMD ["npm", "start"]
