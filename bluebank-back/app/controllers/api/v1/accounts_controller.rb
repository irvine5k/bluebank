module Api
  module V1
    class AccountsController < ApplicationController
      before_action :authorized_action_request!

      def index
        @accounts = Account.all
      end
      # POST /accounts
      def create
          return head :unprocessable_entity unless Account.open(account_params)
      end

      # POST /accounts/1/transfer
      def transfer
          account = current_user.accounts.find(params[:id])
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
        params.require(:account).permit(:cpf, :number, :agency)
      end
    
    end
  end
end