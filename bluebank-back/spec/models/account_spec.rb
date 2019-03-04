require 'rails_helper'

describe Account do
  let!(:client) { create(:client) }
  let!(:account) { create(:account, client_id: client.id) }

  describe '#open' do
    context 'with valid params' do
      let(:params) { attributes_for(:account, client_id: client.id) }

      it 'opens a new account' do
        opened = described_class.open(params)
        expect(opened).to eq true
      end
    end

    context 'with invalid params' do
      let(:without_number) { { client_id: '123b' } }
      let(:without_client_id) { { number: '123' } }
      let(:without_agency) { { client_id: '123b' } }

      it 'validates presence of number attribute' do
        expect{described_class.open(without_number)}.to raise_error ActiveRecord::RecordInvalid
      end

      it 'validates presence of agency attribute' do
        expect{described_class.open(without_agency)}.to raise_error ActiveRecord::RecordInvalid
      end

      it 'validates presence of client id attribute' do
        expect{described_class.open(without_client_id)}.to raise_error ActiveRecord::RecordInvalid
      end
    end
  end

  describe '#deposit' do
    context 'with valid params' do
      it 'deposit into account' do
        deposited = described_class.deposit(account, 9.99)
        expect(deposited).to eq true
      end
    end

    context 'when amount <= 0' do
      it 'returns falsy' do
        deposited = described_class.deposit(account, 0.00)
        expect(deposited).to eq false
      end
    end
  end

  describe '#withdraw' do
    context 'with valid params' do
      it 'withdraw from account' do
        withdrawn = described_class.withdraw(account, 9.99)
        expect(withdrawn).to eq true
      end
    end

    context 'when amount <= 0' do
      it 'returns falsy' do
        withdrawn = described_class.withdraw(account, 0.00)
        expect(withdrawn).to eq false
      end
    end
  end

  describe '#transfer' do
    let!(:client_recipient) { create(:client, cpf: '12345678910') }
    let(:params_recipient) { attributes_for(:account, client_id: client_recipient.id) }
    let!(:recipient) { create(:account, params_recipient) }

    context 'with valid params' do
      it 'transfer from one account to another account' do
        transfered = described_class.transfer(account, recipient, 9.99)
        expect(transfered).to eq true
      end
    end

    context 'when amount <= 0' do
      it 'returns false' do
        transfered = described_class.transfer(account, recipient, 0.00)
        expect(transfered).to eq false
      end
    end
  end
end