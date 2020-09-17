###			· Backend
###			____· Babel
###			____· Express
###			____· Mongoose

###			· Frontend
###			____· React
###			____· Axios

###			---------------------------------------------------------------
###			·	Depends Babel 	npm 		Backend
###			npm i @babel/core
###			https://www.npmjs.com/package/@babel/core

###			·	depends Express 			Backend
###			npm i express
###			https://www.npmjs.com/package/express

###			·	depends Mongoose ODM 		Backend
###			npm i mongoose
###			https://www.npmjs.com/package/mongoose

###			·	Depends React npx 			Frontend
###			npx create-react-app my-app
###			https://es.reactjs.org/docs/create-a-new-react-app.html#create-react-app

###			·	Depends Axios npx 			Frontend
###			npm i axios
###			https://www.npmjs.com/package/axios
###			---------------------------------------------------------------

###			Pasos para ejecutar el ambiente
### 		tener instalado mongodb

###			------------------------------		mongodb 	linux	apt 	------------------------------

###			sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 4B7C549A058F8B6B
###			echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb.list

###			sudo apt update
###			sudo apt install mongodb-org

###			sudo apt install mongodb-org=4.2.8 mongodb-org-server=4.2.8 mongodb-org-shell=4.2.8 mongodb-org-mongos=4.2.8 mongodb-org-tools=4.2.8

###			sudo systemctl enable mongod
###			sudo systemctl start mongod
###			sudo systemctl stop mongod
###			sudo systemctl restart mongod

###			mongod --version

###			------------------------------		mongodb 	linux	apt 	--------------------------------

### npm install en el directorio backend	(npm -i)
### npm install en el directorio frontend	(npm -i)

### levantar mongo

###			------------------------------		mongod 	linux	levantar 	------------------------------

###			sudo systemctl start mongod
###			//sudo systemctl stop mongod
###			//sudo systemctl reset mongod

###			------------------------------		mongod 	linux	levantar 	------------------------------

### npm test (en el backend) (limpia la bd)
--------------------------
### npm run setUp (en el backend) (cargar la bd)

### npm start (en el backend) (levantar la api)

### npm start (en el frontend) (levantar la app)