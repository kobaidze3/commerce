import unittest
from unittest.mock import patch, MagicMock
from integrations.woocommerce.woocommerce_integration import WoocommerceIntegration
from config.settings import Settings

class TestWoocommerceIntegration(unittest.TestCase):

    def setUp(self):
        self.settings = Settings()
        self.woocommerce_integration = WoocommerceIntegration(self.settings)

    @patch('integrations.woocommerce.woocommerce_integration.WoocommerceAPI')
    def test_get_orders(self, MockWoocommerceAPI):
        mock_api_instance = MockWoocommerceAPI.return_value
        mock_api_instance.get.return_value = {'orders': []}

        orders = self.woocommerce_integration.get_orders()

        mock_api_instance.get.assert_called_once_with('orders')
        self.assertEqual(orders, {'orders': []})

    @patch('integrations.woocommerce.woocommerce_integration.WoocommerceAPI')
    def test_create_order(self, MockWoocommerceAPI):
        mock_api_instance = MockWoocommerceAPI.return_value
        mock_api_instance.post.return_value = {'order': {'id': 1}}

        order_data = {'order': {'product_id': 123, 'quantity': 2}}
        response = self.woocommerce_integration.create_order(order_data)

        mock_api_instance.post.assert_called_once_with('orders', order_data)
        self.assertEqual(response, {'order': {'id': 1}})

    @patch('integrations.woocommerce.woocommerce_integration.WoocommerceAPI')
    def test_update_order(self, MockWoocommerceAPI):
        mock_api_instance = MockWoocommerceAPI.return_value
        mock_api_instance.put.return_value = {'order': {'id': 1, 'status': 'completed'}}

        order_id = 1
        update_data = {'order': {'status': 'completed'}}
        response = self.woocommerce_integration.update_order(order_id, update_data)

        mock_api_instance.put.assert_called_once_with(f'orders/{order_id}', update_data)
        self.assertEqual(response, {'order': {'id': 1, 'status': 'completed'}})

    @patch('integrations.woocommerce.woocommerce_integration.WoocommerceAPI')
    def test_delete_order(self, MockWoocommerceAPI):
        mock_api_instance = MockWoocommerceAPI.return_value
        mock_api_instance.delete.return_value = {'deleted': True}

        order_id = 1
        response = self.woocommerce_integration.delete_order(order_id)

        mock_api_instance.delete.assert_called_once_with(f'orders/{order_id}')
        self.assertEqual(response, {'deleted': True})

if __name__ == '__main__':
    unittest.main()

