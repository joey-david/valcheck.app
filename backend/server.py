from flask import Flask

#initialize the app
app = Flask(__name__)

@app.route("/members")
def hello_world():
    return {"members": ["Member1", 2, "Member3"]}

if __name__ == "__main__":
    #run the app
    app.run(debug=True)