## Deploying to Heroku with PSQL

This walkthrough assumes that you understand how make a simple express APP with a single route. This app has db base called usersTest with one table for users. The users table has two columns, name and id. 

If you need a head start when it comes to creating an express app, check [this](https://github.com/HalahRaadSalih/g16-project-settings) repo to get you started.


 Make sure you're logged in to your heroku account first. 
 
[Heroku APP](https://fierce-headland-14595.herokuapp.com) 
<br>

### Steps
 
 - Create a Heroku app using the following command:
 	
 	```
 		$ 	heroku create
 		
 	```

- Deploy your app using the following command:

	```
		$ 	git push heroku master

	```
	
- To display the log for heroku, you have this command:
	
	```
		$  heroku logs --tail

	```

<br>	
But, wait … what about the database mentioned?

The data base you create on your laptop, does in fact exist on your laptop, heroku doesn't know a thing about it, because that database is for development environment and it strictly for development and Heroku's environment is for production. What does that mean? It means we need to head to our knexfile.js and head to the production objection and fix/add something there. Here is the current production object:

```
	production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    }
```	

We need to have a production environment database that we can reference to in production connection database key. How do we get to create db with our heroku app? Here is how:

```
	$ heroku addons:create heroku-postgresql:hobby-dev
	
```

This creates a database for your app. But how do I access this database? Type this command:

```
	$ heroku config
	
```

You'll get something similar: 
<br>

![screenshot](assets/images/screenshot.png)

See that DATABASE_URL? That's a link to your production environment that was create for by heroku after the previous command. Copy that URL and head to your `knexfile.js`, to production object and paste the url to database connection key.

Make sure you push your changes to your master, then deploy the changes to heroku like you did before. Open your heroku app.

- To create run the migrations that you have created, you need to run them for heroku using the command:

	```
		$ heroku run knex migrate:latest
		
	```
	
- You need to run that command whenever you have some new migration. 	