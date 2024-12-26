from flask import Flask, render_template
import psycopg2

app = Flask(__name__)

@app.route('/users')
def users():
    conn = psycopg2.connect(
        host="postgres",
        database="your_db",
        user="your_user",
        password="your_password"
    )
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users;")
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('users.html', users=users)

@app.route('/')
def home():
    return "Welcome to the home page!"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
