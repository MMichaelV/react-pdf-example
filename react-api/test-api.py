import json


def start(event, context):
    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "input": event
    }

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
