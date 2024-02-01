import json

def load_intents(file_path):
    with open(file_path, 'r') as file:
        intents = json.load(file)
    return intents

def get_response(query_engine, intents, query):
    for intent in intents:
        if intent['pattern'] in query:
            return intent['response']
    return query_engine.query(query)
