import os
import sys
import io
import pytest

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from app import app


def test_upload_and_list_files(tmp_path):
    app.config['UPLOAD_FOLDER'] = tmp_path
    os.makedirs(tmp_path, exist_ok=True)
    client = app.test_client()
    data = {
        'file': (io.BytesIO(b"example"), 'test.txt')
    }
    response = client.post('/upload', data=data, content_type='multipart/form-data')
    assert response.status_code == 201
    assert response.get_json()['filename'] == 'test.txt'

    list_response = client.get('/files')
    assert list_response.status_code == 200
    assert 'test.txt' in list_response.get_json()['files']

    download_response = client.get('/files/test.txt')
    assert download_response.status_code == 200
