require 'rails_helper'

describe Client do

  describe '#create' do
    context 'with valid params' do
      let(:params) { { cpf: '12345678910' } }

      it 'returns created client' do
        client = described_class.create!(params)
        expect(client.id).not_to eq nil
      end
    end

    context 'with invalid params' do
      let(:without_cpf) { {  } }

      it 'validates presence of email attribute' do
        expect{described_class.create!(without_cpf)}.to raise_error ActiveRecord::RecordInvalid
      end

    end
  end
end