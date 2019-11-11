import json


def start(event, context):
    body = [
        {"number": 1, "name": "name1"},
        {"number": 2, "name": "name2"},
        {"number": 3, "name": "name3"},
        {"number": 4, "name": "name4"}
    ]

    print("run lambda with event: {}".format(event))

    response = {
        "statusCode": 200,
        "body": json.dumps(body),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials": True
        }
    }

    return response
