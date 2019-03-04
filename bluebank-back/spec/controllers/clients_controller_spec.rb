require 'rails_helper'

describe ClientsController do
  describe 'POST create' do
    let(:params) { { client: attributes_for(:client) } }

    it 'returns created client id' do
      post :create, params: params
      expect(response_body_as_json['id']).not_to eq nil
    end
  end
end