from flask import Flask, jsonify, request, Response
from flask_cors import CORS
import json

# Initialising things needed for the application
app = Flask(__name__)
CORS(app)
with open('data/movie_metadata.json') as movief:
    jsonMovie = json.load(movief)
with open('data/theater_showtimes.json') as theatref:
    jsonTheatre = json.load(theatref)

# API test to make sure server is correctly configured
@app.route('/test')
def test():
    return jsonify({"Test": 200})

# Returns all theatres
# Done to make the solution more dynamic, but for this test's sake with the lower
@app.route('/get-all-theatres')
def getAllTheatres():
    return jsonify(jsonTheatre), 200

# Returns info regarding movie id
@app.route('/movie-info/<id>', methods=['GET'])
def getMovieInfo(id):
    # find info and return it
    for movie in jsonMovie:
        if (movie['id'] == id):
            return jsonify(movie), 200
    
    # if reach end of json and info not found
    return Response("{\"response_msg\": \"no such movies with that id\"}", status=204, mimetype='application/json')

# Returns info regarding theatre id
@app.route('/theatre-info/<id>', methods=['GET'])
def getTheatreInfo(id):
    # find info and return it
    for theatre in jsonTheatre:
        if (theatre['id'] == id):
            return jsonify(theatre), 200
    
    # if reach end of json and info not found
    return Response("{\"response_msg\": \"no such theatres with that id\"}", status=204, mimetype='application/json')

if __name__ == '__main__':
    app.run(debug=True)
