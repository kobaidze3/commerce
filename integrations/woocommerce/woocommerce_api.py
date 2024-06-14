import requests
import logging

class WoocommerceAPI:
    def __init__(self, base_url, consumer_key, consumer_secret):
        self.base_url = base_url
        self.consumer_key = consumer_key
        self.consumer_secret = consumer_secret
        self.auth = (self.consumer_key, self.consumer_secret)
        self.session = requests.Session()
        self.session.auth = self.auth

    def _handle_response(self, response):
        if response.status_code in [200, 201]:
            return response.json()
        else:
            logging.error(f"Error {response.status_code}: {response.text}")
            response.raise_for_status()

    def get(self, endpoint, params=None):
        url = f"{self.base_url}/{endpoint}"
        try:
            response = self.session.get(url, params=params)
            return self._handle_response(response)
        except requests.RequestException as e:
            logging.error(f"GET request failed: {e}")
            raise

    def post(self, endpoint, data=None):
        url = f"{self.base_url}/{endpoint}"
        try:
            response = self.session.post(url, json=data)
            return self._handle_response(response)
        except requests.RequestException as e:
            logging.error(f"POST request failed: {e}")
            raise

    def put(self, endpoint, data=None):
        url = f"{self.base_url}/{endpoint}"
        try:
            response = self.session.put(url, json=data)
            return self._handle_response(response)
        except requests.RequestException as e:
            logging.error(f"PUT request failed: {e}")
            raise

    def delete(self, endpoint):
        url = f"{self.base_url}/{endpoint}"
        try:
            response = self.session.delete(url)
            return self._handle_response(response)
        except requests.RequestException as e:
            logging.error(f"DELETE request failed: {e}")
            raise

