# NodeJS Instructions

## Using VScode

### 1. Clone this repository
Clone this repository.

### 2. Starting The Server
Make sure you have NodeJs and `npm Package manager` already installed on your PC, then run `npm start` or `node server.js`

### 3. Assing the Site
Open your Browser and search for `http://localhost:3000/` this opens the home page


## Creating new pages

To create new pages, access the `views` folder and create a new `.html` file.

### Serving the newly created site

You can server your new folder by creating a new route in the script.js simply using 

    app.get('/ ', async(req, res)=>{

        res.sendFile(process.cwd() + '/views/index.html');

    })



# Make formalized request for any questions
# Outline of the Roadmap would also be created
