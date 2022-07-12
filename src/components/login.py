from flask import Flask, render_template
from components import SignIn
from components import SignUp
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError

app = Flask(__name__)
db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'thisisasecretkey'

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.String(50), nullable=False)

class RegisterForm(FlaskForm):
    # username = get username from SignUp
    # password = get password from SignUp
    # submit = get submit field from SignUp

    def validate_username(self, username):
        existing_user_username = User.query.filter_by(
            username=username.data).first()

        if existing_user_username:
            raise ValidationError("Username taken")

@app.route("\sign-in")
def home():
    #return the signIn.js here
    return render_template(SignIn.js)

@app.route("\sign-up")
def home():
    #form = 
    #return the signIn.js here
    return render_template(SignUp.js)

if __name__ == '__main__':
    app.run(debug=True)

