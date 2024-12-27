from flask import Flask, jsonify
import psycopg2

app = Flask(__name__)

DB_HOST = "db"
DB_NAME = "my_database"
DB_USER = "postgres"
DB_PASSWORD = "password"

def get_db_connection():
    conn = psycopg2.connect(
        host=DB_HOST,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    return conn

@app.route('/flask')
def flask_route():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM users;")
    names = [row[0] for row in cursor.fetchall()]
    conn.close()
    return jsonify({"user_names": names})

@app.route('/users')
def users_route():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, email FROM users;")
    users = [
        {"id": row[0], "name": row[1], "email": row[2]}
        for row in cursor.fetchall()
    ]
    conn.close()
    return jsonify(users)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
