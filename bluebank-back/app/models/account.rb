class Account < ApplicationRecord
  belongs_to :client

  validates_presence_of :cpf, :number, :agency

  def self.open(params)
    account = current_user.accounts.build(params)
    puts "CREATE ACCOUNT: #{account.attributes}"
    account.save!
  end

  def self.deposit(account, amount)
    puts "DEPOSIT #{amount} ON ACCOUNT ID #{account.id}"
    return false unless self.amount_valid?(amount)
    account.balance = (account.balance += amount).round(2)
    account.save!
  end

  def self.withdraw(account, amount)
    puts "WITHDRAW #{amount} ON ACCOUNT ID#{account.id}"
    return false unless self.amount_valid?(amount)
    account.balance = (account.balance -= amount).round(2)
    account.save!
  end

  def self.transfer(account, recipient, amount)
    puts "TRANSFER #{amount} FROM ACCOUNT ID#{account.id} TO ACCOUNT ID#{recipient.id}"
    return false unless self.amount_valid?(amount)
    ActiveRecord::Base.transaction do
      self.withdraw(account, amount)
      self.deposit(recipient, amount)
    end
  end

  private
  def self.amount_valid?(amount)
    if amount <= 0
      puts 'ERROR: AMOUNT MUST BE GREATER THAN 0.00'
      return false
    end
    return true
  end
end

