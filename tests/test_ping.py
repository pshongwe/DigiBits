import os
import sys
import pytest

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from app import app


def test_ping_endpoint():
    with app.test_client() as client:
        response = client.get('/ping')
        assert response.status_code == 200
        assert response.get_json() == {"message": "pong!"}
