document.getElementById('registerButtonHTML').addEventListener('click', saveUserInfo);
    function saveUserInfo() {
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database('.database/datasource.db');
        var userID = document.getElementById('useridInput').value;
        var username = document.getElementById('usernameInput').value;
        var email = document.getElementById('emailInput').value;
        var password = document.getElementById('passwordInput').value;
    
    db.run(`INSERT INTO info(userID, username, password, email) VALUES(?, ?, ?, ?)`, userID, username, password, email), function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
        };
    }