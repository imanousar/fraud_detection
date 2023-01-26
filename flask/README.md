## Flask App

### Install

Create a virtual environment.

```cmd
python -m venv venv
source venv\Scripts\activate
```

Install the necessary libraries.

```
pip install -r requirements.txt
```

#### Local Run

In the top level of the directory of airbnb_app fire up a terminal and execute:

```cmd
python app.py
```

### Code Structure

#### Top level

- app.py: Applications entrypoint. Used to start the webserver. Here we register our blueprints
