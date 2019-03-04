FactoryGirl.define do
    factory :account do
      number '123456'
      agency '123'
      balance 20.00
      client
    end
  end