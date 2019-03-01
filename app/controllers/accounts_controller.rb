class AccountsController < ApplicationController
    skip_before_action :verify_authenticity_token

    # POST /accounts
    def create
        return head :unprocessable_entity unless Account.open(account_params)
    end

    # POST /accounts/1/deposit
    def deposit
        account = Account.find(params[:id])
        return head :not_found unless account
        return head :unprocessable_entity unless Account.deposit(account, amount)
        render json: {deposited: true}
    end

    # POST /accounts/1/withdraw
    def withdraw
        account = Account.find(params[:id])
        return head :not_found unless account
        return head :unprocessable_entity unless Account.withdraw(account, amount)
        render json: {withdrawn: true}
    end
    
    # POST /accounts/1/transfer
    def transfer
        account = Account.find(params[:id])
        return head :not_found unless account
    
        recipient_param = params.permit(:recipient_id)
        recipient = Account.find(recipient_param[:recipient_id])
        return head :not_found unless recipient
    
        return head :unprocessable_entity unless Account.transfer(account, recipient, amount)
        render json: {transfered: true}
    end

    private
    
    def amount
      param = params.permit(:amount)
      param[:amount].to_f
    end

    def account_params
      params.require(:account).permit(:number, :agency, :user_id)
    end
end
