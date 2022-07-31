from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
import numpy as np
app = Flask(__name__)


StoringSurvey = []

# ROUTES

@app.route('/hi')
def hello():
   return 'Hi hi hi hi hi hi hi hi hi'


@app.route('/')
def q1():
    global StoringSurvey 

    tosenddata = sum(StoringSurvey)
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('ars.html', data=data)   

@app.route('/q2')
def q2():
    global StoringSurvey 

    tosenddata = 100-((sum(StoringSurvey)*100)/len(StoringSurvey))
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('ars_q2.html', data=data)   

@app.route('/q3')
def q3():
    global StoringSurvey 

    tosenddata = 100-((sum(StoringSurvey)*100)/len(StoringSurvey))
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('ars_q3.html', data=data)   

@app.route('/q4')
def q4():
    global StoringSurvey 

    tosenddata = 100-((sum(StoringSurvey)*100)/len(StoringSurvey))
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('ars_q4.html', data=data)   

@app.route('/q5')
def q5():
    global StoringSurvey 

    tosenddata = 100-((sum(StoringSurvey)*100)/len(StoringSurvey))
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('ars_q5.html', data=data)   

@app.route('/q6')
def q6():
    global StoringSurvey 

    tosenddata = 100-((sum(StoringSurvey)*100)/len(StoringSurvey))
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('ars_q6.html', data=data)   

@app.route('/q7')
def q7():
    global StoringSurvey 

    tosenddata = 100-((sum(StoringSurvey)*100)/len(StoringSurvey))
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('ars_q7.html', data=data)   

@app.route('/q8')
def q8():
    global StoringSurvey 

    tosenddata = 100-((sum(StoringSurvey)*100)/len(StoringSurvey))
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('ars_q8.html', data=data)   

@app.route('/q9')
def q9():
    global StoringSurvey 

    tosenddata = 100-((sum(StoringSurvey)*100)/len(StoringSurvey))
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('ars_q9.html', data=data)   

@app.route('/q10')
def q10():
    global StoringSurvey 

    tosenddata = 100-((sum(StoringSurvey)*100)/len(StoringSurvey))
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('ars_q10.html', data=data) 

@app.route('/final')
def final():
    global StoringSurvey 

    tosenddata = 100-((sum(StoringSurvey)*100)/len(StoringSurvey))
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    return render_template('final.html', data=data)   



# AJAX FUNCTIONS

# ajax for people.js
 
@app.route('/save', methods=['GET', 'POST'])
def save():
    global StoringSurvey 

    json_data = request.get_json() 
    val =  json_data["value"] 
    
    # add new entry to array with 
    # a new id and the name the user sent in JSON
    StoringSurvey.append(int(val))
    tosenddata = sum(StoringSurvey)
    print(tosenddata)
    data = {
        "tosenddata": tosenddata
    }
    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(data = data)



if __name__ == '__main__':
   app.run(debug = True)




